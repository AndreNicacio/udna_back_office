'use strict';
GLOBAL.fetch = require('node-fetch')
require('dotenv').config();


const Cognito = require('../cognito/index');
const {verify} = require('../cognito/index');
const email = document.querySelector('.username');
const password = document.querySelector('.password');

const body = {
    email: email.value,
    password: password.value
};

//async function SignUp() {
//    const response = await Cognito.signUp(body.email,body.password);
//    console.log(response);
//}
//
//async function Verify() {
//    const response = await Cognito.verify(body.email, '708144');
//    console.log(response);
//}

async function SignIn() {
    const response = await Cognito.signIn(body.email,body.password);
    console.log(response);
}

SignIn();

//SignUp();
//Verify();
