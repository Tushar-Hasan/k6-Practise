import exec from "k6/execution";
import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

const allError = new Counter("count_error");
export const option = {
  thresholds: {
    error_count: [{ threshold: "count < 5", abortOnFail }],
  },
  scenarios: {
    smoke: {
      executor: "per-vu-iterations",
      vus: 10,
      iteration: 100,
    },
  },
};

export default function () {
  // console.log(exec.vu.idInTest);
  console.log(
    `iteration if => ${exec.scenario.iterationInTest} vu id ${exec.vu.idInTest}`
  );
  const baseUrl = "https://reqres.in/";
  const endPoint = "api/users/2";
  const res = http.get(`${baseUrl}${endPoint}`);
  if (res.status >= 400) {
    allError.add(1);
  }
  check(res, { "is status 200": (r) => r.status === 200 });
  //res.body;
  console.log(res);
  sleep(1);
}
