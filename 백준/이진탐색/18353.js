const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = Number(input[0]); // 데이터의 수(N)
const arr = input[1].split(" ").map(Number);

arr.reverse();

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

let d = [0]; // LIS 배열
// 이진 탐색을 활용한 LIS 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

// 열외해야 하는 병사의 최소 수를 출력
console.log(n - d.length - 1);
