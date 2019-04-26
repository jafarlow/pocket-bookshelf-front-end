'use strict'

//REQUIRE LINKS
const userAuth = require("./auth/events.js")
const userEvents = require("./album/events.js")
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // userAuth.addHandlers()
  userEvents.addHandlers()
})
