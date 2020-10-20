
// 2.1 - 2.14



// let admin = "tarikkus";
// let name = 'Taras';
//
// admin = name;
//
// alert(admin)


// **************************************
// let ourPlanet = "Earth";
// let currentUser = "Taras";


// **************************************
// let name = prompt('What is your name?');
// let print = `You'r name is ${name}`;
// alert(print);
// console.log(print);


// **************************************
// console.log('' + 1 + 0);
// console.log('' - 1 + 0);
// console.log(true + false);
// console.log(6/'3');
// console.log('2'*'3');
// console.log(4+5+'px');
// console.log('$'+4+5);
// console.log('4'-2);
// console.log('4px' - 2);
// console.log(7/0);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(' \t \n' - 5);


// **************************************
// let a = prompt('First number?', 1);
// let b = prompt('Second number?', 2);
//
// alert(+a + +b);


// **************************************
// let JSName = prompt('What is the official Js name?');
//
// if (JSName == 'ECMAScript') {
//   alert('Right');
//   console.log('Right');
// } else{
//   alert('You dont know ECMAScript?');
//   console.log('You dont know ECMAScript?');
// }


// **************************************
// let number = prompt('Enter your number!', 0);
//
// if (number == 0){
//   alert(0);
// } else if (number > 0){
//   alert(1);
// }else{
//   alert(-1)
// }

// let a = prompt('Enter a!')
// let b = prompt('Enter b!')
// let result = (a+b < 4) ? 'Below' : 'Over';
// alert(result);


// **************************************
// let message = (login == 'Employee') ? message = 'Hello' :
//  (login == 'Director') ? message = 'Greetings' :
//  (login == '') ? message = 'No login' :
//  '';


// **************************************
// let age = 10;
// if (age >= 14 && age <= 90){
//   alert('YEEEY');
// } else{
//   alert('NOOOO');
// }

// if (!(age >=14 && age <= 90)){
//   alert('YEEEY');
// } else {
//   alert('NOOOO');
// }

// if (age<14 || age<90){
// alert('YEEEY');
// } else {
//   alert('NOOOO');
// }


// **************************************
// let login = prompt('Enter your login');
//
// if (login == 'Admin'){
//   let password = prompt('Enter your password, please.');
//
//   if (password == 'TheMaster'){
//     alert('Welcome!');
//   } else if (password == "" || password == null){
//     alert ('Canceled!');
//   } else {
//     alert ('Wrong password!');
//   }
// } else if (login == "" || login == null) {
//   alert("Canceled");
// } else {
//   alert("I don't know you!");
// }


// **************************************
// for (let i=2; i<=10; i++){
//   if (i%2 == 0){
//     alert (i);
//   }
// }


// **************************************
// let i=0;
// while (i<3) {
//   alert(`number ${i}!`);
//   i++;
// }


// **************************************
// let i;
// do{
//   i = prompt("Enter number greater then 100.");
// } while (i<100){
// }


// **************************************
// let n = prompt("Till what number do ypu want to find primes?");
// nextPrime:
// for (let i=2; i <= n; i++) {
//   for (let j=2; j<i; j++) {
//     if (i%j==0) continue nextPrime;
//   }
//   alert(i);
// }

// let browser = prompt("What browser do you use?")
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (browser == 'Chrome'
// || browser == 'Opera'
// || browser == 'Safari') {
//   alert("Okey we support these browsers too");;
// } else {
//   alert("We hope the page looks good!")
// }

// let a = +prompt('a?', '');
// switch (a){
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }


// ******************************************************************************************
// 2.15-2.18


// function checkAge(age){
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }


// function min(a, b){
//   if (a < b){
//     return a;
//   } else {
//     return b;
//   }
// }


// **************************************
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// function pow(x,n){
//   let res = x;
//   for (i=1; i<n; i++){
//     res = res*x;
//     // console.log('x=' + x);
//     // console.log('res=' + res);
//     // console.log('n=' + n);
//   }
//   alert(res);
//   return res;
// }
// pow(x,n);


