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
  $(".user-auth").hide()
  $(".auth-buttons").show()
  $(".main-buttons").show()
}

const signinFailure = function (data) {
  $("#message").text("Signin failed")
  $("form").trigger("reset")
}

//SIGNOUT
const signoutSuccess = function () {
  $("#message").text("You have signed out")
  store.user = null
  $(".user-auth").show()
  $(".auth-buttons").hide()
  $(".main-buttons").hide()
  $("#albums-display").html("")
}

const signoutFailure = function () {
  $("#message").text("Signout has failed")
}

// CHANGE PASSWORD
const changePasswordSuccess = function () {
  $("#message").text("Your password has been updated")
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
