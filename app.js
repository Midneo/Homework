var tbody = d3.select("tbody");
var ufo_data = data;

// Use d3 to update each cell's text with sighting values (weekday, date, high, low)
data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    // Append a cell to the row for each value in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Prevent the page from refreshing
d3.event.preventDefault();
selectTable.html(**);

function renderTable(ufo_data) {
    tbody.innerHTML = '';
    for (var i = 0; i < ufo_data.length; i++) {

      var component = ufo_data[i];
      var fields = Object.keys(component);

      var row = tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {

        var field = fields[j];
        var cell = row.insertCell(j);
        cell.innerText = component[field];
      }
    }
  }

//   function fillTable() {
//     var Search_for_State=$stateInput.value.trim().toLowerCase();
//     var Search_for_City = $cityInput.value.trim().toLowerCase();
//     var Search_for_Date= $dateInput.value.trim();
//     var Search_for_Shape=$shapeInput.value.trim().toLowerCase();

//       if (Search_for_State != '') {
//       ufo_data=dataSet.filter(function(stateFiltered){
//       var elementState=stateFiltered.state.toLowerCase();
//       return elementState===Search_for_State; })
//         });

//       if (Search_for_City != '') {
//       ufo_data=dataSet.filter(function(cityFiltered){
//       var elementCity=cityFiltered.city.toLowerCase();
//       return elementCity===Search_for_City;})
//       	};

//       if (Search_for_Date != '') {
// 		  ufo_data=dataSet.filter(function(dateFiltered){
// 		  var elementDate=dateFiltered.datetime.toLowerCase();
// 		  return elementDate===Search_for_Date;})
// 	      };

//       if (Search_for_Shape!=''){
//       ufo_data=dataSet.filter(function(shapeFiltered){
//       var elementShape=shapeFiltered.shape.toLowerCase();
//       return elementShape===Search_for_Shape;
//       		})
//       	};

//       	fillTable();
