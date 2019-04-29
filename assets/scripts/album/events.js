'use strict'

// REQUIRE LINKS
const api = require("./api.js")
const ui = require("./ui.js")
const store = require("../store")
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

// DELETE AN ALBUM
const onDeleteAlbum = function (event) {
  event.preventDefault()

  const id = $(event.target).data("id")
  api.deleteAlbum(id)
    .then(ui.deleteAlbumSuccess)
    .catch(ui.deleteAlbumFailure)
}

// ALL HANDLERS
const addHandlers = function () {
  $("#create-album").on("submit", onCreateAlbum)
  $("#get-albums").on("click", onGetAlbums)
  $("#albums-display").on("click", ".btn-danger", onDeleteAlbum)
}

module.exports = {
  addHandlers
}
