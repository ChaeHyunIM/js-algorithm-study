//https://www.acmicpc.net/problem/1300

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 배열에 존재 할 수 있는 가장 큰 값

let result = 0;
while (start <= end) {
  // 이진 탐색 수행
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid 보다 작거나 같은 데이터의 개수
  for (let i = 0; i <= n; i++) {
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
