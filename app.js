document.getElementById("searchButton").addEventListener("click", function () {
  fetch("superheroes.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error occurred.");
      }
      return response.text();
    })
    .then((data) => {
      const superheroList = document.getElementById("superheroList");

      superheroList.textContent = data.trim();

      document.getElementById("ModalPopUp").style.display = "flex";
    })
    .catch((error) => {
      console.error("Failed to fetch superheroes.", error);
    });
});

// Closing the Modal Pop Up
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("ModalPopUp").style.display = "none";
});
