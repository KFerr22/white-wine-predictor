// from data.js
var tableData = data;
// Select the buttons
var button = d3.select("#button");
var button2 = d3.select("#button2");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
button2.on("click", showallcharacterictics );
form.on("submit",runFilter);

//If the user chooses one or more filters by clicking on the 
// predict_quality" button call this function
//************************************************ */
function runFilter() {
//************************************************ */
  var filteredData=[];
  var fixed_acidity=[];
  var volatile_acidity=[];
  var citric_acid=[];
  var residual_sugar=[];
  var Shape=[];
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputfixed_acidity     = d3.select("#fixed_acidity");
  var inputvolatile_acidity  = d3.select("#volatile_acidity");
  var inputcitric_acid       = d3.select("#citric_acid");
  var inputresidual_sugar    = d3.select("#residual_sugar");
  var inputshape             = d3.select("#free_sulfur_dioxide");
  var inputdensity           = d3.select("#density");
  var inputpH                = d3.select("#pH");
  var inputsulphates         = d3.select("#sulphates");
  var inputalcohol           = d3.select("#alcohol");
  
  // Get the value property of the input element
  var inputfixed_acidity        = d3.select("#fixed_acidity");
  var inputvolatile_acidity     = d3.select("#volatile_acidity");
  var inputcitric_acid          = d3.select("#citric_acid");
  var inputresidual_sugar       = d3.select("#residual_sugar");
  var inputfree_sulfur_dioxide  = d3.select("#free_sulfur_dioxide");
  var inputtotal_sulfur_dioxide = d3.select("#total_sulfur_dioxide");
  var inputdensity              = d3.select("#density");
  var inputpH                   = d3.select("#pH");
  var inputsulphates            = d3.select("#sulphates");
  var inputalcohol              = d3.select("#alcohol");

  //console.log(tableData);  //just as check to see what data is returned
  
  //Use fixed_acidity filter
  if (inputfixed_acidity !== null) {
    console.log('Min Max fixed_acidity ',inputfixed_acidity);
    fixed_acidity= tableData.filter(value_range => value_range.fixed_acidity == inputfixed_acidityValue);
    console.log('fixed_acidity ',fixed_acidity);
    showdatarange(fixed_acidity);
  } 
   //Use volatile_acidity filter  
  if (inputvolatile_acidityValue !== null) {
    console.log('volatile_acidity input value ',inputvolatile_acidityValue);
    volatile_acidity= tableData.filter(value_range => value_range.volatile_acidity == inputvolatile_acidityValue);
    console.log('volatile_acidity ',volatile_acidity);
    showdatarange(volatile_acidity);
  } 
   //Use citric_acid filter
   if (inputcitric_acidValue !== null) {
    console.log('citric_acid  input value ',inputcitric_acidValue);
    citric_acid= tableData.filter(value_range => value_range.citric_acid == inputcitric_acidValue);
    console.log('citric_acid ',citric_acid);
    showdatarange(citric_acid);
  } 
   //Use residual_sugar filter
   if (inputresidual_sugarValue !== null)  {
      console.log('residual_sugar input value ',inputresidual_sugarValue);
      residual_sugar= tableData.filter(value_range => value_range.residual_sugar == inputresidual_sugarValue);
      console.log('residual_sugar ',residual_sugar);
      showdatarange(residual_sugar);
  } 
   //Use Shape filter
   if (inputshapeValue !== null)  {
    console.log('shape input value ',inputshapeValue);
    Shape= tableData.filter(value_range => value_range.shape ==inputshapeValue);
    console.log('Shape ',Shape);  
    showdatarange(Shape);  
  }
}
// Call this function to add to the table to display results of choosing filter.
//It will not clear the table in between searches unless "Clear Page" is used
//************************************************ */
function showdatarange(filterdata) {
//************************************************ */
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Use D3 to select the table body
  var tbody = d3.select("tbody");

// Use D3 to select the table
  var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");
  
  filterdata.forEach(({fixed_acidity, volatile_acidity,citric_acid,residual_sugar,shape,chlorides,free_sulfur_dioxide}) => {
    // Append one table row per sighting
    var row = tbody.append("tr");  //location.reload()
    // append one cell per sighting attribute
    row.append("td").text(fixed_acidity);
    row.append("td").text(volatile_acidity);
    row.append("td").text(citric_acid);
    row.append("td").text(residual_sugar);
    row.append("td").text(shape);
    row.append("td").text(chlorides);
    row.append("td").text(free_sulfur_dioxide);
   
  });
}
// Allow user to see all the value_range when "Show All Sightings" button is pressed.
//************************************************ */
function showallcharacterictics() {
//************************************************ */
console.log('showallcharacteristics')
  // Prevent the page from refreshing
  d3.event.preventDefault();
   
 // console.log(tableData);   //debug to check what data is retrieved

  // Use D3 to select the table body
  var tbody = d3.select("tbody");

// Use D3 to select the table
  var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");
  tableData.forEach(({fixed_acidity, volatile_acidity, citric_acid, residual_sugar, chlorides,free_sulfur_dioxide, total_sulfur_dioxide, density,
       pH, sulphates, alcohol}) => {
        
    // Append one table row per sighting
    var row = tbody.append("tr");
  
    // append one cell for each of the sighting attributes
    row.append("td").text(characteristic);
    row.append("td").text(max);
    row.append("td").text(min);
  });
};