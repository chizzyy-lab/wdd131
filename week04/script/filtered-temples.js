const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/H1.jpeg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/H2.jpeg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/H3.jpeg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/H4.jpeg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/H5.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/H6.jpeg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/H7.jpeg"
  },
  {
    templeName: "Abuja Nigeria",
    location: "abuja, Nigeria",
    dedicated: "2003, August, 5",
    area: 11511,
    imageUrl:
    "images/H8.jpeg"
  },
  {
    templeName: "Lagos Nigeria",
    location: "Lagos, Nigeria",
    dedicated: "2010, june, 7",
    area: 11000,
    imageUrl:
    "images/H9.jpeg"
  }

];

createTempleCard(temples);

const nonutahLink = document.querySelector("#nonutah");

nonutahLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temples => !temple.location.includes("utah")));
});

function createTempleCard(filteredTemple) {
    filteredTemple.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);


        document.querySelector(".res-grid").appendChild(card);
    })
}



// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the first paragraph of the footer
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear}`;

// Insert the last modified date into the second paragraph of the footer
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${document.lastModified}`; 


