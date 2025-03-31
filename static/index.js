document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const resultContainer = document.getElementById("result-container");
  const resultContent = document.getElementById("result-content");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect the slider values
    const sepalLength = document.getElementById("sepal_length").value;
    const sepalWidth = document.getElementById("sepal_width").value;
    const petalLength = document.getElementById("petal_length").value;
    const petalWidth = document.getElementById("petal_width").value;

    // Create a data object
    const data = {
      sepal_length: sepalLength,
      sepal_width: sepalWidth,
      petal_length: petalLength,
      petal_width: petalWidth,
    };

    // Dynamically construct the server URL
    const baseUrl = `${window.location.protocol}//${window.location.hostname}:5000`;
    const endpoint = `${baseUrl}/submit`;

    // Send the data to the server using a POST request
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Server Response:", responseData);

        // Update the result content with the server response
        resultContent.innerHTML = `
          <p class="text-md"><strong>Flower Species:</strong> ${responseData.class}</p>
          <p class="text-md"><strong>Confidence:</strong> ${responseData.confidence}%</p>
        `;

        // Make the result container visible
        resultContainer.classList.remove("hidden");
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        alert("Failed to submit data. Please try again.");
      });
  });
});