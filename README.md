# Development

### Link to Deployed Website
https://exhaustedpanda557.github.io/reactProject/

### Goal and Value of the Application
The goal of this application is to help a user manage their fridge and select dinner that takes into account a balanced diet and food waste. Users can filter by a food's status (filter to "expiring soon" or "new") to make sure that they are using items that are expiring soon or remember what is most fresh. Additionally, a user can filter by food category (filter to "fruit/vegetable," "meat," "grain," or "sauce") to help users create a balanced plate. Lastly, users can sort by calories to help users make healthy choices about ingredients. 

### Usability Principles Considered
I made the food items in a flex display while keeping the filter and cart boxes at a fixed width with no flex tom ake the page responsive while making sure that a user could always clearly see the filter and cart boxes at a uniform dimension while allowing all of the boxes to be seen without getting cut off on a smaller screen. 

I made the filter and sort buttons such that when a filter/sort button 

### Organization of Components
The list of data is being mapped into DinnerItem.js components, which live within the App.js component. ADD DESCRIPTION OF HOW THE CONTAINERS FOR THE CART AND FILTER ARE NESTED WITHIN EACH OTHER

### How Data is Passed Down Through Components
The main App.js component is passing the data through a map function to a DinnerItem component through props (specifically, data, setDinner, and dinner)

### How the User Triggers State Changes

GO THROUGH CODE AND SEE WHAT ONCLICK CALLS AND HOW THOSE FUNCTIONS REFERENCE THE STATE VARIABLE SETTERS

