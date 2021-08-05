let str = `Cache-Control: max-age=31536000\r\nCache-Control: max-age=31536001\r\nContent-Length: 4260\r\nContent-Type: image/png\r\n
Date: Sat, 08 Sep 2012 16:53:16 GMT`;
let headers = str.split("\r\n").reduce((result, current) => {
  console.log("result " + result);
  console.log("current " + current);
  let [name, value] = current.split(": ");
  result[name] = value;

  return result;
}, "djfsldjfla");
console.log(headers);
