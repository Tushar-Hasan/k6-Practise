//1. init code
import http from "k6/http";
import { sleep } from "k6";

//Test Options
const testConfig = JSON.parse(open("op2.json"));
export const options = testConfig;

export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}
