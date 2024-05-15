import http from "k6/http";
import { check, sleep } from "k6";
//import faker from "https://cdn.jsdelivr.net/gh/Marak/faker.js@master/examples/browser/js/faker.js";

const testConfig = JSON.parse(open("op2.json"));
export const options = testConfig;

// const baserUrl = "https://restful-booker.herokuapp.com/";
// const endPointBooking = "booking";

/*   Get Request 
export default function () {
  const res = http.get(baserUrl + endPointBooking);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
 */

export default function () {
  /* Put request 
   const url = baserUrl + endPointBooking;
  const payload = JSON.stringify({
    firstname: "Jim", //why property is not inside double couted
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  });
  const paras = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  //   const res = http.post(url, payload, paras);
  //   check(res, {
  //     "is status 2000": (r) => r.status === 201,
  //   });
  const response = http.post(url, payload, paras);

  // Log the response status code
  console.log(`Status code: ${response.status}`);

  // Log the response body
  console.log(`Response body: ${response.body}`); 
  */

  /*  PatchRequest


  const url = "https://reqres.in/api/users/2";
  const body = JSON.stringify({
    name: "Little Nugayer",
    job: "avian resident",
  });
  const res = http.patch(url, body);
  console.log(`Status code: ${res.status}`);
  console.log(`Response body: ${res.body}`);
 */


/*   
  const url = "https://reqres.in/api/users/2";
  const body = JSON.stringify({
    name: "Little Nugayer",
    job: "avian resident",
  });
  const res = http.put(url, body);
  console.log(`Status code: ${res.status}`);
  console.log(`Response body: ${res.body}`);
 */

  const url = "https://reqres.in/api/users/2";
  const res = http.put(url, body);
  console.log(`Status code: ${res.status}`);
  console.log(`Response body: ${res.body}`);

}
