function getWeather() {
    const apiKey = '870a178f80fb906f24cef2781fdcca82';
    const city = document.getElementById('city').value;
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById('city').textContent = data.name;
          console.log('Data received from API:', data);
          console.log('Updating temperature element:', data.main.temp);

        document.getElementById('temperature').textContent = data.main.temp;
        // Add more code to display other weather data as needed
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });

      

  }

  