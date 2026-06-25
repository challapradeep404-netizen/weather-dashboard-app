# Weather Dashboard

A dynamic Weather Dashboard built using HTML, CSS, and JavaScript that fetches real-time weather information from a public REST API. Users can search for any city and instantly view live weather details such as temperature, humidity, and wind speed.

---

## Features

### Search Weather by City
- Enter any city name
- Retrieve live weather information instantly

### Real-Time Data Fetching
- Uses the Fetch API
- Implements asynchronous JavaScript with async/await

### Weather Metrics
- City Name
- Temperature (°C)
- Humidity (%)
- Wind Speed (km/h)

### Error Handling
- Handles invalid city names
- Displays user-friendly error messages
- Handles failed API requests gracefully

### Dynamic User Interface
- Updates weather information dynamically
- No page reload required

### Responsive Design
- Works seamlessly on:
  - Mobile Devices
  - Tablets
  - Desktop Screens

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Async/Await
- REST API
- JSON

---

## Project Structure

```text
weather-dashboard-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

---

## Functionalities Implemented

- Real-Time Weather Search
- API Integration
- Fetch API Requests
- Async/Await Operations
- JSON Parsing
- Dynamic DOM Manipulation
- Error Handling
- Responsive Layout

---

## API Used

OpenWeatherMap API

The application retrieves weather data from the OpenWeatherMap REST API.

Example API Request:

```javascript
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

---

## Sample Weather Output

| Metric | Value |
|----------|---------|
| City | London |
| Temperature | 24°C |
| Humidity | 70% |
| Wind Speed | 10 km/h |

---

## Expected Outcome

A fully functional Weather Dashboard that demonstrates:

- Asynchronous JavaScript
- Fetch API Usage
- REST API Integration
- JSON Data Handling
- Dynamic DOM Updates
- Error Management

---

## Author

### Challa Pradeep

Aspiring Web Developer

---

## License

This project is developed for educational and internship purposes.
