let myInput = document.getElementById("myInput");
let myTable = document.getElementById("myTable");
let name1 = document.getElementById("name1");
let country = document.getElementById("country");
let tbody = myTable.querySelector("tbody");
let tr = tbody.getElementsByTagName("tr");
let cityName = "";
let countryName = "";
let foundedCity;
let foundedCountry;
let start = true;

function myFunction() {
  let found = false;
  let filter = myInput.value.toLowerCase();
  let rows = myTable
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let rowText = rows[i].innerText.toLowerCase();
    if (rowText.indexOf(filter) === -1) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
      found = true;
    }
  }

  let notFoundRow = document.getElementById("notFoundRow");
  if (notFoundRow) {
    notFoundRow.remove();
  }
  if (!found && filter !== "") {
    let addSetionTr = document.createElement("tr");
    let addSetionTd1 = document.createElement("td");
    addSetionTr.id = "notFoundRow";
    addSetionTd1.colSpan = 2;
    addSetionTd1.style.textAlign = "center";
    addSetionTd1.innerHTML = "Not Found";
    addSetionTr.appendChild(addSetionTd1);
    myTable.appendChild(addSetionTr);
  }
}
function add() {
  recheak(start);
  if (start) {
    cityName = name1.value;
    countryName = country.value;
    cityName =
      cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase();
    countryName =
      countryName.slice(0, 1).toUpperCase() +
      countryName.slice(1).toLowerCase();
    let addSetionTr = document.createElement("tr");
    let addSetionTd1 = document.createElement("td");
    let addSetionTd2 = document.createElement("td");
    if (name1.value === "" && country.value === "") {
      name1.style.border = "0.5px solid red";
      country.style.border = "0.5px solid red";
    } else if (name1.value === "") {
      name1.style.border = "0.5px solid red";
    } else if (country.value === "") {
      country.style.border = "0.5px solid red";
    } else if (name1.value !== "" && country.value !== "") {
      // console.log(cityName);
      // console.log(countryName);

      tbody.appendChild(addSetionTr);
      addSetionTr.appendChild(addSetionTd1);
      addSetionTr.appendChild(addSetionTd2);
      addSetionTd1.innerHTML = cityName;
      addSetionTd2.innerHTML = countryName;
    }
    name1.value = "";
    country.value = "";
  }
  start = true;
}
function borderReset() {
  name1.style.border = "0.5px solid black";
  country.style.border = "0.5px solid black";
}
function recheak(start) {
  for (let i = 0; i < tr.length; i++) {
    foundedCity = tr[i].children[0].innerHTML.toLowerCase();
    foundedCountry = tr[i].children[1].innerHTML.toLowerCase();

    if (name1.value.toLowerCase() === foundedCountry) {
      alert("Your Enterd City Name is a Country Name Only City Name Allowed");
      console.log("Hello Country");
      return (start = false);
    } else if (name1.value.toLowerCase() === foundedCity) {
      alert("Duplicate City Not Allowed");
      return (start = false);
    }
  }
}
// function recheak() {
//   found = true;
//   tbodyChild = tbody.childNodes;
//   for (let i = 0; i < tbodyChild.length; i++) {
//     if (tbodyChild[i].nodeType === 1 && found) {
//       for (let j = 0; j < tbodyChild[i].childNodes.length; j++) {
//         if (tbodyChild[i].childNodes[j].nodeType === 1 && found) {
//           if (
//             name1.value.toLowerCase() ===
//               tbodyChild[i].childNodes[j].innerHTML.toLowerCase() ||
//             country.value.toLowerCase() ===
//               tbodyChild[i].childNodes[j].innerHTML.toLowerCase()
//           ) {
//             if (
//               country.value.toLowerCase() !==
//               tbodyChild[i].childNodes[j].innerHTML.toLowerCase()
//             ) {
//               alert("Dublicate City Entry Not Allowed");

//               found = false;
//               start = false;
//               return false;
//             }
//           }
//         }
//       }
//     }
//   }
// }
