import http from "k6/http";
import { sleep } from "k6";
//import { api1 } from "./apis.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const config_ = JSON.parse(open("option_.json"));
export const options = config_;
/* 
export const options = {
  scenarios: {
    getApi: {
      executor: "ramping-vus",
      stages: [
        { duration: "2m", target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
        { duration: "3m", target: 100 }, // stay at 100 users for 30 minutes
        { duration: "1m", target: 0 }, // ramp-down to 0 users
      ],
    },
  },
};
 */


export function api1() {
  const res = http.get("https://restful-booker.herokuapp.com/booking");
  return res;
}


export default function () {
  const res = api1();
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
