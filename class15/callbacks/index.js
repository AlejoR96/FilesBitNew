function sum(num1,num2) {
  
  return num1 + num2;
};

function calculate(num1,num2, callback){
  return callback(num1,num2);
}


// console.log(calculate(1,3, sum));


const date = (callback) => {
  console.log (new Date)
  setTimeout( () =>{
    let date = new Date;
    callback(date);
  },3000);
};

const printDate = (dateNow) => {
  console.log(dateNow);
};

date(printDate);