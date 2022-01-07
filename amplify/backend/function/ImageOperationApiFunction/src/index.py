import awsgi
import boto3
import os
from flask_cors import CORS
from flask import Flask, json, jsonify, request
from uuid import uuid4
from boto3.dynamodb.conditions import Key, Attr

BASE_ROUTE = "/image"

TABLE = os.environ.get("STORAGE_IMAGESTORAGE_NAME")
# TAG_TABLE = os.environ.get("STORAGE_TAGSSTORAGE_NAME")
# IMAGE_TAG_TABLE = os.environ.get("STORAGE_IMAGEINFOTAGSSTORAGE_NAME")

client = boto3.client('dynamodb')
resource = boto3.resource('dynamodb')
res_table = resource.Table(TABLE)
app = Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE + '/register', methods=['POST'])
# 画像情報登録処理
def register_imageinfo():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'img_id': {'S': str(uuid4())},
        'user_id': {'S': request_json.get('user_id')},
        'img_name': {'S': request_json.get('img_name')},
        'img_path': {'S': request_json.get('img_path')},
        'img_size': {'N': request_json.get('img_size')},
        'img_type': {'S': request_json.get('img_type')},
        'resolution': {'N': request_json.get('resolution')},
        'photographic_equipment': {'S': request_json.get('photographic_equipment')},
        'shoot_date': {'S': request_json.get('shoot_date')},
        'shoot_location': {'S': request_json.get('shoot_location')},
        'number_of_downloads': {'N': request_json.get('number_of_downloads')},
        'public': {'S': request_json.get('public')},
        'private': {'S': request_json.get('private')},
        'upload_date': {'S': request_json.get('upload_date')}
    })
    return jsonify(message="ImageInfo Registered!")


@app.route(BASE_ROUTE + '/<image_id>/get', methods=['GET'])
# 画像詳細取得処処理
def get_imagedetails(image_id):
    # image = res_table.get_item(Key={
    #     'img_id': {'S': image_id}})
    # return jsonify(data=image)
    response = res_table.get_item(Key={'img_id': image_id})
    return jsonify(data=response['Item'])
    # return response['Item']
    # image = client.get_item(TableName=TABLE, Key={
    #     'img_id': {'S': image_id}})
    # return jsonify(data=image)


@app.route(BASE_ROUTE + '/<image_id>/delete', methods=['DELETE'])
# 画像情報削除処理
def delete_imageinfo(image_id):
    client.delete_item(TableName=TABLE, Key={
        'img_id': {
            'S': image_id
        }
    })
    return jsonify(message="image delected")


@app.route(BASE_ROUTE + '/<image_id>/update', methods=['PUT'])
# 画像情報更新処理
def update_imageinfo(image_id):
    client.update_item(TableName=TABLE,
                       Key={'img_id': {'S': image_id}},
                       UpdateExpression='SET #user_id=:user_id,#img_name=:img_name,#img_path=:img_path,#img_size=:img_size,#img_type=:img_type,#resolution=:resolution,#photographic_equipment=:photographic_equipment,#shoot_date=:shoot_date,#shoot_location=:shoot_location,#number_of_downloads=:number_of_downloads,#public=:public,#private=:private,#upload_date=:upload_date',
                       ExpressionAttributeNames={
                           '#user_id': 'user_id',
                           '#img_name': 'img_name',
                           '#img_path': 'img_path',
                           '#img_size': 'img_size',
                           '#img_type': 'img_type',
                           '#resolution': 'resolution',
                           '#photographic_equipment': 'photographic_equipment',
                           '#shoot_date': 'shoot_date',
                           '#shoot_location': 'shoot_location',
                           '#number_of_downloads': 'number_of_downloads',
                           '#public': 'public',
                           '#private': 'private',
                           '#upload_date': 'upload_date'
                       },
                       ExpressionAttributeValues={
                           ':user_id': {'S': request.json['user_id']},
                           ':img_name': {'S': request.json['img_name']},
                           ':img_path': {'S': request.json['img_path']},
                           ':img_size': {'N': request.json['img_size']},
                           ':img_type': {'S': request.json['img_type']},
                           ':resolution': {'N': request.json['resolution']},
                           ':photographic_equipment': {'S': request.json['photographic_equipment']},
                           ':shoot_date': {'S': request.json['shoot_date']},
                           ':shoot_location': {'S': request.json['shoot_location']},
                           ':number_of_downloads': {'N': request.json['number_of_downloads']},
                           ':public': {'S': request.json['public']},
                           ':private': {'S': request.json['private']},
                           ':upload_date': {'S': request.json['upload_date']}
                       })
    return jsonify(message="image updated")


@app.route(BASE_ROUTE + '/imagelist', methods=['GET'])
# 画像情報リスト取得
def list_images():
     result = res_table.scan()
     result['Items']
     print(result)
     return jsonify(data=result)

    # return jsonify(data=client.scan(TableName=TABLE))

@app.route(BASE_ROUTE + '/<image_name>/search', methods=['GET'])
# 画像情報検索
def search_images(image_name):
     result = res_table.scan(FilterExpression=Attr('img_name').contains(image_name))
     result['Items']
     print(result)
     return jsonify(data=result)

    # return jsonify(data=client.scan(TableName=TABLE))


def handler(event, context):
    return awsgi.response(app, event, context)
