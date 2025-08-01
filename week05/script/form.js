const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectElement = document.getElementById("productSelect");

products.forEach(product => {
  const option = document.createElement("option");
  option.textContent = product.name;   // Display name
  option.value = product.id;           // Value for form submission
  selectElement.appendChild(option);
});

window.addEventListener("load", () => {
  let reviewCount = localStorage.getItem("reviewCounter");

  if (!reviewCount) {
    reviewCount = 0;
  }

  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCounter", reviewCount);

  console.log(`Reviews completed: ${reviewCount}`);
});