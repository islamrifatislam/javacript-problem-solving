// function isleepYear2(year){
//      if(year%100!==0 && year%4 ===0){
//           return true;
//      }
//      else if(year%100===0 && year%400 ===0){
//           return true;
//      }
//      else{
//           return false;
//      }
// }
// const isleepYear=isleepYear2(2400);
// const isleepYear1=isleepYear2(2000);
// const isleepYear4=isleepYear2(1800);
// const isleepYear3=isleepYear2(1400);

// console.log(isleepYear,isleepYear1,isleepYear4,isleepYear3);



function isleepYear2(year){
     if(year%4==0 && year%100!=0 || year%400 ===0){
          return true;
     }
     else{
          return false;
     }
}
const isleepYear=isleepYear2(2400);
const isleepYear1=isleepYear2(2000);
const isleepYear4=isleepYear2(1800);
const isleepYear3=isleepYear2(1400);

console.log(isleepYear,isleepYear1,isleepYear4,isleepYear3); 