/* 
Counters sum values.
Gauges track the smallest, largest, and latest values.
Rates track how frequently a non-zero value occurs.
Trends calculates statistics for multiple values (like mean, mode or percentile).
*/

import http from "k6/http";
import { Trend, Counter, Gauge, Rate } from "k6/metrics";

const myCounter = new Counter("my_counterNo"); //if true counter will be incremented  otherwise no increment //true will indicate as 1 and flase as 0
const errorCounters = new Counter("Total_error");
const myTrend = new Trend("waiting_time");
const myGauge = new Gauge("ContentSize");
const myRate = new Rate("Rate_Example");

export default function () {
  const r = http.get("https://test-api.k6.io/");
  myTrend.add(r.timings.waiting);
  myCounter.add(false);
  errorCounters.add(true);
  myGauge.add(r.body.length);
  myGauge.add(false);
  console.log(myTrend.name);
  myRate.add(true);
  myRate.add(false);
}
