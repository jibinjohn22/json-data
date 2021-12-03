// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'scores');
  const players = [{"name":"dhoni", "year":2020, "score":895},
                   {"name":"dhoni", "year":2019, "score":1895 },
                   {"name":"dhoni", "year":2018, "score":1595 },
                   {"name":"kohli", "year":2020, "score":896 },
                   {"name":"kohli", "year":2019, "score":1756 },
                   {"name":"kohli", "year":2018, "score":1432 },
                   {"name":"rohit", "year":2020, "score":843 },
                   {"name":"rohit", "year":2019, "score":1243 },
                   {"name":"rohit", "year":2018, "score":1623 },
                   {"name":"pant", "year":2020, "score":1052 }
]
let dhoni = 0;
let kohli = 0;
let rohit = 0;
let pant = 0;
for(i=0;i<players.length;i++){
  if(players[i].name =="dhoni"){
dhoni += players[i].score;
  } else if (players[i].name =="kohli"){
    kohli += players[i].score;
  } else if (players[i].name =="rohit"){
    rohit += players[i].score;
  } else if (players[i].name =="pant"){
    pant += players[i].score;
  }
 
}
console.log(dhoni, kohli, rohit, pant);
  data.addRows([
    ['dhoni', dhoni],
    ['kohli', kohli],
    ['rohit', rohit],
    ['pant', pant],
   ]);

  // Set chart options
  var options = {'title':'SCORES OF DIFFERENT PLAYERS',
                 'width':600,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div4'));
  chart.draw(data, options);
}