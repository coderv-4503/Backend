//const app = require('../routes/user.route')
const request = require('supertest');
const baseURL = "https://location-server-y9kg.onrender.com"

// test('toBE', ()=>{
//     expect(add(1,2)).toBe(3)
// })

// beforeAll(async () => {
//   // Start the server before running tests
//   server = await new Promise((resolve, reject) => {
//     const instance = app.listen(port, (err) => {
//       if (err) {
//         reject(err);
//       } else {
//         console.log('Server started on port ' + port);
//         resolve(instance);
//       }
//     });
//   });
// });

// afterAll((done) => {
//   // Close the server after running tests
//   server.close(done);
// });

describe("POST /api/auth/createuser", () => {
    it('should return a token and user data when provided with valid credentials', async () => {
    const response = await request(baseURL)
      .post('/signin')
      .send({ email: 'abcd@gmail.com', password: '1234' });
      console.log(response);

    expect(response.statusCode).toBe(200);
    //expect(response.body.token).toBeDefined();
    //expect(response.body._id).toBe(user._id.toString());
  });
});

  