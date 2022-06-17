const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForLogin :
        {
        username : "superadmin@mail.com",
        password : "123456",
        testcaseData : "abc"
        }
    }   
)