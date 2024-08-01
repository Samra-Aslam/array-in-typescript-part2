//find 
//find return first element in arry which meet conditions
//but filter method return all elements of arry which meet condition
// let number = [1,2,3,4,5,6,7,8,9,10]
// let find = number.find(num=> num >3)
// console.log(find);//return undefined if condition not met
// filter main condition meet na ho to [] empty array return ho ga
//map(return array)not same as filter, filter method use to find all elements
//which meet conditions but map use to apply condition on all array elements
// const numbers= [1,2,3,4,5,6,7]
// const map = numbers.map(num=>num%2===0)
// console.log(map);
//join
//will return array with - in between element af arrey and return string
//use to concatenate only one arry element if we we dont assign - in joint and assign nothing
// const names = ["a","b","c"]
// const join = names.join(`-`)
// console.log(join);// return a-b-c
//split
//convert string into array based on saperators
// const names = "a-b-c-d"
// const array = names.split(`-`)
// console.log(array);
//concat
var array1 = [1, 2, 3, 4, 5];
var array2 = [4, 5, 6, 7, 8, 9];
var combine = array1.concat(array2);
console.log(combine);
