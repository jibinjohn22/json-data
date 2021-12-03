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
  data.addColumn('number', 'marks');
  let civilMark = 0;
  let mechMark = 0;
  let cscMark = 0;
  const student = [{"name":"John", "dept":'civil', "mark":95},
                   {"name":"John", "dept":'mech', "mark":75 },
                   {"name":"John", "dept":'csc', "mark":88 },
                   {"name":"John", "dept":'civil', "mark":92 },
                   {"name":"John", "dept":'mech', "mark":68 },
                   {"name":"John", "dept":'csc', "mark":94 },
                   {"name":"John", "dept":'civil', "mark":87 },
                   {"name":"John", "dept":'civil', "mark":73 },
                   {"name":"John", "dept":'mech', "mark":84 },
                   {"name":"John", "dept":'csc', "mark":91 }
]
for (i = 0; i < student.length; i++){
  if(student[i].dept == 'civil'){
    civilMark += student[i].mark;
    console.log(civilMark)
    // console .log (civil);
  } else if(student[i].dept =='mech'){
    mechMark += student[i].mark;
    console .log (mechMark);
  } else if(student[i].dept =='csc'){
    cscMark += student[i].mark;
    console .log (cscMark);
  }
//  console.log(civil,mech,csc )
}

  data.addRows([
    ['civil', civilMark],
    ['mech', mechMark],
    ['csc', cscMark]
  ]);

  // Set chart options
  var options = {'title':'DEPARTMENT MARKS',
                 'width':'100%',
                 'height':'100%',};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}