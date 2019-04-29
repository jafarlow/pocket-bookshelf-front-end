'use strict'

// REQURIE LINKS
const config = require("../config.js")
const store = require("../store")

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

// DELETE AN ALBUM
const deleteAlbum = function (id) {
  return $.ajax({
    url: config.apiUrl + "/albums/" + id,
    method: "DELETE",
    headers: {
      Authorization: "Token token=" + store.user.token
    }
  })
}

module.exports = {
  createAlbum,
  getAlbums,
  deleteAlbum
}
