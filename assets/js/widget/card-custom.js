$(function () {
  "use strict";
  var card1 = {
    series: [
      {
        name: "Weekly Sales",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    chart: {
      height: 75,
      type: "area",
      fontFamily: '"inherit',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3699ff"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "solid",
      opacity: 0.2,
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart1 = new ApexCharts(document.querySelector(".earnings-month"), card1);
  chart1.render();

  // 2
  var card2 = {
    series: [
      {
        name: "Social marketing",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    chart: {
      height: 75,
      type: "area",
      fontFamily: '"inherit',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#ee9d01"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "solid",
      opacity: 0.2,
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart2 = new ApexCharts(
    document.querySelector(".earnings-month2"),
    card2
  );
  chart2.render();

  // 3
  var card3 = {
    series: [
      {
        name: "Yearly Sales",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    chart: {
      height: 75,
      type: "area",
      fontFamily: '"inherit',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#f64e60"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "solid",
      opacity: 0.2,
    },
    grid: {
      show: false,
    },
    xaxis: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  var chart3 = new ApexCharts(
    document.querySelector(".earnings-month3"),
    card3
  );
  chart3.render();
});
