'use strict'
// REQUIRE LINKS
const albumsTemplate = require("../templates/albums.handlebars")
const store = require("../store")

// CREATE AN ALBUM
const createAlbumSuccess = function (response) {
  $("#message").text(`<i>${response.album.title}</i> has been added to your collection`)
  $("#create-album input").val("")
  $("#albums-display").html(`
    <p><i>${response.album.title}</i> by ${response.album.artist}</p>
    `)
}

const createAlbumFailure = function () {
  $("#message").text("Album creation failed")
  $("#create-album input").val("")

}

// GET ALL ALBUMS
const getAlbumsSuccess = function (response) {
  $("#message").text("This is your current collection")
  // clear anything currently shown
  $("#albums-display").html("")
  const showAlbumsHtml = albumsTemplate({albums: response.albums})
  $("#albums-display").append(showAlbumsHtml)
}

const getAlbumsFailure = function () {
  $("#message").text("Index request failed.")
}

// DELETE AN ALBUM
const deleteAlbumSuccess = function (response) {
  $("#message").text("Farewell, album!")
  $("#albums-display").html("")
  const showAlbumsHtml = albumsTemplate({albums: response.albums})
  $("#albums-display").append(showAlbumsHtml)
}

const deleteAlbumFailure = function () {
  $("#message").text("Failed to delete the album.")
}

module.exports = {
  createAlbumSuccess,
  createAlbumFailure,
  getAlbumsSuccess,
  getAlbumsFailure,
  deleteAlbumSuccess,
  deleteAlbumFailure
}
