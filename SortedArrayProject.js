let pkgs = [
  { id: "1", name: "World Bundle - 5GB", price: "1005", country: "PKR" },
  { id: "2", name: "World Bundle - 10GB", price: "1400", country: "PKR" },
  { id: "3", name: "World Bundle - 15GB", price: "1600", country: "PKR" },
  { id: "4", name: "World Bundle - 20GB", price: "1800", country: "PKR" },
  { id: "5", name: "World Bundle - 25GB", price: "2000", country: "PKR" },
  { id: "6", name: "World Bundle - 30GB", price: "2200", country: "PKR" },
  { id: "7", name: "World Bundle - 35GB", price: "2500", country: "PKR" },
];

let userSelectedOrder = (order) => {
  let sortedArr;
  if (order === "Ascending") {
    sortedArr = pkgs
      .slice()
      .sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (order === "Descending") {
    sortedArr = pkgs
      .slice()
      .sort((a, b) => parseInt(b.price) - parseInt(a.price));
  }
  generatePkg(sortedArr);
};

let selectElm = document.getElementById("select");
selectElm.addEventListener("change", (e) => {
  let value = e.target.value; // Get selected value
  userSelectedOrder(value); // Call the function with selected value
});

// Function to generate package display
function generatePkg(packages) {
  let containerElm = document.querySelector(".container");
  let html = "";
  packages.forEach((item) => {
    html += `
          <div class="pkg__item">
              <div class="pkg__header">
                  <h1 class="pkg__title">${item.name}</h1>
                  <span>Incl Tax</span>
                  <h2>${item.price} ${item.country}</h2>
              </div>
          </div>
          `;
  });
  containerElm.innerHTML = html; // Update the container with generated HTML
}

generatePkg(pkgs);
