//single value properties
const name= 'masti';
const age = 21;

const user = { name, age }
console.log(user);
//destructuring syntax
const userObj = {
    userName: 'demo',
    userAge: 21
};

//userObj.userName
//userObj['userName']


const key='userName';
console.log(userObj.key); //This will throw an error sayimg "key" is not defined
console.log(userObj[key]); //This works fine

const { userName } = userObj;
console.log(userName);