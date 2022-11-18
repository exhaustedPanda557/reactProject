# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of this application is to help a user manage their fridge and select dinner that takes into account a balanced diet and food waste. Users can filter by a food's status (filter to just expiring soon) to make sure that they are using items that are expiring soon. Additionally, a user can filter by food category (filter to just fruits/vegetables) to help users easily find the vegetables. Lastly, users can sort by calories to help users make healthy choices about ingredients. 

### Usability Principles Considered
I kept the filter section at a fixed width.... the food boxes are housed in a flex display to ensure that the page is responsive and the boxes have a fixed width so that the information can be quickly scanned due to a uniform display

### Organization of Components
The list of data is being mapped into DinnerItem.js components, which live within the App.js component. ADD DESCRIPTION OF HOW THE CONTAINERS FOR THE CART AND FILTER ARE NESTED WITHIN EACH OTHER

### How Data is Passed Down Through Components
The main App.js component is passing the data through a map function to a DinnerItem component through props (specifically, data, setDinner, and dinner)

### How the User Triggers State Changes

GO THROUGH CODE AND SEE WHAT ONCLICK CALLS AND HOW THOSE FUNCTIONS REFERENCE THE STATE VARIABLE SETTERS

