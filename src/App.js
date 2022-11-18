// I used the Development Gear Up 2022 Slides for help https://docs.google.com/presentation/d/1ASwznypedampMtpiC4rjqE2CZVu9UNTSThBdshUNYvM/edit#slide=id.g18d33a59644_9_125
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem';
import Tomato from './images/tomato.jpg';
import Zucchini from './images/zucchini.jpg';
import Broccoli from './images/broccoli.jpg';
import Apple from './images/apples.jpg';
import Chicken from './images/chicken.jpg';
import Salmon from './images/salmon.jpg';
import Focaccia from './images/focaccia.jpg';
import Pasta from './images/pasta.jpg';
import Rice from './images/rice.jpg';
import Hummus from './images/hummus.jpg';
import Mayo from './images/mayo.jpg';
import RedSauce from './images/redSauce.jpg';


function App() {
  const [type, setType] = useState("All");
  const [dinner, setDinner] = useState([]);
  const productList = [
    { name: "Tomato", calories: 22, status: "expiring soon", category: "fruit/vegetable", prepTime: 5, image: Tomato },
    { name: "Zucchini", calories: 33, status: "new", category: "fruit/vegetable", prepTime: 15, image: Zucchini },
    { name: "Broccoli", calories: 50, status: "expiring soon", category: "fruit/vegetable", prepTime: 10, image: Broccoli },
    { name: "Granny Smith Apple", calories: 54, status: "new", category: "fruit/vegetable", prepTime: 2, image: Apple },
    { name: "Chicken", calories: 335, status: "new", category: "meat", prepTime: 15, image: Chicken },
    { name: "Salmon", calories: 412, status: "expiring soon", category: "meat", prepTime: 10, image: Salmon },
    { name: "Focaccia", calories: 142, status: "expiring soon", category: "grain", prepTime: 2, image: Focaccia },
    { name: "Pasta", calories: 131, status: "new", category: "grain", prepTime: 10, image: Pasta },
    { name: "White Rice", calories: 206, status: "new", category: "grain", prepTime: 15, image: Rice },
    { name: "Hummus", calories: 25, status: "expiring soon", category: "sauce", prepTime: 1, image: Hummus },
    { name: "Chipotle Mayo", calories: 35, status: "new", category: "sauce", prepTime: 1, image: Mayo },
    { name: "Tomato Sauce", calories: 70, status: "expiring soon", category: "sauce", prepTime: 5, image: RedSauce }
  ];
  const [filteredProducts, updateFilteredProducts] = useState(productList);

  const sortByCalories = () => {
    let updatedFilteredList = [...productList];
    updatedFilteredList.sort((a, b) => {
      return (a.calories < b.calories) ? -1 : (a.calories > b.calories) ? 1 : 0;
    })
    updateFilteredProducts(updatedFilteredList)
  }

  const resetCalSort = () => {
    updateFilteredProducts(productList);
  }

  const filterByExpiring = () => {
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return(food.status === "expiring soon");
    })
    updateFilteredProducts(updatedFilteredList)
  }

  const filterByFruitsVegs = () => {
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return(food.category === "fruit/vegetable");
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
      let dinnerItem = productList.find(obj => { console.log(obj); return obj.name == item })
      console.log(dinnerItem)
      let prepTime = dinnerItem.prepTime;
      totalPrepTime = totalPrepTime + prepTime;
    })
    return (
      <div>{totalPrepTime} minutes</div>
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
        <h1>Welcome to your fridge:</h1>
        <div className="pageWrapper">
          <div className="filterWrapper">
            <div className='buttonGroup'>
            <button onClick={() => sortByCalories()}>Sort By Calories</button>
            <button onClick={() => resetCalSort()}>Reset Sorting by Calories</button>
            </div>
            <div className='buttonGroup'>
            <button onClick={() => filterByExpiring()}>Filter By Expiring Soon</button>
            </div>
            <div className='buttonGroup'>
              <button onClick={() => filterByFruitsVegs()}>Filter to Fruits and Vegetables</button>
            </div>
          </div>
          <div className="foodContainer">
            {filteredProducts.map(data => <DinnerItem data={data} setDinner={setDinner} dinner={dinner} />)}
          </div>
          <div className='cartWrapper'>
            <h2>Here's your dinner recipe</h2>
            <div>
              {dinner.map(name =>
                <div className='cartItem'>
                  <h6>{name}</h6>
                  <button onClick={() => removeItem(name)}>Remove Food Item</button>
                </div>
              )}
            </div>
            <div>
              <h5>Total Prep Minutes: <PrepTime /> </h5>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
