function funnyString(s) {
    // Write your code here
    const splitS = s.split("");
    const charCodes = splitS.map((x) => x.charCodeAt());
    const revCodes = [...charCodes].reverse();
    let perv = 0,
      revprev = 0,
      start = [],
      reverse = [];
    for (let i = 0; i < splitS.length - 1; i++) {
      perv = charCodes[i];
      revprev = revCodes[i];
      start.push(Math.abs(perv - charCodes[i + 1]));
      reverse.push(Math.abs(revprev - revCodes[i + 1]));
    }
    const isSame =
      start.length === reverse.length && start.every((v, i) => v === reverse[i]);
    return isSame ? "Funny" : "Not Funny";
  }
  
  function gemstones(arr) {
    let obj = {};
    const len = arr.length;
    // Write your code here
    for (let value of arr) {
      let inObj = {};
      for (let i = 0; i < value.length; i++) {
        inObj[value[i]] = 1;
      }
      for (let key of Object.keys(inObj)) {
        obj[key] = obj[key] ? obj[key] + 1 : 1;
      }
    }
    return Object.values(obj).filter((a) => a === len).length;
  }
  
  function alternatingCharacters(s) {
    // Write your code here
    let prev = "";
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      prev = s[i];
      if (prev === s[i + 1]) {
        count++;
      }
    }
    return count;
  }
  
  function climbingLeaderboard(ranked, player) {
    // Write your code here
    const n = ranked.length;
    const m = player.length;
    let rank = [];
    let res = [];
    rank[0] = 1;
  
    for (let i = 1; i < n; ++i) {
      if (ranked[i] === ranked[i - 1]) {
        rank[i] = rank[i - 1];
      } else {
        rank[i] = rank[i - 1] + 1;
      }
    }
  
    for (let i = 0; i < m; i++) {
      let score = player[i];
      if (score > ranked[0]) {
        res[i] = 1;
      } else if (score < ranked[n - 1]) {
        res[i] = rank[n - 1] + 1;
      } else {
        const index = binarySearch(ranked, score);
        res[i] = rank[index];
      }
    }
    
    return res;
  }
  
  function binarySearch(array, score) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
      let middle = Math.floor(low + (high - low) / 2);
      if (array[middle] === score) {
        return middle;
      } else if (array[middle] < score && score < array[middle - 1]) {
        return middle;
      } else if (array[middle] > score && score >= array[middle + 1]) {
        return middle + 1;
      } else if (array[middle] < score) {
        high = middle - 1;
      } else if (array[middle] > score) {
        low = middle + 1;
      }
    }
    return 10;
  }
  