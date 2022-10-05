process.stdin.resume();
process.stdin.setEncoding("utf-8");

let arry: any = [];
let sum = 0;

const sumOfArry = () => {
  console.log("Initiated");
  console.log("Enter Total number of Elements");
  process.stdin.on("data", (input: number) => {
    arry.push(input);

    if (arry.length > arry[0]) {
      console.log("inside for");
      sum = 0;
      for (let i = 1; i <= arry[0]; i++) {
        sum += parseInt(arry[i]);
      }
      console.log("sum", sum);
      arry.length = 0;
    } 
  });

  process.stdin.on("end", function () {
    console.log("end");
  });
};

export { sumOfArry };
