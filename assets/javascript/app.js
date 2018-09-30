function popModal(userMapInput) {
  $("div").remove(".modalWrap");
  var modalWrap = $("<div>");
  var modalBoxTop = $("<div>");
  var modalBoxBottom = $("<div>");
  var closeButton = $("<button>");
  var modalTable = $("<table>");
  var noArticlesReturned = $(
    "<div>Your search returned zero articles from this country</div>"
  );
  modalTable.addClass("table");
  modalWrap.addClass("modalWrap");

  closeButton.text("Close");
  closeButton.addClass("closeModal close");
  modalBoxTop.text(userMapInput);
  modalBoxTop.addClass("modalBoxTop");
  modalBoxBottom.addClass("modalBoxBottom");
  modalBoxTop.append(closeButton);
  modalBoxBottom.append(modalTable);
  modalWrap.append(modalBoxTop, modalBoxBottom);
  $(".grid-container").append(modalWrap);

  // console.log(modalBox);
  // console.log(userMapInput);
  // console.log(scores);
  switch (userMapInput) {
    case "Russia":
      // console.log(allData.russia);
      // make table row with A small pic, the article title linked to the article, the sentiment score, ??the summary??
      // console.log(scores.russia);
      if (allData.russia.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.russia.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.russia[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.russia[i].url +
              " target='_blank'>" +
              allData.russia[i].title +
              "</a>"
          );
          newCellScore.text(allData.russia[i].score);
          newCellSummary.text(allData.russia[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "Canada":
      // console.log(allData.canada);
      // console.log(scores.canada);
      if (allData.canada.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.canada.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.canada[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.canada[i].url +
              " target='_blank'>" +
              allData.canada[i].title +
              "</a>"
          );
          newCellScore.text(allData.canada[i].score);
          newCellSummary.text(allData.canada[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "Qatar":
      // console.log(allData.qatar);
      // console.log(scores.qatar);
      if (allData.qatar.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.qatar.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.qatar[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.qatar[i].url +
              " target='_blank'>" +
              allData.qatar[i].title +
              "</a>"
          );
          newCellScore.text(allData.qatar[i].score);
          newCellSummary.text(allData.qatar[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "United Kingdom":
      // console.log(allData.uk);
      // console.log(scores.uk);
      if (allData.uk.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.uk.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.uk[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.uk[i].url +
              " target='_blank'>" +
              allData.uk[i].title +
              "</a>"
          );
          newCellScore.text(allData.uk[i].score);
          newCellSummary.text(allData.uk[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "Australia":
      // console.log(allData.australia);
      // console.log(scores.australia);
      if (allData.australia.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.australia.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.australia[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.australia[i].url +
              " target='_blank'>" +
              allData.australia[i].title +
              "</a>"
          );
          newCellScore.text(allData.australia[i].score);
          newCellSummary.text(allData.australia[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "Ireland":
      // console.log(allData.ireland);
      // console.log(scores.ireland);
      if (allData.ireland.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.ireland.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.ireland[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.ireland[i].url +
              " target='_blank'>" +
              allData.ireland[i].title +
              "</a>"
          );
          newCellScore.text(allData.ireland[i].score);
          newCellSummary.text(allData.ireland[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "Israel":
      // console.log(allData.israel);
      // console.log(scores.israel);
      if (allData.israel.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.israel.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.israel[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.israel[i].url +
              " target='_blank'>" +
              allData.israel[i].title +
              "</a>"
          );
          newCellScore.text(allData.israel[i].score);
          newCellSummary.text(allData.israel[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "United States":
      // console.log(allData.usa);
      // console.log(scores.usa);
      if (allData.usa.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.usa.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.usa[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.usa[i].url +
              " target='_blank'>" +
              allData.usa[i].title +
              "</a>"
          );
          newCellScore.text(allData.usa[i].score);
          newCellSummary.text(allData.usa[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
    case "India":
      // console.log(allData.india);
      //  console.log(scores.india);
      if (allData.india.length !== 0) {
        modalTable.append(
          "<tr><th></th><th></th><th>Sentiment Score</th><th></th></tr>"
        );
        for (var i = 0; i < allData.india.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.india[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.india[i].url +
              " target='_blank'>" +
              allData.india[i].title +
              "</a>"
          );
          newCellScore.text(allData.india[i].score);
          newCellSummary.text(allData.india[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
      } else {
        modalBoxBottom.append(noArticlesReturned);
      }
      break;
  }
}

google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyBqNFzgS2GUY_xDEFsYOu44N_XQCfBNYPs"
});

google.charts.setOnLoadCallback(drawRegionsMap);
var qatSentimentScore = 0;
var ukSentimentScore = 0;
var canSentimentScore = 0;
var ausSentimentScore = 0;
var ireSentimentScore = 0;
var isrSentimentScore = 0;
var usaSentimentScore = 0;
var indSentimentScore = 0;
var rusSentimentScore = 0;

var qatFlag = false;
var ukFlag = false;
var canFlag = false;
var ausFlag = false;
var ireFlag = false;
var isrFlag = false;
var usaFlag = false;
var indFlag = false;
var rusFlag = false;

var mapMin = 0;
var mapMax = 0;

function drawMapAfterAPIIngest() {
  // remove old result table:
  $(".country-table-container").remove();
  // determine if all AJAX calls are complete
  if (
    qatFlag &&
    ukFlag &&
    canFlag &&
    ausFlag &&
    ireFlag &&
    isrFlag &&
    usaFlag &&
    indFlag &&
    rusFlag
  ) {
    // reset all the flags
    qatFlag = false;
    ukFlag = false;
    canFlag = false;
    ausFlag = false;
    ireFlag = false;
    isrFlag = false;
    usaFlag = false;
    indFlag = false;
    rusFlag = false;
    // redraw the map
    drawRegionsMap();

    // what also happens after api ingest? add table of scores

    var countryTableContainer = $("<div class='country-table-container'>");
    var countryTable = $("<table>");
    countryTable.addClass("table");
    var countryTableHeader = $("<tr><th></th><th></th></tr>");
    var qatRow = $(
      "<tr class='countryTR' data-country='Qatar'><td>Qatar</td><td>" +
        qatSentimentScore +
        "</td></tr>"
    );
    var ukRow = $(
      "<tr class='countryTR' data-country='United Kingdom'><td>United Kingdom</td><td>" +
        ukSentimentScore +
        "</td></tr>"
    );
    var canRow = $(
      "<tr class='countryTR' data-country='Canada'><td>Canada</td><td>" +
        canSentimentScore +
        "</td></tr>"
    );
    var ausRow = $(
      "<tr class='countryTR' data-country='Australia'><td>Australia</td><td>" +
        ausSentimentScore +
        "</td></tr>"
    );
    var ireRow = $(
      "<tr class='countryTR' data-country='Ireland'><td>Ireland</td><td>" +
        ireSentimentScore +
        "</td></tr>"
    );
    var isrRow = $(
      "<tr class='countryTR' data-country='Israel'><td>Israel</td><td>" +
        isrSentimentScore +
        "</td></tr>"
    );
    var usaRow = $(
      "<tr class='countryTR' data-country='United States'><td>USA</td><td>" +
        usaSentimentScore +
        "</td></tr>"
    );
    var indRow = $(
      "<tr class='countryTR' data-country='India'><td>India</td><td>" +
        indSentimentScore +
        "</td></tr>"
    );
    var rusRow = $(
      "<tr class='countryTR' data-country='Russia'><td>Russia</td><td>" +
        rusSentimentScore +
        "</td></tr>"
    );
    countryTable.append(
      countryTableHeader,
      qatRow,
      ukRow,
      canRow,
      ausRow,
      ireRow,
      isrRow,
      usaRow,
      indRow,
      rusRow
    );
    countryTableContainer.append(countryTable);
    $(".grid-container").append(countryTableContainer);
  }
}

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Sentiment Score"],
    ["Qatar", qatSentimentScore],
    ["United Kingdom", ukSentimentScore],
    ["Canada", canSentimentScore],
    ["Australia", ausSentimentScore],
    ["Ireland", ireSentimentScore],
    ["Israel", isrSentimentScore],
    ["United States", usaSentimentScore],
    ["India", indSentimentScore],
    ["Russia", indSentimentScore]
  ]);

  var options = {
    colorAxis: {
      minValue: Math.min(...sentScoreArray),
      colors: ["#00AEEF", "#937963", "#F26422"],
      maxValue: Math.max(...sentScoreArray)
    },
    backgroundColor: { fill: "white", strokeWidth: 0 },
    datalessRegionColor: "#d3d3d3",
    defaultColor: "#d3d3d3",
    displayMode: "regions",
    legend: { textStyle: { color: "black", fontSize: 20 } },

    legend: { numberFormat: "#.#" },
    region: "world",
    resolution: "countries",
    keepAspectRatio: true,
    magnifyingGlass: { enable: true, zoomFactor: 7.5 }
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("map-container")
  );

  chart.draw(data, options);

  google.visualization.events.addListener(chart, "select", function() {
    var selection = chart.getSelection();
    if (selection.length) {
      // console.log("Country Clicked: " + data.getValue(selection[0].row, 0));
      // console.log("-----------");
    }
    var countryName = data.getValue(selection[0].row, 0);
    popModal(countryName);
  });
}

$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  // console.log("You clicked the close button");
  $("div").remove(".modalWrap");
});

$(document).on("click", ".countryTR", function(event) {
  console.log("You clicked a table row.", $(this).data("country"));
  popModal($(this).data("country"));
});

$(window).on("resize", function() {
  drawRegionsMap();
});
$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  // console.log("You clicked the close button");
  $("div").remove(".modalWrap");
});
