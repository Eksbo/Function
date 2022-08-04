'use script'
// Сделайте функцию, выводящую на экран ваше имя.
// function usName(){
//     alert("Eksbo")
// }
// usName()

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100. 
// function suma() {
//     let sum = 0;
//     for (let i = 1 ; i <= 100 ; i ++){
//         sum += i
//     }
//     document.write(sum)
// }
// suma()

// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа. 
// function kub(n){
//     let cub = n **3
//     document.write(cub);
// }
// kub(3)

// Сделайте функцию, которая параметром принимает число и проверяет, положительное 
// это число или отрицательное. 
// В первом случае пусть функция выводит на экран текст '+++', а во втором '---'. 

// function other(n){n > 0 ? console.log("+++") : console.log("---")} ;
// other(5)

// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
// function sum(a , b ,c ){
//     let e = a + b + c ;
//     document.write(e)
// }
// sum(25,22,44);

// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// С помощью созданной вами функции выведите на экран сумму значений эти переменных. 

// function sum(a , b ,c ){
//     let e = a + b + c ;
//     document.write(e)
// }
// let param1 = 1;

// let param2 = 2;
// let param3 = 3;
// sum( param1,param2,param3);


// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. 
// С помощью этой функции найдите куб числа 3 и запишите его в переменную result. 
// function kub(n)  {
//     return n **3 ;
// }
// let res = kub(3) ;
// console.log(res);


//  Сделайте функцию, которая параметром принимает число, а возвращает
//  квадратный корень из этого числа. С помощью этой функции найдите корень числа 3,
//   затем найдите корень числа 4. 
// Просуммируйте полученные результаты и выведите их на экран. 
// function sqr (a){
//     return Math.sqrt(a);
// }
// let res = sqr(3) + sqr(4);
// console.log(res);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и
//  функция, округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// С помощью этих функций найдите квадратный корень из числа 2 
// и округлите его до трех знаков в дробной части. 

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res =Number (round(sqrt(2)));
// console.log(res);

// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция,
//  возвращающая сумму трех чисел:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result. 
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// let res = sum(sqrt(2), sqrt(3), sqrt(4))
// console.log(res);

// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// function round(num) {
// 	return num.toFixed(3);
// }

// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась 
// дробь, округленная до 3-х знаков в дробной части. 
// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// function round(num) {
// 	return num.toFixed(3);
// }

// let res = round (sum(sqrt(2), sqrt(3), sqrt(4)));
// console.log(res);

// Напишите функцию, которая параметром будет принимать
//  число и делить его на 2 столько раз, пока результат не станет меньше 10. 
//  Пусть функция возвращает количество итераций,
//  которое потребовалось для достижения результата. 

// function func(n){
//     let i = 1 ;
//     while (true){
//         i ++ ;
//         n = n / 2 ;
//         if ( n <= 10 ){
//             return document.write(`${i} <br> <code> ${n} </code>`)

//         }
//     }
// }
// func(888) ;

//  Дана следующая функция:
// function func(num1, num2) {
// 	let result;
	
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}
	
// 	return result;
// }

// alert(func(3, 4));

// Перепишите ее в сокращенной форме согласно изученной теории. 
// function func(num1, num2) {
// 	let result;

// 	if (num1 > 0 && num2 > 0) {
// 		return  num1 * num2;
// 	} else {
// 		return  num1 - num2;
// 	}
// }

// alert(func(3, 4));

