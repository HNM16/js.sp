// 1
// function func(a){
// let text = a.split(",")
// let num = 1
// for (let i=0; i<text.length; i++){

// 2
//     num*=Number(text[i])
// }
// return num
// }
// console.log(func("2,3"));


// 3
// function func(a){
// let text = a.split("-")
// return text.length
// }
// console.log(func("fndn-sfnvn"));

// 4
// function func(a,b){
//         return a.includes(b)
// }
// console.log(func("abs","bs"));



// 5
// function func(a){
//         return a.includes(" ")
// }
// console.log(func("abs"));



// 6
// function func(a){
//     text="Hello "
//     return text.concat(a)
// }
// console.log(func("Abubakri-bot"));

// 7
    // function func(a){
    //     let h=a[Math.floor(a.length/2)-1]  
    //     let g=a[Math.floor(a.length/2)]
    //     return a.length%2==0?h+g:g

    // }
    // console.log(func("botli"));
    

  







// 8

// function func(a) {
//     let b=a.split(" ")
//     let k = b.indexOf("Nemo")+1;
//     let s= "I found Nemo at "
//     return s.concat(k, " !");
// }
// console.log(func("I am going to softclub"));





// 9

// function func(a) {
//     let splitted = a.split(" ")
//     for (let i = 0 ; i < splitted.length ; i ++){
//         let spl = splitted[i].split("")
//         if (spl.length >= 5)[
//             spl.func()
//         ]
//         splitted[i] = spl.join("")
//     }
//     let text = splitted.join(" ")
//   return text
    
// }
// console.log(func("Salom alek"));






// 10

// function func(a) {
//     let k = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == "a"  a.at(i) == "A"  a.at(i) == "e"  a.at(i) == "E"  a.at(i) == "i"  a.at(i) == "I"  a.at(i) == "u"  a.at(i) == "U"  a.at(i) == "o" || a.at(i) == "O") {
//             k = k + "-" + a.at(i) + "-";
//         }
//         else {
//             k += a.at(i);
//         }
//     }
//     return k;
// }
// console.log(func("edabit"));




// 11

// function  func(a){
//      let num = Number(a)
//      let res = ""
//      for (let i = 1 ; i <= num-1 ; i ++){
//         res += i + "-"
//      }
//      return res + a
// }
// console.log(func(10));





// 12

// function  func(a){
//     let revers =a.split('').reverse().join('')
//     return a == revers
// }
// console.log(func('nvan'));






// 13

// function func(b,a) {
//     let k = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if (a.at(i) == b) {
//             k++;
//         }
//     }
//     return k;
// }
// console.log(func("m","Salom se aleykum du"));






// 14

// function func(a) {
//     let k = "";
//     let s = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == a.at(i).toUpperCase()) {
//             k += a.at(i);
//         }
//         else {
//             s += a.at(i);
//         }
//     }
//     return k + s;
// }
// console.log(func('nVAn'));







// 15

// function  func(a){
//     let str =a.toString()
//    let revers = str.split("").reverse().join("")
//    return revers + a
// }
// console.log(func(123));