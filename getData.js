function getWeather() {
    const apiKey = '';
    let c = document.getElementById("city");
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the UI with the weather data
        document.getElementById(c).textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
        // Add more code to display other weather data as needed
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Handle errors (e.g., display an error message to the user)
      });
  }

  