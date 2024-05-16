import http from "k6/http";
import { sleep, check } from "k6";
import exec from "k6/execution";

const json_ = JSON.parse(open("data.json"));
const emailCheck = /^[A-Za-z0-9._-]+@[A-Za-z0-9-.]+.[a-z]+$/;

export const options = {
  scenarios: {
    jsonLogin: {
      executor: "shared-iterations",
      vus: 1,
      iterations: json_.length,
    },
  },
};

export default function () {
  const user = json_[exec.scenario.iterationInTest];
  console.log(user.id);

  const res = http.get(`https://reqres.in/api/users/${user.id}`);
  const resp = res.json("data");
  //console.log(res.body);
  //   const response = JSON.parse(res.body);
  //   console.log(res.body.email);
  //console.log("khk");
  //console.log(resp);
  console.log(resp.email);

  check(res, {
    "is status 200": (r) => r.status === 200,
    "is email format ok": (r) => emailCheck.test(resp.email),
  });
}
