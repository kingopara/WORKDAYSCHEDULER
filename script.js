var today = moment();
var timeColumn = $(".timeColumn");
$("#currentDay").text(today.format("dddd, MMMM Do"));

var currentHour = moment().format("HH");

//color change present/future/past
for (i = 0; i < timeColumn.length; i++) {
  var temp = timeColumn[i];
  if (timeColumn[i].id === currentHour) {
    temp.classList.remove("past");
    temp.classList.remove("future");
    temp.classList.add("present");
  } else if (timeColumn[i].id > currentHour) {
    temp.classList.remove("past");
    temp.classList.add("future");
    temp.classList.remove("present");
  } else {
    temp.classList.add("past");
    temp.classList.remove("future");
    temp.classList.remove("present");
  }
}

function submitTask(event) {
  event.preventDefault();
  timeColumn.forEach();
}

var nineInput = $("#nineIn");
var tenInput = $("#tenIn");
var elevenInput = $("#elevenIn");
var twelveInput = $("#twelveIn");
var oneInput = $("#oneIn");
var twoInput = $("#twoIn");
var threeInput = $("#threeIn");
var fourInput = $("#fourIn");
var fiveInput = $("#fiveIn");

var nineBtn = document.getElementById("nineBtn");

nineBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var nine = nineInput.val().trim();
  localStorage.setItem("9", JSON.stringify(nine));
});

function renderList() {
  var listOut = JSON.parse(localStorage.getItem("9"));
  if (listOut !== null) {
    document.getElementById("09").textContent = listOut;
  }
}

var tenBtn = document.getElementById("tenBtn");

tenBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var ten = tenInput.val().trim();
  localStorage.setItem("10", JSON.stringify(ten));
});

function tenrenderList() {
  var listOut = JSON.parse(localStorage.getItem("10"));
  if (listOut !== null) {
    document.getElementById("10").textContent = listOut;
  }
}

var elevenBtn = document.getElementById("elevenBtn");

elevenBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var eleven = elevenInput.val().trim();
  localStorage.setItem("11", JSON.stringify(eleven));
});

function elevenrenderList() {
  var listOut = JSON.parse(localStorage.getItem("11"));

  if (listOut !== null) {
    document.getElementById("11").textContent = listOut;
  }
}

var twelveBtn = document.getElementById("twelveBtn");

twelveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var twelve = twelveInput.val().trim();
  localStorage.setItem("12", JSON.stringify(twelve));
});

function twelverenderList() {
  var listOut = JSON.parse(localStorage.getItem("12"));
  if (listOut !== null) {
    document.getElementById("12").textContent = listOut;
  }
}

var oneBtn = document.getElementById("oneBtn");

oneBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var one = oneInput.val().trim();
  localStorage.setItem("01", JSON.stringify(one));
});

function onerenderList() {
  var listOut = JSON.parse(localStorage.getItem("01"));
  if (listOut !== null) {
    document.getElementById("13").textContent = listOut;
  }
}

var twoBtn = document.getElementById("twoBtn");

twoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var two = twoInput.val().trim();
  localStorage.setItem("02", JSON.stringify(two));
});

function tworenderList() {
  var listOut = JSON.parse(localStorage.getItem("02"));
  if (listOut !== null) {
    document.getElementById("14").textContent = listOut;
  }
}

var threeBtn = document.getElementById("threeBtn");

threeBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var three = threeInput.val().trim();
  localStorage.setItem("03", JSON.stringify(three));
});

function threerenderList() {
  var listOut = JSON.parse(localStorage.getItem("03"));
  if (listOut !== null) {
    document.getElementById("15").textContent = listOut;
  }
}

var fourBtn = document.getElementById("fourBtn");

fourBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var four = fourInput.val().trim();
  localStorage.setItem("04", JSON.stringify(four));
});

function fourrenderList() {
  var listOut = JSON.parse(localStorage.getItem("04"));
  if (listOut !== null) {
    document.getElementById("16").textContent = listOut;
  }
}

var fiveBtn = document.getElementById("fiveBtn");

fiveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var five = fiveInput.val().trim();
  localStorage.setItem("05", JSON.stringify(five));
});

function fiverenderList() {
  var listOut = JSON.parse(localStorage.getItem("05"));

  if (listOut !== null) {
    document.getElementById("17").textContent = listOut;
  }
}
function init() {
  renderList();
  tenrenderList();
  elevenrenderList();
  twelverenderList();
  onerenderList();
  tworenderList();
  threerenderList();
  fourrenderList();
  fiverenderList();
}
init();
