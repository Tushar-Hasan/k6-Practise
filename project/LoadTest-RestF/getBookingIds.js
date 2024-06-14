import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";
import { scenarios } from "k6";

// Load testConfig.json and option.json
const config = JSON.parse(open("../../data/testConfig.json"));

// Initialize error rate metric
export const errorRate = new Rate("errors");

// Extract scenarios from option.json
export const options = JSON.parse(open("./option.json"));
//console.log(testConfig);

// Construct URL using config values
const url = `${config.baseurl}${config.endPath_getAllOrCreateBooking}`;
////console.log("url", url);

export default function () {
  // Make HTTP request and check status
  const response = http.get(url);
  const checkResult = check(response, {
    "status is 200": (r) => r.status === 200,
  });

  // Record error if check fails
  if (!checkResult) {
    errorRate.add(1);
  }
}
