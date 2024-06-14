import http from "k6/http";
import { sleep, check } from "k6";
import { Header } from "./config.js";

const config = JSON.parse(open("../../data/testConfig.json"));
const bookingBody = JSON.parse(open("../../data/createData.json"));
const header = Header;

const url = "https://restful-booker.herokuapp.com/booking"; //`${config.baseurl}${config.endPath_getAllOrCreateBooking}`;

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests should be below 500ms
  },
};

export default function () {
  const response = http.post(url, JSON.stringify(bookingBody), header);

  // Check if the response status is 200
  console.log(response);

  check(response, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
