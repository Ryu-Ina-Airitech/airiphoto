import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, json, jsonify, request
from uuid import uuid4

BASE_ROUTE = "/image/imageinfotag"

TABLE = os.environ.get("STORAGE_IMAGEINFOTAGSSTORAGE_NAME")

client = boto3.client('dynamodb')
app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/register', methods=['POST'])
# タッグ情報登録処理
def register_imageinfotag():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'img_id': {'S': request_json.get('img_id')},
        'tag0_id': {'S': request_json.get('tag0_id')},
        'tag1_id': {'S': request_json.get('tag1_id')},
        'tag2_id': {'S': request_json.get('tag2_id')},
        'tag3_id': {'S': request_json.get('tag3_id')},
        'tag4_id': {'S': request_json.get('tag4_id')},
        'tag5_id': {'S': request_json.get('tag5_id')},
        'tag6_id': {'S': request_json.get('tag6_id')},
        'tag7_id': {'S': request_json.get('tag7_id')},
        'tag8_id': {'S': request_json.get('tag8_id')},
        'tag9_id': {'S': request_json.get('tag9_id')}
    })
    return jsonify(message="ImageInfoTag Link Registered!")


@app.route(BASE_ROUTE + '/<tag_id>/get', methods=['GET'])
# タッグ情報取得処理
def get_imageinfotag(tag_id):
    tag = client.get_item(TableName=TABLE, Key={
        'id': {'S': tag_id}})
    return jsonify(data=tag)


@app.route(BASE_ROUTE + '/<tag_id>/delete', methods=['DELETE'])
# タッグ削除処理
def delete_imageinfotag(tag_id):
    client.delete_item(TableName=TABLE, Key={
        'id': {
            'S': tag_id
        }
    })
    return jsonify(message="tags delected")


@app.route(BASE_ROUTE + '/<tag_id>/update', methods=['PUT'])
# タッグ情報更新処理
def update_imageinfotag(tag_id):
    client.update_item(TableName=TABLE,
                       Key={'id': {'S': tag_id}},
                       UpdateExpression='SET #img_id=:img_id,#tag0_id=:tag0_id,#tag1_id=:tag1_id,#tag2_id=:tag2_id,#tag3_id=:tag3_id,#tag4_id=:tag4_id,#tag5_id=:tag5_id,#tag6_id=:tag6_id,#tag7_id=:tag7_id,#tag8_id=:tag8_id,#tag9_id=:tag9_id',
                       ExpressionAttributeNames={
                           '#img_id': 'img_id',
                           '#tag0_id': 'tag0_id',
                           '#tag1_id': 'tag1_id',
                           '#tag2_id': 'tag2_id',
                           '#tag3_id': 'tag3_id',
                           '#tag4_id': 'tag4_id',
                           '#tag5_id': 'tag5_id',
                           '#tag6_id': 'tag6_id',
                           '#tag7_id': 'tag7_id',
                           '#tag8_id': 'tag8_id',
                           '#tag9_id': 'tag9_id'
                       },
                       ExpressionAttributeValues={
                           ':img_id': {'S': request.json['img_id']},
                           ':tag0_id': {'S': request.json['tag0_id']},
                           ':tag1_id': {'S': request.json['tag1_id']},
                           ':tag2_id': {'S': request.json['tag2_id']},
                           ':tag3_id': {'S': request.json['tag3_id']},
                           ':tag4_id': {'S': request.json['tag4_id']},
                           ':tag5_id': {'S': request.json['tag5_id']},
                           ':tag6_id': {'S': request.json['tag6_id']},
                           ':tag7_id': {'S': request.json['tag7_id']},
                           ':tag8_id': {'S': request.json['tag8_id']},
                           ':tag9_id': {'S': request.json['tag9_id']}

                       })
    return jsonify(message="imageinfotag updated")


@app.route(BASE_ROUTE + '/taglist', methods=['GET'])
# タッグリスト取得処理
def list_tags():
    return jsonify(data=client.scan(TableName=TABLE))


def handler(event, context):
    return awsgi.response(app, event, context)
