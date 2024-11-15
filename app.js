document.getElementById("searchButton").addEventListener("click", function () {
  fetch("superheroes.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error occurred.");
      }
      return response.text();
    })
    .then((data) => {
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(data, "text/html");
      const fetchedListItems = parsedHTML.querySelectorAll("li");

      const superheroList = document.getElementById("superheroList");
      superheroList.innerHTML = ""; // Clear current list

      fetchedListItems.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item.innerHTML;
        superheroList.appendChild(li);
      });

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
