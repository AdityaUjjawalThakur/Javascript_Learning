This is a straightforward web application designed to fetch and display current weather conditions for a specified location using the WeatherAPI. Users can enter a city name, and the app will provide real-time details like temperature, wind speed, and location information.

Features
Current Weather Display: Get up-to-date weather information.
Location Details: Displays the city, region, and country for the queried location.
Temperature: Shows the temperature in Celsius.
Wind Speed: Displays the wind speed in kilometers per hour (kph).
Basic Error Handling: Provides user-friendly messages for invalid locations or API errors.

Technologies Used
HTML: For structuring the web page content, including input fields and display areas.
CSS: (Implicit, for styling the layout and elements, though minimal in the provided code).
JavaScript: For handling user input, making asynchronous API calls, dynamically updating the DOM, and basic error management.
WeatherAPI: A third-party web service used to obtain current weather data.

Purpose
This project serves as a practical exercise to reinforce core web development concepts, particularly focusing on:
DOM Manipulation: Creating and appending elements to display data.
Event Handling: Responding to user actions, such as button clicks.
Asynchronous JavaScript (Fetch API): Making GET requests to an external API.
JSON Data Handling: Parsing and extracting relevant information from API responses.
API Integration: Connecting a front-end application to a real-world external service.
Error Handling: Implementing basic error checks for API responses to provide feedback to the user.

⚙Future Improvements
Improve UI/UX with more comprehensive styling (e.g., using Tailwind CSS) and better layout for data display.
Display more weather details (e.g., humidity, pressure, "feels like" temperature, weather icon).
Add a loading indicator while data is being fetched.
Implement a "clear" button for results.
Make the application fully responsive for various screen sizes.
Allow users to switch between Celsius and Fahrenheit.
Implement a search history.
