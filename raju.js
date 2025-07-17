
// function checkDigitsInName(name) {
//     if (typeof name !== 'string') {
//         return "Invalid Input";
//     }

//     for (let i = 0; i < name.length; i++) {
//         if (!isNaN(name[i]) && name[i] !== ' ') {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkDigitsInName("Rifat123"));  
// console.log(checkDigitsInName("Is2rat"));    
// console.log(checkDigitsInName(["Name"])); 

// // let number=100;
// // if(100>=number){
// //      console.log("big number")};
// //      else
// //           {console.log("small number");}
     
// let number=100;
// if(100>=number){
//      console.log("Big number")
// }
// else{
//      console.log("small number")
// }

// // এবার তোমার জন্য একটি ছোট Challenge:
// 🔸 কাজ:
// একটি সংখ্যা ইনপুট নেবে।

// যদি সংখ্যাটি ৫০ এর কম হয় → লিখবে "Too Small"

// যদি ৫০ এর সমান হয় → লিখবে "Exactly 50"

// যদি ৫০ এর বেশি হয় → লিখবে "Greater than 50"

// let mehedi = 200;

// if (mehedi < 50) {
//     console.log("Too small");
// } else if (mehedi === 50) {
//     console.log("Exactly 50");
// } else {
//     console.log("Greater than 50");
// }

// let mark = 85;

// যদি mark 80 বা তার বেশি হয় → console.log("A+")
// যদি mark 60 থেকে 79 এর মধ্যে হয় → console.log("A")
// যদি mark 40 থেকে 59 এর মধ্যে হয় → console.log("B")
// না হলে → console.log("Fail")


// let mark=50;
// if(mark>=80){
//      console.log("A+")
// }
// else if(mark>=70){
//      console.log("A")
// }
// else if(mark>=60){
//      console.log("B")
// }
// else if(mark>=50){
//      console.log("c")
// }
// else{
//      console.log("Fail")
// }
// let score = 95;

// যদি score 90–100 এর মধ্যে হয় → console.log("Outstanding")
// 80–89 → console.log("Excellent")
// 70–79 → console.log("Very Good")
// 60–69 → console.log("Good")
// 50–59 → console.log("Average")
// নিচে → console.log("Fail")

let score =95;
if(score>=90){
     console.log("outstanding");
}
elseif(score>=80){
console.log("Excellent");
}
elseif(score>=70){
     console.log("Very Good");
}
elseif(score>=60){
console.log("Good");
          
     }
elseif(score>=50);(
console.log("avvarage");
)
else{
     console.log("Fail");
}

for (let i=0; i<=50;i=i+1){
     console.log(i)
}


let sum=1;
for(let i=0;i<=50;i++){
     sum=sum+i;
}



// function showOddNumbers(num1){
//      let i=0;
//      if(i<=10;i%2!=0){
//           sum=sum+i;
//           console.log(i)
//      }
          
     
// }
// function sumEvenNumbers(){
//      let sum=0;
//      for(let i=1; i<=50;i++){
//      if(i%2==0){
//           sum=sum+i;
//      }
     
// }}
// sumEvenNumbers()



function sumoddNumbers(limit){
     let sum=0;
     for(let i= 1;i<=limit;i++){
          
          if(i%2!===0){
           sum=sum+i;
          }
     }
     console.log('sum')
}
function sumEvenNumbers(limit) {
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    console.log("Sum of even numbers from 1 to", limit, "is:", sum);
}
