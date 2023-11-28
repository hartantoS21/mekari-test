const { I } = inject();
const faker = require('faker');

Feature('Reqres');

Scenario('GET list of users', async ({ I }) => {
  I.sendGetRequest('/users?page=2');
  I.seeResponseCodeIs(200);
  I.seeResponseCodeIsSuccessful()
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

Scenario('GET single user', async ({ I }) => {
  I.sendGetRequest('/users/2');
  I.seeResponseCodeIs(200);
  I.seeResponseCodeIsSuccessful()
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

Scenario('POST to create a new user', async ({ I }) => {
  // Request body for creating a new user
  name_user = faker.name.firstName();
  job_user = faker.name.jobTitle();
  const userData = {
    name: name_user,
    job: job_user
  };

  // Make a POST request to create a new user
  I.sendPostRequest('/api/users', userData);

  // Assert the response status code
  I.seeResponseCodeIs(201);
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsJson({
    name: name_user,
    job: job_user
  });
});