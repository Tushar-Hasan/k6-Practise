import http from "k6/http";
import { sleep } from "k6";
import exec from "k6/execution";
import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";

//const csvData = papaparse.parse(open("data.csv"), { header: true }).data;
const userJason = JSON.parse(open("data.json"));
export const options = {
  scenarios: {
    sceanario01: {
      executor: "shared-iterations",
      vus: 10,
      // duration: "30s",
      iterations: 10,
    },
  },
};

export default function () {
  /*  console.log(`====>`);
  console.info(csvData[0]);
  const user = csvData[exec.scenario.iterationInTest]; 
  */
  console.log(userJason);

  sleep(1);
}
