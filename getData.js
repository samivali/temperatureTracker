function getWeather() {
    let apiKey = '';
    let city = document.getElementById('city').value;
    let lat = 0;
    let lon=0;
    let dt=0;
    const curApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    const hisApiUrl = 'https://history.openweathermap.org/data/3.0/history/timemachine?lat='+lat+'&lon='+lon+'&dt='+dt+'&appid='+apiKey;
//current data
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

        //sets lat + lon
        lat=data.coord.lat;
        lon=data.coord.lon;
          console.log('Data received from API:', data);
          console.log('Updating temperature element:', data.main.temp);

      })
//5 years
      dt=	1546234972;
    fetch(hisApiUrl)
      .then((response) =>{
        if(!response.okay){
          throw new Error ('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>{
        document.getElementById('temp-5-yrs').textContent = data.main.temp;
        //document.getElementById('temp-10-Yrs').textContent = data.main.temp;
        //document.getElementById('temp-20-Yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

      })


//10 years
      dt =	1388468572;
    fetch(hisApiUrl)
      .then((response)=>{
        if(!response.okay){
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
    
      .catch((error) => {
        console.error('Fetch error:', error);
      })
      .then((data) =>{
        document.getElementById('temp-10-Yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

      })

    
 //20 years
    dt =	757316572;
    fetch(hisApiUrl)
      .then((response)=>{
        if(!response.okay){
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
    
      .catch((error) => {
        console.error('Fetch error:', error);
      })
      .then((data) =>{
        document.getElementById('temp-20-Yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

      })

  
  }



  