function openLocalitiesPopup() {
  // Open a new pop-up window with a form asking for locality
  var localityWindow = window.open("", "localityPopup", "width=400,height=400");

  // Create a form with a select element for locality options
  var form = "<form><label for='locality-select'>Select your locality:</label><br><select id='locality-select'><option value='locality1'>Locality 1</option><option value='locality2'>Locality 2</option><option value='locality3'>Locality 3</option></select><br><br><button type='button' onclick='selectLocality()'>Submit</button></form>";

  // Add the form to the pop-up window
  localityWindow.document.body.innerHTML = form;
}

function selectLocality() {
  // Get the selected locality from the select element in the pop-up window
  var localitySelect = window.opener.document.getElementById("locality-select");
  var selectedLocality = localitySelect.options[localitySelect.selectedIndex].value;

  // Display prices based on the selected locality on the main screen
  displayPrices(selectedLocality);

  // Close the pop-up window
  window.close();
}

function displayPrices(locality) {
  // Display prices based on the selected locality on the main screen
  // You can use any method you want to display the prices, such as appending them to a div element or displaying them in an alert box
  // Here's an example of appending the prices to a div element:
  var prices = "<h3>Prices for " + locality + "</h3><ul><li>Price 1</li><li>Price 2</li><li>Price 3</li></ul>";
  var pricesDiv = document.getElementById("prices");
  pricesDiv.innerHTML = prices;
}
