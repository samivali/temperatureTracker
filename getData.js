function getWeather() {
    const apiKey = '870a178f80fb906f24cef2781fdcca82';
    const city = document.getElementById('city').value;
    const lat = 0;
    const lon=0;
    const dt=0;

  
    const curApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    //find more user friendly way of getting lattitude and longitude ==> computer conversion??
    //hard code different timestamps
    const hisApiUrl = 'https://history.openweathermap.org/data/3.0/history/timemachine?lat='+{lat}+'&lon='+{lon}+'&dt='+{dt}+'&appid='+{apiKey};

    fetch(curApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

    

      .then((data) => {
        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
          console.log('Data received from API:', data);
          console.log('Updating temperature element:', data.main.temp);

      })

    fetch(hisApiUrl)
      .then((response) =>{
        if(!response.okay){
          throw new Error ('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>{
//need to break up years bc each api call only takes in 1 time stamp
        document.getElementById('temp-5-yrs').textContent = data.main.temp;
        //document.getElementById('temp-10-Yrs').textContent = data.main.temp;
        //document.getElementById('temp-20-Yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

      })
    
      .catch((error) => {
        console.error('Fetch error:', error);
      });

  }



  