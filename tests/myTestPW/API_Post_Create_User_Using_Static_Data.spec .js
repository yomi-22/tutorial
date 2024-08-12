import { test, expect } from '@playwright/test'
//import createUserData from '
const createBody = require('../test_data/requestBody.json')

//C:\Yomi Repo\MyTestScript\test_data\requestBody.json

test('Create user with post using static json file', async ({request})=>
{
 const requestResponse = await request.post('/api/users',
    {
      //data:{"name": "yomi","job": "QA engineer"},
      data:createBody,
      headers:{"Accept":"application/json"}
    });
  console.log(await requestResponse)
  expect(requestResponse.ok).toBeTruthy()
})