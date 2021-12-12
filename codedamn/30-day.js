function time(time) {
    const [hour, min, period] = time.match(/\d+|\w+/g);
    const Hour = hour.length == 2 ? hour : +hour < 10 ? `0${hour}` : hour;
    const Min = min.length == 2 ? min : +min < 10 ? `0${min}` : min;
    if (period === "AM") {
      return Hour == 12 ? `00:${Min}` : `${Hour}:${Min}`;
    } else {
      return Hour == 12 ? `12:${Min}` : `${+Hour + 12}:${Min}`;
    }
  }
  
  function getTheGapX(str) {
    const stIndex = str.indexOf("X");
    const edIndex = str.lastIndexOf("X");
    if (edIndex !== -1 && stIndex !== -1) {
      return edIndex - stIndex;
    } else {
      return edIndex;
    }
  }
  
  function truncateWithWordLimit(str, wordLimit) {
    const split = str.split(" ");
    const line = [];
    for (let i = 0; i < wordLimit; i++) {
      line.push(split[i]);
    }
  
    return line.join(" ");
  }
  
  function validateMobile(number) {
    let numLength;
    if (number.length === 10) {
      return true;
    }
    if (number[0] == "+" && number[1] == "9" && number[2] == "1") {
      numLength = number.slice(3, number.length).trim().length;
      return numLength === 10 ? true : false;
    }
    if (number[0] == "0") {
      numLength = number.slice(1, number.length).trim().length;
      return numLength === 10 ? true : false;
    }
    return false;
  }
  
  function getDaysBetweenDates(dateText1, dateText2) {
    const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
    return Math.ceil(
      Math.abs(new Date(dateText2) - new Date(dateText1)) / DAY_IN_MILLISECONDS
    );
  }
  
  function isEmpty(obj) {
    return Object.keys(obj).length ? false : true;
  }
  
  //----------------
  const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
  ];
  const filterField = "money";
  function removeArrayElement(filterField) {
    return array
      .map((x) => {
        if (x.field !== filterField) {
          return x;
        }
      })
      .filter(Boolean);
  }
  //---------------
  
  function fibonacci(n) {
    // write your solution here
    let [a, b] = [0, 1];
    while (n-- > 0) {
      [a, b] = [b, a + b];
    }
    return b;
  }
  