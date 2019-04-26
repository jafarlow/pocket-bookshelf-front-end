'use strict'

// REQUIRE LINKS
const api = require("./api.js")
const ui = require("./ui.js")
const getFormFields = require("../../../lib/get-form-fields.js")

// CREATE AN ALBUM
const onCreateAlbum = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createAlbum(data)
    .then(ui.createAlbumSuccess)
    .catch(ui.createAlbumFailure)
}

// GET ALL ALBUMS
const onGetAlbums = function (event) {
  event.preventDefault()

  api.getAlbums()
    .then(ui.getAlbumsSuccess)
    .catch(ui.getAlbumsFailure)
}

// ALL HANDLERS
const addHandlers = function () {
  $("#create-album").on("submit", onCreateAlbum)
  $("#get-albums").on("click", onGetAlbums)
}

module.exports = {
  addHandlers
}
