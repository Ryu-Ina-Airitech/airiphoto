export type AmplifyDependentResourcesAttributes = {
  function: {
    sampleapi: {
      Name: "string";
      Arn: "string";
      Region: "string";
      LambdaExecutionRole: "string";
    };
  };
  api: {
    sampleapi: {
      RootUrl: "string";
      ApiName: "string";
      ApiId: "string";
    };
  };
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
