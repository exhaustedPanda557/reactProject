# Development

### Link to Deployed Website
https://exhaustedpanda557.github.io/reactProject/

### Goal and Value of the Application
The goal of this application is to help a user manage their fridge and select dinner that takes into account a balanced diet and food waste. Users can filter by a food's status (filter to "expiring soon" or "new") to make sure that they are using items that are expiring soon or remember what is most fresh. Additionally, a user can filter by food category (filter to "fruit/vegetable," "meat," "grain," or "sauce") to help users create a balanced plate. Lastly, users can sort by calories to help users make healthy choices about ingredients. 

### Usability Principles Considered
I made the food items in a flex display while keeping the filter and cart boxes at a fixed width with no flex tom ake the page responsive while making sure that a user could always clearly see the filter and cart boxes at a uniform dimension while allowing all of the boxes to be seen without getting cut off on a smaller screen. 

I made the filter and sort buttons such that when a filter/sort button is clicked, the background color of the button turns green to indicate that the filter/sort feature is activated. Once a filter/sort feature is activated, the reset button turns blue, so that a user is visually reminded that they can reset that filter/sort. When the button's background color is green or blue, the text changes to white, so users can more easily read the text (to address accessibility concerns).

The sorting functionality does not extend its activation once a filter is applied. Thus, the sorting button's background color is green when it is activated and turns back to white when it is no longer activated to help clarify to users when the sorting is applied.

Within the filter/sort box, the buttons are group together according to their functionality. The sorting button is housed in a div with a className buttonGroup that has margin space separating it from the buttons for filters on status (expiring soon, new, and reset the status filter). The status filter buttons are grouped in a div also with the className buttonGroup to give margin space separating it from the filter buttons for food category (fruit/vegetable, meat, grain, sauce, and reset the food category filter) that are also grouped in a div with the className buttonGroup for margin space. The div class buttonGroup is meant to provide sufficient margin spacing between the grouping of buttons to help users realize that they are separate filtering/sorting categories and realize in a user-friendly way that there is 1 sorting feature and 2 filtering categories.

Additionally, in the dinner recipe box, the buttons that remove each food item specify what food item the button is referencing. This is meant to help the users know whether the button references the item above or below it. I chose to keep the items relative close to each other without much margin spacing so that users would see the food items as one group since they are all becoming one dinner.

### Organization of Components
The list of data is being mapped into DinnerItem.js components, which live within the App.js component. The DinnerItem.js component returns a div with className FoodBox, which houses a div with className itemOverview that dispays the food image and name, the paragraphs of span className description labels displaying each food's calories, status, category, and prep time, and a button to add the food to the dinner recipe. The food boxes are housed with a div with className foodContainer. 

The filter/sorting feature is housed within buttons that are grouped and housed within a div with className buttonGroup, which are all housed along with the box's title under a div with className filterWrapper. 

For the dinner recipe, the name of food items and the button to remove them from the dinner recipe aggregator are housed within a div with className cartItem. The title and function that aggregates the total prep time for all of the dinner recipe items are housed along with all of the cartItem divs within a div with className cartWrapper.  

The foodContainer, filterWrapper, and cartWrapper are all housed within a div with className pageWrapper. The div with className AppHeader houses the title of the page, and the div with className App houses both the AppHeader and the pageWrapper divs. 

### How Data is Passed Down Through Components
The main App.js component is passing the data through a map function to a DinnerItem component through props (specifically, data, setDinner, and dinner). Wihtin the DinnerItem component, the setDinner updates dinner and back in App.js, the PrepTime function references dinner to get the prepTime associated with each food item name in dinner and sum all of the prepTimes of the food names in dinner. 

### How the User Triggers State Changes

When the Add To Dinner Recipe button is clicked, the handleClick function within the DinnerItem.js component is called, which calls the state variable setter function setDinner and adds the food name to the state variable dinner. 

The filter and sort buttons when clicked call functions that use the state variable setter function updateFilteredProducts to update filteredProducts with the filtered/sorted updatedFilteredList. The food boxes that are displayed in foodContainer are the result of the map function previously discussed that passes the data to a DinnerItem component. The map function is called on filterProducts so that it reflects the filtered and sorted productList. Thus, clicking the filter and sort buttons triggers state changes that change what DinnerItem components are being created.

When the "Sort By Calories" button is clicked, the sortByCalories function is called, which uses the state variable setter function setSortType to update the state variable sortType to "calories". When a user clicks a filter button to activate or reset a filter, the sorting is removed, so those filter/remove functions use the state variable setter function setSortType to update sortType to the empty string. Whether sortType is "calories" or an empty string is used to set the conditional background color for the sort button.

When the "Filter By Expiring Soon" or "Filter By New" buttons are clicked, 

