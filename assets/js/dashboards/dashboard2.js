// =====================================
// Profit Start
// =====================================
var profit = {
  series: [
    {
      name: "Profit",
      data: [60, 40, 37, 35, 35, 20, 30],
    },
    {
      name: "Expenses",
      data: [15, 30, 15, 35, 25, 30, 30],
    },
  ],
  colors: ["var(--bs-primary)", "#fb977d"],
  chart: {
    type: "bar",
    fontFamily: "inherit",
    foreColor: "#adb0bb",
    width: "100%",
    height: 300,
    stacked: true,
    toolbar: {
      show: !1,
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "27%",
      borderRadius: 6,
    },
  },
  dataLabels: {
    enabled: false,
  },

  grid: {
    borderColor: "var(--bs-border-color)",
    padding: { top: 0, bottom: -8, left: 20, right: 20 },
  },
  tooltip: {
    theme: "dark",
  },
  toolbar: {
    show: false,
  },
  xaxis: {
    categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(document.querySelector("#profit"), profit);
chart.render();

// =====================================
// Profit End
// =====================================

// =====================================
// Test Start
// =====================================
var test = {
  series: [
    {
      color: "var(--bs-primary)",
      name: "Test Results",
      data: [13, 15, 14, 17, 16, 19, 17],
    },
  ],
  chart: {
    height: 240,
    type: "area",
    fontFamily: "inherit",
    foreColor: "#626b81",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 4,
    strokeWidth: 1,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.2,
      opacityTo: 0,
      stops: [20, 180],
    },
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  xaxis: {
    categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
};

var chart = new ApexCharts(document.querySelector("#test"), test);
chart.render();
// =====================================
// Test End
// =====================================

// =====================================
// Grade End
// =====================================
var grade = {
  series: [5368, 3319, 3500, 4106],
  labels: ["5368", "Direct Traffic", "Refferal Traffic", "Oragnic Traffic"],
  chart: {
    height: 250,
    type: "donut",
    fontFamily: "inherit",
    foreColor: "#c6d1e9",
    offsetX: -15,
  },

  tooltip: {
    theme: "dark",
    fillSeriesColor: false,
  },

  colors: ["#e7ecf0", "#f8c076", "#fb977d", "var(--bs-primary)"],
  dataLabels: {
    enabled: false,
  },

  grid: {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },

  legend: {
    show: false,
  },

  stroke: {
    show: false,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "75%",
        background: "none",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "18px",
            color: undefined,
            offsetY: 5,
          },
          value: {
            show: false,
            color: "#98aab4",
          },
        },
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#grade"), grade);
chart.render();
