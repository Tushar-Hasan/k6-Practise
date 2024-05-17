//1. init code
import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//Test Options

export const options = {
  executor: "per-vu-iterations",
  vus: 10,
  // duration: "30s",
  iterations: 5,
};

export default function () {
  http.get("http://test.k6.io");
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
