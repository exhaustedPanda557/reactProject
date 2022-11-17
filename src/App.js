// I used the Development Gear Up 2022 Slides for help https://docs.google.com/presentation/d/1ASwznypedampMtpiC4rjqE2CZVu9UNTSThBdshUNYvM/edit#slide=id.g18d33a59644_9_125
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem';
import Tomato from './images/pexels-miguel-á-padriñán-255378.jpg';


function App() {
  const [type, setType] = useState("All");
  const [dinner, setDinner] = useState([]);
  const productList = [
    { name: "Tomato", calories: 22, status: "expiring soon", category: "fruit/vegetable", prepTime: 5, image: Tomato },
    { name: "Zucchini", calories: 33, status: "new", category: "fruit/vegetable", prepTime: 15, image: Tomato },
    { name: "Broccoli", calories: 50, status: "expiring soon", category: "fruit/vegetable", prepTime: 10, image: Tomato },
    { name: "Granny Smith Apple", calories: 54, status: "new", category: "fruit/vegetable", prepTime: 2, image: Tomato },
    { name: "Chicken", calories: 335, status: "new", category: "meat", prepTime: 15, image: Tomato },
    { name: "Salmon", calories: 412, status: "expiring soon", category: "meat", prepTime: 10, image: Tomato },
    { name: "Focaccia", calories: 142, status: "expiring soon", category: "grain", prepTime: 2, image: Tomato },
    { name: "Pasta", calories: 131, status: "new", category: "grain", prepTime: 10, image: Tomato },
    { name: "White Rice", calories: 206, status: "new", category: "grain", prepTime: 15, image: Tomato },
    { name: "Hummus", calories: 25, status: "expiring soon", category: "sauce", prepTime: 1, image: Tomato },
    { name: "Chipotle Mayo", calories: 35, status: "new", category: "sauce", prepTime: 1, image: Tomato },
    { name: "Tomato Sauce", calories: 70, status: "expiring soon", category: "sauce", prepTime: 5, image: Tomato }
  ];
  const [filteredProducts, updateFilteredProducts] = useState(productList);
  
  const filterAlphabetically = () => {
    let updatedFilteredList = [...productList];
    updatedFilteredList.sort((a, b) => {
      return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
    })
    updateFilteredProducts(updatedFilteredList)
  }

  const removeItem = (item) => {
    if (dinner.indexOf(item) > -1) {
      let updatedDinner = [...dinner];
      updatedDinner.splice(dinner.indexOf(item), 1);
      setDinner(updatedDinner);
    }
  }

  const PrepTime = () => {
    let totalPrepTime = 0;
    dinner.forEach((item) => {
      let dinnerItem = productList.find(obj => {console.log(obj); return obj.name == item})
      console.log(dinnerItem)
      let prepTime = dinnerItem.prepTime;
      totalPrepTime = totalPrepTime + prepTime;
    })
    return (
      <div>Total prep time is {totalPrepTime} minutes</div>
    )
  }
  // const filteredFoodArray = array.filter((item) => {
  //   return item.status = "expiring soon";
  // })

  // const sortedArray = array.sort((a,b) => {
  //   return a.calories - b.calories;
  // })

  // const keyArray = array.map((item) => {
  //   return item.name;
  // })

  // function addToDinner(item){
  //   const newDinner = {...dinner};
  //   newDinner[item] = (newDinner[item] || 0) + 1;
  //   setDinner(newDinner);
  // }

  // function addToList(item) {
  //   const newList = [...list, item];
  //   StyleSheetList(newList);
  // }

  // <Nav.Item><Nav.Link eventKey="All" onSelect={selectFilterType}>All</Nav.Link></Nav.Item>

  // const selectFilterType = eventKey => {
  //   setType(eventKey);
  // }
  // const matchesFilterType = item => {
  //   if(type === "All") {
  //     return true
  //   } else if (type === item.type) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // const filteredData = bakeryData.filter(myFitlerFunction)
  return (
    <div className="App">
      <header className="App-header">
        <div className="pageWrapper">
          <div className="filterWrapper">
            <button onClick={() => filterAlphabetically()}>Filter A-Z</button>
          </div>
          <div className="foodContainer">
            {filteredProducts.map(data => <DinnerItem data={data} setDinner={setDinner} dinner={dinner} />)}
          </div>
          <div className='cartWrapper'>
            <div>
            {dinner.map(name =>
              <div>
                {name}
                <button onClick={() => removeItem(name)}>Remove Food Item</button>
              </div>
              )}
            </div>
            <div>
              <p>Total Prep Minutes: <PrepTime /> </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
