**Weather API Integration and Location Display in Angular**

**Overview**

This readme file will guide you through the process of integrating a Weather APIs into existing Angular application. Please follow through the steps and implement the Components as mentioned below.

**Requirements**
- Clone the given Repository and upload the solution to your own repository by creating it as public and then start working on the implementation.
- Use existing Angular application with routing and components to complete the functionality as described below.
- Write Unit test cases.
- Use appropriate CSS stylings.
- Always commit to the repository as you make the progress in development.

**Steps**

- Use ([https://openweathermap.org/api](https://openweathermap.org/api)) Weather API that provides weather data for specific locations. Review the documentation for the API to understand what data it provides and how to access it.
- Register for an API key if required. Some Weather APIs may require you to sign up for an account and obtain an API key to access their data. Follow the instructions provided by the API to obtain your key. Once you register the key, it may take upto 2 hours for that key to work.
- Create a service in your Angular application to handle API requests. In this service, make an HTTP GET request to the Weather API using the HttpClient library and passing in your API key and the location you want to retrieve weather data for. The exact format of the request will depend on the API you are using, so consult the API documentation for details.
- Parse the response data from the API and extract the relevant information, such as the current temperature, humidity, and weather conditions. Again, the exact format of the response data will depend on the API you are using, so consult the API documentation for details.
- You can also use a front-end framework or library like Bootstrap or Material Design.

**Existing Components to be enhanced**

Please note, these components have basic HTML to showcase what is expected. Feel free to enhance using CSS and update static HTML to use angular directives to make it dynamically bindable.

All the weather API's expects latitude and longitude coordinates of the location selected on the page, which can be obtained by integrating with geocoding API (http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&limit={limit}&appid={API_key})

- **Dashboard**
  - Dropdown of cities and then select the tile to go to each one of below routes.
    - Show Current Weather
    - Show 5 days forecast.
    - Show Air Pollution Data


- **Show Current Weather**
  - call the API to get the weather data for city which is selected and show below data points.

  - API - https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        
        1. Temperature – Min, Max, Current and feels Like
        2. Humidity
        3. Wind Speed
        4. Weather description

- **Show 5 days forecast.**
  - 
  - Show only one record per day, below API returns multiple records for each day(with 3-hour interval) – pick earliest after midnight to represent that day and show below data points.

  - API - api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

        1. Temperature – Min, Max, Current and feels Like
        2. Humidity
        3. Wind Speed
        4. Weather description



- **Show Air Pollution**

  - API  [http://api.openweathermap.org/data/2.5/air\_pollution?lat={lat}&lon={lon}&appid={API](http://api.openweathermap.org/data/2.5/air_pollution?lat=%7Blat%7D&lon=%7Blon%7D&appid=%7BAPI) key}
  - Look at the table from below link to translate the value to Qualitative name. [https://openweathermap.org/api/air-pollution](https://openweathermap.org/api/air-pollution)
  - Show the below items in table with 3 columns - Name, Value, Qualitative name

        1. Carbon monoxide
        2. Ozone
        3. Nitrogen monoxide
        4. Sulphur dioxide
        5. Ammonia

- **Existing Application Details**
 - Software Requirement
        1. Angular CLI: 16.0.0
        2. Node: 18.16.0
        3. Package Manager: npm 9.5.1
 - Steps to make local setup ready

      - Download and install node : 18.16.0
    
      - npm uninstall -g @angular/cli
    
      - npm cache clean
    
      - npm install -g @angular/cli
    
      - npm install
    
      - ng serv / npm run start

 - Access the application using URL http://localhost:4200/marsh
