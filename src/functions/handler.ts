import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const hasanTest = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult>=> {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
