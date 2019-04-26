'use strict'

//REQUIRE LINK
const store = require("../store")

//REGISTER
const registerSuccess = function (data) {
  $("#message").text("Registration was successful!")
  $("form").trigger("reset")
}

const registerFailure = function (data) {
  $("#message").text("Registration failed")
  $("form").trigger("reset")
}

//SIGNIN
const signinSuccess = function (data) {
  store.user = data.user
  $("#message").text("Welcome!")
  $("form").trigger("reset")
}

const signinFailure = function (data) {
  $("#message").text("Signin failed")
  $("form").trigger("reset")
}

//SIGNOUT
const signoutSuccess = function () {
  $("#message").text("You have signed out")
  store.user = null
}

const signoutFailure = function () {
  $("#message").text("Signout has failed")
}

const changePasswordSuccess = function () {
  $("#message").text("Change password success")
  $("form").trigger("reset")
}

const changePasswordFailure = function () {
  $("#message").text("Change password failure")
  $("form").trigger("reset")
}

module.exports = {
  registerSuccess,
  registerFailure,
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  changePasswordSuccess,
  changePasswordFailure
}