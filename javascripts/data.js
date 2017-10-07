"use strict";

let dom = require('./dom');

let treehouseData = [];


//get data from source
// const badgeLoad = () => {
$.ajax(`https://teamtreehouse.com/adamsmith41.json`).done((data) => {
  treehouseData = data.badges;
  //dom function
  dom.domBuilder(treehouseData);
  }).fail((error) => {
    console.log(error);
  });
// };


 module.exports = {};
