import http from "k6/http";
import { sleep } from "k6";

/* export let options = {
  vus: 10, // Total number of virtual users to simulate
  duration: "30s", // Duration of the test
};

export function scenario1() {
  let tags = { scenario: "scenario1", environment: "production" };
  http.get("https://http.test.k6.io/", { tags: tags });
  sleep(1);
}

export function scenario2() {
  let tags = { scenario: "scenario2", environment: "staging" };
  http.get("https://http.test.k6.io/", { tags: tags });
  sleep(1);
}

export default function () {
  scenario1(); // Run scenario1
  sleep(1);
  console.log(`End of Scenario 01`);
  scenario2(); // Run scenario2
  console.log(`End of Scenario 02`);
} */

export let options = {
  scenarios: {
    login: {},
    users: {},
  },
};

// export function scenario1() {
//   let tags = { scenario: "scenario1", environment: "production" };
//   http.get("https://example.com", { tags: tags });
//   sleep(1); // Optional pause
// }

// export function scenario2() {
//   let tags = { scenario: "scenario2", environment: "staging" };
//   http.get("https://example.com", { tags: tags });
//   sleep(1); // Optional pause
// }

export default function () {
  http.get("https://example.com", { tags: tags });
  http.get("https://example.com", { tags: tags });
  sleep(1); // Optional pause// Optional pause
  // scenario1(); // Run scenario1
  // sleep(1);
  // console.log(`End of Scenario 01`);
  // scenario2(); // Run scenario2
  // console.log(`End of Scenario 02`);
}
