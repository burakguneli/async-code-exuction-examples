
function jsonifyResponse(response) {
  return response.json();
}

function evilFetchAndWaitFunction() {
  sleep(2000);

  return "burak";
}

function runFirstCodeSnippet(name) {
  const prefix = "Hi";

  function printData(data) {
    console.log(data);
  }

  console.log(prefix, name);

  printData("welcome!");

  console.log("welcoming our guest task is complete!");
}

function runSecondCodeSnippet() {
  function printData(data) {
    console.log(data);
  }

  const fetchedData = evilFetchAndWaitFunction();

  printData(fetchedData);

  console.log("Second console output");
}

function runThirdCodeSnippet() {
  function printHello() {
    console.log("Hello!");
  }

  setTimeout(printHello, 1000);

  console.log("First console output!");
}

function runFourthCodeSnippet() {
  function printHello() {
    console.log("Hello!");
  }

  setTimeout(printHello, 0);

  console.log("First console output!");
}

function runFifthCodeSnippet() {
  function printData(response) {
    jsonifyResponse(response).then(data => console.log(data.name));
  }

  const fetchedData = fetch("http://localhost:3000/url");

  fetchedData.then(printData);

  console.log("First console output");
}

function runSixthCodeSnippet() {
  function printData(response) {
    console.log("burak");

    // jsonifyResponse(response).then(data => console.log(data.name));
  }

  function printHello() {
    console.log("Hello!");
  }

  function blockForThreeSecond() {
    // some stuff that takes 3 seconds to finish

    sleep(3000);
  }

  setTimeout(printHello, 0);

  const fetchedData = fetch("http://localhost:3000/url");

  fetchedData.then(printData);

  // debugger;

  blockForThreeSecond();

  console.log("First console output");
}
