const apiKey = "cd7f9be2d549e8e6c6d1add0f71ef674"

export async function getWeather(coords){
	try {
		const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}&units=metric`;
		const response = await fetch(weatherURL);
		if (!response.ok) {
			const errorData = await response.json();
			console.error("API error response:", errorData);
			throw new Error("API failed");
		}
		const data = await response.json();
		console.log(data);
	}
	catch (err) {
		console.error("Error:", err);
	}
} 
