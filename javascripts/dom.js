"use strict";


const domBuilder =  (data) => {
  let fullString = "";
  for (var i = 0; i < data.length; i++) {
  let string = "";
  string += `<img class="col-md-1" id="badge" src="${data[i].icon_url}" >`;
  fullString += string;
  }
  printToDom(fullString);
};

const printToDom = (string) => {
  $(".badgeHolder").html(string);
};



module.exports = {domBuilder};
