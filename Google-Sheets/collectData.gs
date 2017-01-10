function collectData() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var deviceID = 'YOUR_DEVICE_ID_HERE';
  var accessToken = '3a21cb23bfa252111eca65dc199f86a6afa170e1';
  var result = 'allReadings'; 
  var response = UrlFetchApp.fetch('https://api.particle.io/v1/devices/' + deviceID + '/' + result + '?access_token=' + accessToken);
  //returns temperature average, sum of PIR detections, microphone average, mic max amplitude, door trigger average - all over one minute intervals 
  
  try {
    var response = JSON.parse(response.getContentText()); // parse the JSON the Core API created
    var result = unescape(response.result); // unescape before parse as JSON
    
    try {
      var myResultArray = result.split(",");
      var tempAvg = myResultArray[0];
      var PIRsum = myResultArray[1];
      var micAvg = myResultArray[2];
      var micMax = myResultArray[3];
      var doorAverage = myResultArray[4];
      
      var d = new Date(); //timestamp
      
      sheet.appendRow([d, tempAvg, PIRsum, micAvg, micMax, doorAverage]); // append the date and data to the sheet
    } 
    catch(e)
    {
      Logger.log("Unable to do split returned JSON result into array");
    }
  } catch(e)
  {
    Logger.log("Unable to parse returned JSON");
  }
}
