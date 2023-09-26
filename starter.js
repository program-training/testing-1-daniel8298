// 1
// export const TheLengthString = (string: string) => string.length;

// 2
// export const Palindrome = (string: string) => {
//   const stringToCheck = string.trim().toLocaleLowerCase();
//   const isPalindrome = stringToCheck.split("").reverse().join("");
//   return stringToCheck === isPalindrome;
// };

// 3
// export const sortNumbersAscendingOrder = (arrayNumber: number[]) => {
//   const result = arrayNumber.sort((a, b) => a - b);
//   return result;
// };

// 4
// export const sqrt = (num: number) => {
//   if (num < 0) throw new Error("the number is Negative");
//   const result = Math.sqrt(num);
//   return result;
// };

// 5
// export const sumArray = (numArray: number[]) => {
//   let sumArray = 0;
//   numArray.forEach((element) => (sumArray += element));

//   return sumArray;
// };

//6;
// import axios from "axios";
// export const fetchUserData = async (userId: number) => {
//   try {
//     const { data: user } = await axios.get(
//       `https://jsonplaceholder.typicode.com/users/${userId}`
//     );

//     if (!user.email) {
//       throw new Error(`Failed to fetch user data for ID: ${userId}`);
//     }
//     return user;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

//7
// export const Fibonacci = (arrayNumber: number[]) => {
//   if (arrayNumber[0] !== 1 || arrayNumber[1] !== 1)
//     throw new Error("the numbers in array is a not Fibonacci");

//   for (let i = 2; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] !== arrayNumber[i - 1] + arrayNumber[i - 2]) {
//       throw new Error("the numbers in array is a not Fibonacci");
//     }
//   }
//   const result =
//     arrayNumber[arrayNumber.length - 1] + arrayNumber[arrayNumber.length - 2];
//   return result;
// };
