import http from "k6/http";

export function api1() {
  const res = http.get("https://restful-booker.herokuapp.com/booking");
  return res;
}
