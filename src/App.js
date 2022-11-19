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
  const [sortType, setSortType] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
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
    let updatedFilteredList = [...filteredProducts];
    updatedFilteredList.sort((a, b) => {
      return (a.calories < b.calories) ? -1 : (a.calories > b.calories) ? 1 : 0;
    })
    updateFilteredProducts(updatedFilteredList);
    setSortType("calories");
  }


  const filterByExpiring = (statusText) => {
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return (food.status === statusText);
    }).filter((food) => {
      return (!categoryFilter || food.category === categoryFilter)
    })

    updateFilteredProducts(updatedFilteredList);
    setStatusFilter(statusText);
    setSortType("");
  }

  const filterByCategory = (categoryText) => {
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return (food.category === categoryText);
    }).filter((food) => {
      return (!statusFilter || food.status === statusFilter);
    })

    updateFilteredProducts(updatedFilteredList);
    setCategoryFilter(categoryText);
    setSortType("");
  }

  const resetStatusFilter = () => {
    setStatusFilter("");
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return (!categoryFilter || food.category === categoryFilter);
    });
    updateFilteredProducts(updatedFilteredList);
    setSortType("");
  }

  const resetCategoryFilter = () => {
    setCategoryFilter("");
    let updatedFilteredList = [...productList];
    updatedFilteredList = updatedFilteredList.filter((food) => {
      return (!statusFilter || food.status === statusFilter);
    });
    updateFilteredProducts(updatedFilteredList);
    setSortType("");
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your fridge:</h1>
      </header>
      <div className="pageWrapper">
        <div className="filterWrapper">
          <h2>Sort or filter the food items</h2>
          <div className='buttonGroup'>
            <button style={{ backgroundColor: (sortType === "calories" ? "green" : "white"), color: (sortType === "calories" ? "white" : "black") }} onClick={() => sortByCalories()}>Sort By Calories</button>
          </div>
          <div className='buttonGroup'>
            <button style={{ backgroundColor: (statusFilter === "expiring soon" ? "green" : "white"), color: (statusFilter === "expiring soon" ? "white" : "black") }} onClick={() => filterByExpiring("expiring soon")}>Filter By Expiring Soon</button>
            <button style={{ backgroundColor: (statusFilter === "new" ? "green" : "white"), color: (statusFilter === "new" ? "white" : "black") }} onClick={() => filterByExpiring("new")}>Filter By New</button>
            <button style={{ backgroundColor: (statusFilter === "" ? "white" : "blue"), color: (statusFilter === "" ? "black" : "white") }} onClick={() => resetStatusFilter()}>Reset Filter for Food Status</button>
          </div>
          <div className='buttonGroup'>
            <button style={{ backgroundColor: (categoryFilter === "fruit/vegetable" ? "green" : "white"), color: (categoryFilter === "fruit/vegetable" ? "white" : "black") }} onClick={() => filterByCategory("fruit/vegetable")}>Filter to Fruits and Vegetables</button>
            <button style={{ backgroundColor: (categoryFilter === "meat" ? "green" : "white"), color: (categoryFilter === "meat" ? "white" : "black") }} onClick={() => filterByCategory("meat")}>Filter to Meats</button>
            <button style={{ backgroundColor: (categoryFilter === "grain" ? "green" : "white"), color: (categoryFilter === "grain" ? "white" : "black") }} onClick={() => filterByCategory("grain")}>Filter to Grains</button>
            <button style={{ backgroundColor: (categoryFilter === "sauce" ? "green" : "white"), color: (categoryFilter === "sauce" ? "white" : "black") }} onClick={() => filterByCategory("sauce")}>Filter to Sauces</button>
            <button style={{ backgroundColor: (categoryFilter === "" ? "white" : "blue"), color: (categoryFilter === "" ? "black" : "white") }} onClick={() => resetCategoryFilter()}>Reset Filter for Food Category</button>
          </div>
        </div>
        <div className="foodContainer">
          {filteredProducts.map(data => <DinnerItem data={data} setDinner={setDinner} dinner={dinner} />)}
        </div>
        <div className='cartWrapper'>
          <h2 style={{ marginBottom: "1rem" }}>Here's your dinner recipe</h2>
          <div>
            {dinner.map(name =>
              <div className='cartItem'>
                <h6>{name}</h6>
                <button onClick={() => removeItem(name)}>Remove {name} Item</button>
              </div>
            )}
          </div>
          <div>
            <h5>Total Prep Minutes: <PrepTime /> </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
