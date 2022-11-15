// I used the Development Gear Up 2022 Slides for help https://docs.google.com/presentation/d/1ASwznypedampMtpiC4rjqE2CZVu9UNTSThBdshUNYvM/edit#slide=id.g18d33a59644_9_125
import logo from './logo.svg';
import './App.css';
import ".styles/DinnerItem.css";


function App() {
  const [type, setType] = useState("All"); 
  const [dinner, setDinner] = userState({});
  const productList = [
    {name: "Tomato", calories: 22, status: "expiring soon", category: "fruit/vegetable"},
    {name: "Zucchini", calories: 33, status: "new", category: "fruit/vegetable"},
    {name: "Broccoli", calories: 50, status: "expiring soon", category: "fruit/vegetable"},
    {name: "Granny Smith Apple", calories: 54, status: "new", category: "fruit/vegetable"},
    {name: "Chicken", calories: 335, status: "new", category: "meat"},
    {name: "Salmon", calories: 412, status: "expiring soon", category: "meat"},
    {name: "Focaccia", calories: 142, status: "expiring soon", category: "grain"},
    {name: "Pasta", calories: 131, status: "new", category: "grain"},
    {name: "White Rice", calories: 206, status: "new", category: "grain"},
    {name: "Hummus", calories: 25, status: "expiring soon", category: "sauce"},
    {name: "Chipotle Mayo", calories: 35, status: "new", category: "sauce"},
    {name: "Tomato Sauce", calories: 70, status: "expiring soon", category: "sauce"}
  ];

  const filteredFoodArray = array.filter((item) => {
    return item.status = "expiring soon";
  })

  const sortedArray = array.sort((a,b) => {
    return a.calories - b.calories;
  })

  const keyArray = array.map((item) => {
    return item.name;
  })

  function addToDinner(item){
    const newDinner = {...dinner};
    newDinner[item] = (newDinner[item] || 0) + 1;
    setDinner(newDinner);
  }

  function addToList(item) {
    const newList = [... list, item];
    StyleSheetList(newList);
  }

  <Nav.Item><Nav.Link eventKey="All" onSelect={selectFilterType}>All</Nav.Link></Nav.Item>
  
  const selectFilterType = eventKey => {
    setType(eventKey);
  }
  const matchesFilterType = item => {
    if(type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }
  
  const filteredData = bakeryData.filter(myFitlerFunction)
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {filteredList.map(item => <BakeryItem item = {item}></BakeryItem>)}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
