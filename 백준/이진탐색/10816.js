//https://www.acmicpc.net/problem/10816

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map(Number);
const m = Number(input[2]); // 쿼리의 수(M)
const query = input[3].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

arr.sort((a, b) => a - b); //이진 탐샛을 위한 오름차순 정렬

let = answer = "";
for (let i = 0; i < m; i++) {
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + "";
}

console.log(answer);
