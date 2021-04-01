window.addEventListener("load", () => {
  //Variable declaration.
  let lon;
  let lat;
  let temparature = document.querySelector(".temp--title");
  let description = document.querySelector(".temp--desc");
  let City = document.querySelector(".location--name");
  let Time = document.querySelector(".location--time");
  let Date = document.querySelector(".location--date");
  let Icon = document.querySelector(".myicon");

  //Getting latitude and Longitude
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      lon = pos.coords.longitude;
      lat = pos.coords.latitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=2d16e5a098f64f4096285619213103&q=${lat},${lon}`;

      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log( data);
          //Accessing data from object

          const temp = data.current.temp_c;
          const desc = data.current.condition.text;
          const icon = data.current.condition.icon;
          const city = data.location.name;
          const country = data.location.country;
          const time = data.location.localtime;

          //String manipulation
          let str = time.split(" ");

          //Updating value to DOM
          temparature.textContent = temp;
          description.textContent = desc;
          Icon.src = icon;
          City.textContent = city + "," + country;
          Time.textContent = str[1];
          Date.textContent = str[0];

          return console.log(temp, desc, city, country, time);
        })
        .catch((err) => console.log("Error"));

      //console.log(lat, lon);
    });
  } else {
    alert("Enable to access your geolocation;");
  }
});
