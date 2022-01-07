import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, json, jsonify, request
from uuid import uuid4

BASE_ROUTE = "/user"

TABLE = os.environ.get("STORAGE_USERSTORAGE_NAME")
client = boto3.client('dynamodb')
resource = boto3.resource('dynamodb')
res_table = resource.Table(TABLE)
app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/register', methods=['POST'])
# ユーザー情報登録処理
def create_user():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'user_id': {'S': str(uuid4())},
        'user_name': {'S': request_json.get('user_name')},
        'email': {'S': request_json.get('email')},
        'password': {'S': request_json.get('password')},
        'birthdate': {'S': request_json.get('birthdate')},
        'profile_photo': {'S': request_json.get('profile_photo')},
        'biography': {'S': request_json.get('biography')}

    })
    return jsonify(message="userCreated")


@app.route(BASE_ROUTE + '/<user_id>/get', methods=['GET'])
# ユーザー情報取得処理
def get_user(user_id):
    # user = client.get_item(TableName=TABLE, Key={
    #                        'user_id': {'S': user_id}})
    # return jsonify(data=user)
    response = res_table.get_item(Key={'user_id': user_id})
    return jsonify(data=response)


@app.route(BASE_ROUTE + '/<user_id>/delete', methods=['DELETE'])
# ユーザー情報削除処理
def delete_user(user_id):
    client.delete_item(TableName=TABLE, Key={
        'user_id': {
            'S': user_id
        }
    })
    return jsonify(message="user delected")


@app.route(BASE_ROUTE + '/<user_id>/update', methods=['PUT'])
# ユーザー情報更新処理
def update_user(user_id):
    client.update_item(TableName=TABLE,
                       Key={'user_id': {'S': user_id}},
                       UpdateExpression='SET #user_name=:user_name,#email=:email,#password=:password,#birthdate=:birthdate,#profile_photo=:profile_photo,#biography=:biography',
                       ExpressionAttributeNames={
                           '#user_name': 'user_name',
                           '#email': 'email',
                           '#password': 'password',
                           '#birthdate': 'birthdate',
                           '#profile_photo': 'profile_photo',
                           '#biography': 'biography'
                       },
                       ExpressionAttributeValues={
                           ':user_name': {'S': request.json['user_name']},
                           ':email': {'S': request.json['email']},
                           ':password': {'S': request.json['password']},
                           ':birthdate': {'S': request.json['birthdate']},
                           ':profile_photo': {'S': request.json['profile_photo']},
                           ':biography': {'S': request.json['biography']}
                       })
    return jsonify(message="user updated")


@app.route(BASE_ROUTE + '/userlist', methods=['GET'])
# ユーザーリスト取得処理
def list_users():
    return jsonify(data=client.scan(TableName=TABLE))


def handler(event, context):
    return awsgi.response(app, event, context)
