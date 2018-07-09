const request = require('request-promise');

module.exports = businessName => {
    // https://www.yelp.com/biz/tommys-original-world-famous-hamburgers-los-angeles-12
    
    const url = `https://www.yelp.com/biz/${businessName}`;
    return request({
        method: 'GET',
        uri: url
    })
}