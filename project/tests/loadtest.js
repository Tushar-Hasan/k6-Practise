import http from "k6";
import { sleep } from "k6";

// Test Configs
const config_ = JSON.parse(open("option.json"));
export const options = config_;


export default function(){
    
}