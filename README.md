# api-ecommerce
Demo for 3rd party Ocean search API implementation.

Use Case:
  As an existing data marketplace owner, I would like to expand our offerings and inventory by integrating
  with other marketplaces, so my customers can discover all needed data without leaving my portal.  
  
Problem:
  Since I am integrating with multiple vendors, I don’t have a large enough budget to learn and
  integrate all different complex implementations of other marketplaces and I would prefer keep
  my marketplace codebase lean and clean.
  
Problems identified:
  1. Easy to integrate
  2. Minimal and standard code for integration
  
Solution:
  Ocean Protocol’s REST based API
  
Why?:
  1. Industry standard for third-party integration
  2. Lowest learning curve
  3. Can be integrated with a single line of code
  
Demo search API:
  Demo search API repository can be found (here)
  
  Demo search API heroku app: https://pure-waters-23057.herokuapp.com/api/assets/
    
  How to use demo search API:  
   1. Enter get request to recieve JSON object of every available data asset from OCEAN
      a. ex. https://pure-waters-23057.herokuapp.com/api/assets/cars for a response with every asset with "cars" tag
   2. (Optional) use a JSON formatter browser plugin to view the data in an organised object manner
    
Demo 3rd party OCEAN API implementation:
  
  Contained within this repository
  
  Uses the demo seach API in an example 3rd party data e-commerce implementation
  
  How to setup and use:
    1. Clone repository
    
    2. Install/update required apps (npm install)
    
    3. Run on local server (npm start)
    
    4. Use search bar to search by tag
      a. search for assets related to cars by searching "cars"
      
    5. Results appear in boxes below that include metadata for each individual asset
    
    6. Button that reads "Buy on OCEAN" at the bottom of each box redirects user to the asset's OCEAN Commons page
       a. This allows the user to find out more about the asset and purchase if they choose
