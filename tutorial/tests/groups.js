import { group } from "k6";
import http from "k6/http";

export default function () {
  group("get Id list", function () {
    http.get("https://restful-booker.herokuapp.com/booking");
  });
  group("another group", function () {
    http.get('http://test.k6.io');
  });
}
