import http from "k6/http";
import { sleep } from "k6";

export const option = {
  vus: 10,
  duration: "10s",
  iterations: 10,
};

export default function () {
  //const res = http.get(`https://${__ENV.MY_HOSTNAME}/`);
  const res = http.get(`https://${__ENV.baseUrl}/${__ENV.endPoint}/`);
  sleep(1);
}
