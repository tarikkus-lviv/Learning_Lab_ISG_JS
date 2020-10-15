// EVERY OTHER CODE PART IS SEPARATED WITH TWO SPACES!



// let admin = "tarikkus";
// let name = 'Taras';
//
// admin = name;
//
// alert(admin)


// let ourPlanet = "Earth";
// let currentUser = "Taras";


// let name = prompt('What is your name?');
// let print = `You'r name is ${name}`;
// alert(print);
// console.log(print);


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


// let a = prompt('First number?', 1);
// let b = prompt('Second number?', 2);
//
// alert(+a + +b);


// let JSName = prompt('What is the official Js name?');
//
// if (JSName == 'ECMAScript') {
//   alert('Right');
//   console.log('Right');
// } else{
//   alert('You dont know ECMAScript?');
//   console.log('You dont know ECMAScript?');
// }


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


// let message = (login == 'Employee') ? message = 'Hello' :
//  (login == 'Director') ? message = 'Greetings' :
//  (login == '') ? message = 'No login' :
//  '';


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


// for (let i=2; i<=10; i++){
//   if (i%2 == 0){
//     alert (i);
//   }
// }


// let i=0;
// while (i<3) {
//   alert(`number ${i}!`);
//   i++;
// }


// let i;
// do{
//   i = prompt("Enter number greater then 100.");
// } while (i<100){
// }


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

let a = +prompt('a?', '');
switch (a){
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}
