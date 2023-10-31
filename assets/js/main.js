// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//Charts
  const ctx = document.getElementById('myChart');
  //ctx.height = 300;

  var data = {
    labels: ["Component 1", "Component 2"],
    datasets: [
        {
            label: "Total",
            backgroundColor: "#0095ffd5",
            data: [45,320],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
        {
            label: "Ongoing",
            backgroundColor:"orange",
            data: [4,35],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
        {
            label: "Completed",
            backgroundColor:"#02d34b",
            data: [29,284],
            datalabels:{
              anchor:'end',
              align:'top',
              offset:-7
            }
        },
      ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    plugins: [ChartDataLabels],
    options: {
      //indexAxis: 'y',
        barValueSpacing: 20,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
    }
});


const ctx2 = document.getElementById('myChart2');
//ctx.height = 300;

var data = {
  labels: ["Component 1", "Component 2"],
  datasets: [
      {
          label: "Allocation",
          backgroundColor: "#0095ffd5",
          data: [26109002.45,123059237.88],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      },
      {
          label: "Commitment",
          backgroundColor:"#02d34b",
          data: [24234930.71,119990599.06],
          datalabels:{
            anchor:'end',
            align:'top',
            offset:-7
          }
      }
    ]
};

var myBarChart = new Chart(ctx2, {
  type: 'bar',
  data: data,
  plugins: [ChartDataLabels],
  options: {
    //indexAxis: 'y',
      barValueSpacing: 20,
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
  }
});


  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Component 1', 'Component 2'],
      datasets: [{
        label: 'Allocation',
        data: [26109002.45, 123059237.88],
        borderWidth: 1
      }]
    },
    //plugins: [ChartDataLabels],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  //Circular Progress Bar
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 96;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
