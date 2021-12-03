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
  data.addColumn('number', 'Slices');
  let c = 1; m = 3; s =8
  let civil = 0;
  let mech = 0;
  let csc = 0;
  const student = [{"name":"John", "dept":'civil'},
                   {"name":"John", "dept":'mech' },
                   {"name":"John", "dept":'csc' },
                   {"name":"John", "dept":'civil' },
                   {"name":"John", "dept":'mech' },
                   {"name":"John", "dept":'csc' },
                   {"name":"John", "dept":'civil' },
                   {"name":"John", "dept":'civil' },
                   {"name":"John", "dept":'mech' },
                   {"name":"John", "dept":'csc' }

  ] 
  for (i = 0; i < student.length; i++){
    if(student[i].dept == 'civil'){
      civil == civil++;
      // console .log (civil);
    } else if(student[i].dept =='mech'){
      mech == mech++;
      // console .log (mech);
    } else if(student[i].dept =='csc'){
      csc == csc++;
      // console .log (csc);
    }
  //  console.log(civil,mech,csc )
  }
  data.addRows([
    ['civil', civil],
    ['mech', mech],
    ['csc', csc]
  ]);

  
  
  // const stud1 = {student.length[dept'cvil']};
  

  // Set chart options
  var options = {'title':'student strength',
                 'width':600,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

