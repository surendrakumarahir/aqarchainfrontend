$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

// window.onload = function() {

//

//         var totalVisitors = 883000;
//         var visitorsData = {
//             "New vs Returning Visitors": [{
//                 click: visitorsChartDrilldownHandler,
//                 cursor: "pointer",
//                 explodeOnClick: false,
//                 innerRadius: "75%",
//                 legendMarkerType: "square",
//                 name: "New vs Returning Visitors",
//                 radius: "100%",
//                 showInLegend: true,
//                 startAngle: 90,
//                 type: "doughnut",
//                 dataPoints: [
//                     { y: 519960, name: "Total Earning 15,500SAR", color: "#12ddc7" },
//                     { y: 363040, name: "Total Traffic 50.6GB", color: "#15ace1" }
//                 ]
//             }],
//             "New Visitors": [{
//                 color: "#E7823A",
//                 name: "New Visitors",
//                 type: "column",
//                 dataPoints: [
//                     { x: new Date("1 Jan 2015"), y: 33000 },
//                     { x: new Date("1 Feb 2015"), y: 35960 },
//                     { x: new Date("1 Mar 2015"), y: 42160 },
//                     { x: new Date("1 Apr 2015"), y: 42240 },
//                     { x: new Date("1 May 2015"), y: 43200 },
//                     { x: new Date("1 Jun 2015"), y: 40600 },
//                     { x: new Date("1 Jul 2015"), y: 42560 },
//                     { x: new Date("1 Aug 2015"), y: 44280 },
//                     { x: new Date("1 Sep 2015"), y: 44800 },
//                     { x: new Date("1 Oct 2015"), y: 48720 },
//                     { x: new Date("1 Nov 2015"), y: 50840 },
//                     { x: new Date("1 Dec 2015"), y: 51600 }
//                 ]
//             }],
//             "Returning Visitors": [{
//                 color: "#546BC1",
//                 name: "Returning Visitors",
//                 type: "column",
//                 dataPoints: [
//                     { x: new Date("1 Jan 2015"), y: 22000 },
//                     { x: new Date("1 Feb 2015"), y: 26040 },
//                     { x: new Date("1 Mar 2015"), y: 25840 },
//                     { x: new Date("1 Apr 2015"), y: 23760 },
//                     { x: new Date("1 May 2015"), y: 28800 },
//                     { x: new Date("1 Jun 2015"), y: 29400 },
//                     { x: new Date("1 Jul 2015"), y: 33440 },
//                     { x: new Date("1 Aug 2015"), y: 37720 },
//                     { x: new Date("1 Sep 2015"), y: 35200 },
//                     { x: new Date("1 Oct 2015"), y: 35280 },
//                     { x: new Date("1 Nov 2015"), y: 31160 },
//                     { x: new Date("1 Dec 2015"), y: 34400 }
//                 ]
//             }]
//         };

//         var newVSReturningVisitorsOptions = {
//             animationEnabled: true,
//             theme: "light2",
//             title: {
//             },
//             subtitles: [{
//                 text: "",
//                 backgroundColor: "#2eacd1",
//                 fontSize: 16,
//                 fontColor: "white",
//                 padding: 5
//             }],
//             legend: {
//                 fontFamily: "calibri",
//                 fontSize: 14,
//                 itemTextFormatter: function (e) {
//                     return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
//                 }
//             },
//             data: []
//         };

//         var visitorsDrilldownedChartOptions = {
//             animationEnabled: true,
//             theme: "light2",
//             axisX: {
//                 labelFontColor: "#717171",
//                 lineColor: "#a2a2a2",
//                 tickColor: "#a2a2a2"
//             },
//             axisY: {
//                 gridThickness: 0,
//                 includeZero: false,
//                 labelFontColor: "#717171",
//                 lineColor: "#a2a2a2",
//                 tickColor: "#a2a2a2",
//                 lineThickness: 1
//             },
//             data: []
//         };

//         var chart2 = new CanvasJS.Chart("chartContainer2", newVSReturningVisitorsOptions);
//         chart2.options.data = visitorsData["New vs Returning Visitors"];
//         chart2.render();

//         function visitorsChartDrilldownHandler(e) {
//             chart2 = new CanvasJS.Chart("chartContainer2", visitorsDrilldownedChartOptions);
//             chart2.options.data = visitorsData[e.dataPoint.name];
//             chart2.options.title = { text: e.dataPoint.name }
//             chart2.render();
//             $("#backButton").toggleClass("invisible");
//         }

//         }
