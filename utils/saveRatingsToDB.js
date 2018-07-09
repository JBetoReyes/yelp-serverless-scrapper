const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports = (yelpData, businessName) => {

    const { reviewCount, rating } = yelpData;
    const date = JSON.stringify(new Date());
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            businessName,
            reviewCount,
            rating,
            scrapedAt: date
        }
    };

    dynamoDb.put(params, err => {
        console.log(JSON.stringify(params));
        
        var message = '';
        if (err) {
            message = `Error saving data in DynamoDB ${JSON.stringify(err)}`;
            console.log(message);
            return Promise.reject(message);
        } else {
            return Promise.resolve(params.Item);
        }
    });
};