const { I } = inject();
const faker = require('faker');

let name_user,job_user
Given('I send a GET request to the users endpoint', async () => {
  I.sendGetRequest('/users?page=2');
});

Given(/^the response status should be (.*)$/, async (code) => {
  I.seeResponseCodeIs(parseInt(code));
  I.seeResponseCodeIsSuccessful()
});

Given('the response should contain a list of users', async () => {
  I.seeResponseContainsJson({
    data: [
      { id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg" },
      { email: "rachel.howell@reqres.in" }
    ]
  });
});

Given('I send a GET request to the user endpoint with id 2', async () => {
  I.sendGetRequest('/users/2');
});

Given('the response should contain details of the user with id 2', async () => {
  I.seeResponseContainsJson({
    data: 
      { id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg"
      }
  });
});

Given('the request body for creating a new user', async () => {
  name_user = faker.name.firstName();
  job_user = faker.name.jobTitle();
  userData = {
    name: name_user,
    job: job_user
  };
});

Given('I send a POST request to create a new user with valid data', async () => {
   // Make a POST request to create a new user
   I.sendPostRequest('/api/users', userData);
});

Given('the response should contain details of the created user', async () => {
  I.seeResponseContainsJson({
    name: name_user,
    job: job_user
  });
});
