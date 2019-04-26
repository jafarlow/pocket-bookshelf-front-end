'use strict'

// REQURIE LINK
const config = require("../config.js")

// CREATE AN ALBUM
const createAlbum = function (data) {
  return $.ajax({
    url: config.apiUrl + "/albums",
    method: "POST",
    headers: {
      Authorization: "Token token=" + store.user.token
    },
    data: data
  })
}

// GET ALL ALBUMS
const getAlbums = function () {
  return $.ajax({
    url: config.apiUrl + "/albums",
    method: "GET",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

module.exports = {
  createAlbum,
  getAlbums
}
