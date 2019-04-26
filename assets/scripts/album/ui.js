'use strict'

// CREATE AN ALBUM
const createAlbumSuccess = function (response) {
  $("#message").text(`${resonse.album.title} has been added to your collecition`)
  $("#create-album input").val("")
  $("#albums-display").html(`
    <p>${response.album.title} by ${response.album.artist}</p>
    `)
}

const createAlbumFailure = function () {
  $("#message").text("Album creation failed")
  $("#create-album input").val("")

}

const getAlbumsSuccess = function (response) {
  $("#message").text("")
  // clear anything currently shown
  $("#albums-display").html("")
  response.albums.forEach(function (album) {
    $("#albums-display").append(`
      <p>${response.album.title} by ${response.album.artist}</p>
      `)
  })
}

const getAlbumsFailure = function () {
  $("#message").text("Index request failed.")
}

module.exports = {
  createAlbumSuccess,
  createAlbumFailure,
  getAlbumsSuccess,
  getAlbumsFailure
}
