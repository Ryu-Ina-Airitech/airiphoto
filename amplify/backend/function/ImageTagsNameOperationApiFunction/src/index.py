import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, json, jsonify, request
from uuid import uuid4

BASE_ROUTE = "/image/tag"

TABLE = os.environ.get("STORAGE_TAGSSTORAGE_NAME")

client = boto3.client('dynamodb')
app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/register', methods=['POST'])
# タッグ情報登録処理
def register_taginfo():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'tag_id': {'S': str(uuid4())},
        'tag_name': {'S': request_json.get('tag_name')}
    })
    return jsonify(message="TagInfo Registered!")


@app.route(BASE_ROUTE + '/<tag_id>/get', methods=['GET'])
# タッグ情報取得処理
def get_taginfo(tag_id):
    tag = client.get_item(TableName=TABLE, Key={
        'tag_id': {'S': tag_id}})
    return jsonify(data=tag)


@app.route(BASE_ROUTE + '/<tag_id>/delete', methods=['DELETE'])
# タッグ削除処理
def delete_tag(tag_id):
    client.delete_item(TableName=TABLE, Key={
        'tag_id': {
            'S': tag_id
        }
    })
    return jsonify(message="tags delected")


@app.route(BASE_ROUTE + '/<tag_id>/update', methods=['PUT'])
# タッグ情報更新処理
def update_tag(tag_id):
    client.update_item(TableName=TABLE,
                       Key={'tag_id': {'S': tag_id}},
                       UpdateExpression='SET #tag_name=:tag_name',
                       ExpressionAttributeNames={
                           '#tag_name': 'tag_name'
                       },
                       ExpressionAttributeValues={
                           ':tag_name': {'S': request.json['tag_name']}
                       })
    return jsonify(message="tag updated")


@app.route(BASE_ROUTE + '/tagnamelist', methods=['GET'])
# タッグ名リスト取得
def list_tags():
    return jsonify(data=client.scan(TableName=TABLE))


def handler(event, context):
    return awsgi.response(app, event, context)