// **************************************
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
//
// ask(
//   'Do you agree?',
//   () => alert("You agree!"),
//   () => alert("you canseled the execution!")
// )


// **************************************
// let n = prompt("n?");

// function sumTo (n) {
//   let add = 0;
//   for (let i=1; i<=n; i++){
//     add += i;
//   }
//   alert (add);
// }

// function sumTo(n) {
//     if (n==1){
//       return 1;
//     } else {
//       return n + sumTo(n-1);
//     }
// }

// alert (sumTo(100));


// **************************************
// FACTORIAL
// function factorial(n) {
//   if (n==1){
//     return 1;
//   } else {
//     return n * factorial(n-1);
//   }
// }
//
// alert(factorial(5));


// **************************************
// FIBONACCI
// function fib(n) {
//   let count = 1;
//   let i = 0;
//   let j = 1;
//
//   if (n < 1){
//     alert ('Number is negative!')
//   } else {
//
//     while (count < n){
//       let fibo = i + j;
//       console.log('fibo =' + fibo)
//       i = j;
//       console.log('i =' + i)
//       j = fibo;
//       count = count + 1;
//     }
//     return j;
//   }
//
// }
//
// alert(fib(77));


// **************************************
// OUTPUT A LINKER LIST
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   while (list) {
//       alert(list.value);
//       list = list.next;
//   }
// }
//
// function printList (list){
//   alert(list.value);
//   if (list.next){
//     printList(list.next);
//   }
// }

// function printReverseList (list) {
//   let arr = [];
//   let temp = list;
//
//   while(temp){
//     arr.push(temp.value);
//     temp=temp.next;
//   }
//
//   for (let i=arr.length-1; i >= 0; i--){
//     alert(arr[i]);
//   }
// }

// printList(list);
// printReverseList(list);


// **************************************
// function sum (a){
//   return function(b){
//     return a+b;
//   }
// }
// alert( sum(5)(4));


// **************************************
// let x = 1;
// function func() {
//   console.log(x);
//   let x = 2;
// }
// func();


// **************************************
// let arr = [1,2,3,4,5,6,7];
// function inBetween(a, b) {
//   return function (x){
//     return x>=a && x<=b;
//   }
// }

// function inArray(arr){
//   return function(x){
//     return arr.includes(x);
//   }
// }

// alert( arr.filter(inBetween(3,6)) );
// alert( arr.filter(inArray([2,12,4])) );


// **************************************
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// funtion byField(fieldName) {
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
// alert(users.sort(byField('name')) );


// OBJECTS **********************************************************

// let user = {
//     name : 'John',
//     surname : "Smith"
// }
// user.name = 'Pete';
// delete user.name;
// alert(user.name);

// ************************************
// let schedule = {name: 4};

// function isEmpty(obj) {
//     for (let elem in obj){
//         return true;
//     }
//     return false;
// }

// alert ( isEmpty(schedule));


// **************************************
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for (let elem in salaries){
//     sum += salaries[elem];
// }
// alert(sum);


// ****************************************
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   function multiplyNumeric(obj) {
//     for (let elem in obj) {
//         if (typeof obj[elem] == 'number'){
//             obj[elem] *= 2;
            
//         }
//     }  
//     console.log(obj)
//   }

// multiplyNumeric(menu);


// ************************************************
// let calculator = {
//     read() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// ************************************************
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() {
//       alert( this.step );
//       return this;
//     }
//   };
// ladder.up().up().up().up().showStep();


// ************************************************
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     };

//     this.mul = function() {
//         return this.a * this.b;  
//     };
// }

// let calc = new Calculator();
// calc.read();

// alert(calc.sum());
// alert(calc.mul());


// ************************************************
// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         return this.value += +prompt("How much to add?");
//     }
// }
// let accumulator = new Accumulator(2);
// accumulator.read();
// accumulator.read();
// alert( accumulator.value);
