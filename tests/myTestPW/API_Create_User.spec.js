import { test, expect } from '@playwright/test'
import {faker} from '@faker-js/faker'
import {DateTime} from 'luxon'
const requestBody = require('../myTestPW/test_data/requestBody.json')
//const accessTokenRequestBody = require('../myTestPW/test_data/access_token_requestBody.json')
var userId;

test('Create users', async({request})=>
{
const response = await request.get('/api/users?page=2')
const responseBody = await response.json();
console.log(responseBody)
//console.log(await response.status())
 expect(await response.status()).toBe(200)
})

test('Create single user', async({request})=>
  {
   const response = await request.get('/api/users/2')
   const createResponse = await response.json()
   console.log(createResponse)
   userId = createResponse.data.id
   console.log(userId)
   expect(response.ok).toBeTruthy()
  expect(response.status()).toBe(200)
  expect(createResponse.data.id).toBe(userId)
  expect(createResponse.data.first_name).toEqual('Janet')
  // check the property name and its value
  expect(createResponse.data).toHaveProperty('last_name', 'Weaver')
  // Validate nested json response
  console.log(createResponse.support.url)
   expect(createResponse.support).toHaveProperty('url', 'https://reqres.in/#support-heading')
   expect(createResponse.support).toHaveProperty('text','To keep ReqRes free, contributions towards server costs are appreciated!')
})

test('Create user with post', async ({request})=>
  {
   const requestResponse = await request.post('/api/users',
      {
        data:{"name": "yomi","job": "QA engineer"},
        headers:{"Accept":"application/json"}
      });
    console.log(await requestResponse)
    expect(requestResponse.ok).toBeTruthy()
    expect(requestResponse.status()).toBe(201)
    const createResponse = await requestResponse.json()
     expect(createResponse.name).toBe('yomi')
     userId = createResponse.id
    /* expect(await createResponse).toEqual(expect.objectContaining(
      {
        "name": "QA engineer",
        "job": "yomi",
        "id": userId,
      //  "createdAt": "2024-08-09T09:53:08.074Z"
      }
     ))*/
    console.log(userId)
  })

test('Create user with post using static json file', async ({request})=>
    {
     const requestResponse = await request.post('/api/users',
        {
          data:requestBody,
          headers:{"Accept":"application/json"}
        });
      console.log(await requestResponse)
      expect(await requestResponse.ok).toBeTruthy()
      expect(await requestResponse.status()).toBe(201)
      console.log(await requestResponse.statusText())
      //console.log(await requestResponse.body())
      console.log(await requestResponse.text())
      console.log(await requestResponse.json())
      const createResponse = await requestResponse.json()
      expect(createResponse.name).toBe('morpheus')
      userId = createResponse.id
        //    "job": "leader"
      /* expect(await createResponse).toEqual(expect.objectContaining(
        {
          "name": "QA engineer",
          "job": "yomi",
          "id": userId,
        //  "createdAt": "2024-08-09T09:53:08.074Z"
        }
       ))*/
      console.log(userId)
    })

test('Update user',async({request})=>
  {
   const update = await request.put('/api/users/'+ userId,
      {
        data:{"name": "abass", "job": "enterpreneum"},
        header:{"Accept":"application/json"}
      }
    )
    console.log(update)
   const convert2Json = await update.json()
   console.log(convert2Json)

  })

  test('Delete user', async({request})=>
  {
   const deleteUser = await request.delete('/api/users/'+userId, 
    {
      header:{"Accept":"application/json"}
    })
    console.log(deleteUser)
   expect(deleteUser.status()).toBe(204)
  })

  test('create test with dynamic data using faker and luxon', async ({request})=>
  {
    var first_name = faker.person.firstName()
    var job_title = faker.person.jobTitle()
    var date = DateTime.now()
    var created_date = date.toFormat('yyyy-MM-dd hh:mm:ss')
    var todayDate = date.toFormat('yyyy-MM-dd')
    var aWeekFromNow = date.plus({day:7}).toFormat('yyyy-MM-dd')
    //2024-08-09T09:53:08.074Z

    console.log(created_date)
    console.log(todayDate)
    console.log(aWeekFromNow)

       const requestResponse = await request.post('/api/users',
          {
            data:{"name": first_name,"job": job_title},
            headers:{"Accept":"application/json"}
          });
        console.log(await requestResponse)
        expect(requestResponse.ok).toBeTruthy()
        expect(requestResponse.status()).toBe(201)
        const createResponse = await requestResponse.json()
         expect(createResponse.name).toBe(first_name)
         expect(createResponse.job).toBe(job_title)
         userId = createResponse.id
         /*
         expect(await createResponse).toEqual(expect.objectContaining(
          {
            "name": first_name,
            "job": job_title,
            "id": userId,
            "createdAt": "2024-08-09T09:53:08.074Z"
          }))
          */
        })

  test('Generate access token to update booking', async({request})=>
  {
     var postResponse = await request.post('https://restful-booker.herokuapp.com/auth',
      {
        headers:{"Content-Type":"application/json"}, 
        data:{"username":"admin","password":"password123"}
      })
     const responseJson= await postResponse.json()
     const accessToken = await responseJson.token
     console.log("accessToken no is " + accessToken)
    // Todo
    //  var postResponse = await request.put('https://restful-booker.herokuapp.com/booking/${b_id}',
    //   {
    //     headers:{"Content-Type":"application/json"}, 
    //     data:{"username":"admin","password":"password123"}
    //   })
    
    // Add token into local storage browser
    test('',async({page})=>
    {
      page.addInitScript(value, ()=>
      {
        window.localStorage.setItem('token',value);  
      }, token)
    })

  })