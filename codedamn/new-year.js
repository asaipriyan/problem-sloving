const jump = 47;
let height = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7";
const smallLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

height = height.split(" ").map((x) => +x);

function designerPdfViewer(h, word) {
  // Write your code here
  word = word.split("");
  let obj = {};
  for (let i = 0; i < smallLetter.length; i++) {
    obj[smallLetter[i]] = h[i];
  }
  let max = 0;
  for (let i of word) {
    if (max < obj[i]) {
      max = obj[i];
    }
  }
  return max * word.length;
}
//designerPdfViewer(height, "zaba");

function utopianTree(n) {
  // Write your code here
  if (n == 0) return 1;
  let value = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      value += 1;
    } else {
      value += value;
    }
  }
  return value;
}

function angryProfessor(k, a) {
  // Write your code here
  const stdcount = a.filter((a) => a <= 0).length;
  return stdcount >= k ? "NO" : "YES";
}

function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for (let a = i; a <= j; a++) {
    let swap = `${a}`.split("");
    let temp = Number(`${swap.reverse().join('')}`);
    let value = Math.abs((a-temp)/k);
    if (value % parseInt(value) === 0 || value === 0) count += 1;
  }
  console.log(count)
  return count;
}
//beautifulDays(49860, 205494, 155635764);
beautifulDays(123, 456789, 189)
