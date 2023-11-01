function getWeather() {
    let apiKey = '9d10c07a028ee6f9e6ca1d3c1cd441c8';
    let city = document.getElementById('city').value;
    
    const curApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


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
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        let dt =0;
  

//5 years
      dt=	1541048958;
      let hisApiUrl5 = `https://history.openweathermap.org/data/3.0/history/timemachine?lat=0&lon=0&dt=1541048958&appid=9d10c07a028ee6f9e6ca1d3c1cd441c8`;

      //let hisApiUrl5 = 'https://history.openweathermap.org/data/2.5/history/city?lat={0}&lon={0}&type=hour&start={1369728000}&end={1369789200}&appid={9d10c07a028ee6f9e6ca1d3c1cd441c8}'
      return fetch(hisApiUrl5);
    })
      .then((response) => {
        if(!response.ok){
          throw new Error ('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>{
        document.getElementById('temp-5-yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);


//10 years
      dt =	1388468572;
      let hisApiUrl10 = `https://history.openweathermap.org/data/3.0/history/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${apiKey}`;
    return fetch(hisApiUrl10);
    })
      .then((response)=>{
        if(!response.ok){
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
      .then((data) =>{
        document.getElementById('temp-10-yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

    
 //20 years
    dt =	1067666958;
    let hisApiUrl20 = `https://history.openweathermap.org/data/3.0/history/timemachine?lat=${lat}&lon=${lon}&dt=${dt}&appid=${apiKey}`;
    fetch(hisApiUrl20);
      })
      .then((response)=>{
        if(!response.ok){
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
    
      .catch((error) => {
        console.log('Fetch error:', error);
      })
      .then((data) =>{
        document.getElementById('temp-20-yrs').textContent = data.main.temp;
        console.log('Data received from API:', data);
        console.log('Updating temperature element:', data.main.temp);

      })

  
  }






  