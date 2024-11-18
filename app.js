document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("result");

  const httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "GET",
    `superheroes.php?query=${encodeURIComponent(query)}`,
    true
  );

  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      const response = httpRequest.responseText.trim();
      resultBox.innerHTML = response;

      if (query !== "" && response.includes("SUPERHERO NOT FOUND")) {
        resultBox.innerHTML = `<h3 style="color: red;">SUPERHERO NOT FOUND</h3>`;
      }
    } else {
      resultBox.innerHTML = `<h3 style="color: red;">An error occurred. Please try again later.</h3>`;
    }
  };

  httpRequest.onerror = function () {
    resultBox.innerHTML = `<h3 style="color: red;">Network error. Please check your connection.</h3>`;
  };

  httpRequest.send();
});
