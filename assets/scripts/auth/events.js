'use strict'

//REQUIRE LINKS
const getFormFields = require("./../../../lib/get-form-fields.js")
const api = require("./api")
const ui = require("./ui")

//REGISTER
const onRegister = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.register(data)
  .then(ui.registerSuccess)
  .catch(ui.registerFailure)
}

//SIGNIN
const onSignin = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signin(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

//SIGNOUT
const onSignout = function (event) {
  event.preventDefault()

  api.signout()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFailure)
}

//CHANGE PASSWORD
const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// ALL HANDLERS
const addHandlers = function () {
  $("#register").on("submit", onRegister)
  $("#signin").on("submit", onSignin)
}

module.exports = {
  addHandlers
}
