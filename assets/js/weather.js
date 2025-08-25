

const apiKey = "cd7f9be2d549e8e6c6d1add0f71ef674";

const todayWeather = document.getElementById("current")

export async function getWeather(coords) {
  try {
    const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}&units=metric`;
    const response = await fetch(weatherURL);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API error response:", errorData);
      throw new Error("API failed");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

function displayWeather(data) {
  const currentWeather = { temp: data.list[0].main.temp, feels_like: data.list[0].main.feels_like, humidity: data.list[0].main.humidity  };
  console.log(data);
  console.log(currentWeather);
  let p = document.createElement("p")
  todayWeather.appendChild(p)
  p.innerText = 
  `The current temperature is: ${currentWeather.temp + "C"}
  It feels like: ${currentWeather.feels_like + "C"}
 It
 
  `
}
