let JSON_btn = document.getElementById("JSON");

JSON_btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: downloadJSON,
  });
});

function downloadJSON() {
  list = document.querySelector("._2YPr_");

  fileName = document.querySelector("._21nHd").childNodes[0].innerText;

  if (list) {
    contacts = list.innerText;
    exportObj = contacts.split(", ");
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", fileName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  } else {
    alert("pls open a whatsapp group");
  }
}

// -------------------------------------

let CSV_btn = document.getElementById("CSV");
CSV_btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: downloadCSV,
  });
});

function downloadCSV() {
  list = document.querySelector("._2YPr_");

  fileName = document.querySelector("._21nHd").childNodes[0].innerText;

  console.log(fileName);

  if (list) {
    contacts = list.innerText;
    array = contacts.split(", ");

    var CsvString = "";

    array.forEach(function (ColItem, RowIndex) {
      CsvString += ColItem + "\r\n";
    });
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var x = document.createElement("A");
    x.setAttribute("href", CsvString);
    x.setAttribute("download", fileName + ".csv");
    document.body.appendChild(x);
    x.click();
  } else {
    alert("pls open a whatsapp group");
  }
}
