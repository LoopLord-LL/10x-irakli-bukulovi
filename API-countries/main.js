const apiCountries = "https://restcountries.com/v3.1/all";
const countriesContainer = document.querySelector(".cards-container");

function createCountryCard(country) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="country-flag">
      <img src="${country.flags.png}" alt="${country.name.common} flag" class="flag" />
    </div>
    <div class="info">
      <h3 class="country-name">${country.name.common}</h3>
      <p class="country-population"><strong>Population:</strong> ${country.population}</p>
      <p class="country-region"><strong>Region:</strong> ${country.region}</p>
      <p class="country-capital"><strong>Capital:</strong> ${country.capital}</p>
    </div>
  `;
  return card;
}

fetch(apiCountries)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const card = createCountryCard(country);
      countriesContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching countries:", error);
  });
