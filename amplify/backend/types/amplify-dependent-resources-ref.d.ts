export type AmplifyDependentResourcesAttributes = {
    "function": {
        sampleapi: {
        Name: "string";
        Arn: "string";
        Region: "string";
        LambdaExecutionRole: "string";
      },
        "UserOperationApiFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "ImageOperationApiFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "ImageTagsNameOperationApiFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "ImageInfoTagOperationApiFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        ampleapi: {
            RootUrl: "string";
            ApiName: "string";
            ApiId: "string";
          },
        "photostockapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "UserStorage": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "ImageStorage": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "ImageInfoTagsStorage": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        },
        "TagsStorage": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    auth: {
        airiphotofb50055a: {
          IdentityPoolId: "string";
          IdentityPoolName: "string";
          UserPoolId: "string";
          UserPoolArn: "string";
          UserPoolName: "string";
          AppClientIDWeb: "string";
          AppClientID: "string";
        };
      };
};
