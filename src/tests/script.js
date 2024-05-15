import http from "k6/http";
import { check, sleep } from "k6";
import exec from "k6/execution";

export const users = JSON.parse(open("data.json"));
export const options = {
  thresholds:{
    "http_req_duration": ['p(90)<28']
  },
  scenarios: {
    accountCreate: {
      // executor: "shared-iterations",
      // vus: 5,
      // //duration: "1m",
      // iterations: 10,
      //
      executor: "ramping-vus",
      startVUs: 0,
      //duration: "1m",
      //iterations: 10,
      stages: [
        { duration: "20", target: 10 },
        { duration: "30s", target: 10 },
        { duration: "0", target: 0 },
      ],
      gracefulRampDown: "30s",
    },
  },
};
export default function () {
  // console.log(exec.vu.idInTest);
  console.log(
    `iteration if => ${exec.scenario.iterationInTest} vu id ${exec.vu.idInTest}`
  );
  // const baseUrl = "https://reqres.in/";
  // const endPoint = "api/users/2";
  // const res = http.get(`${baseUrl}${endPoint}`);
  // check(res, { "is status 200": (r) => r.status === 200 });
  // //res.body;
  //   console.log(res);
  sleep(1);
}
