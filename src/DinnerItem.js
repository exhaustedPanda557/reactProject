//import ".styles/DinnerItem.css";

export default function DinnerItem({data, setDinner, dinner}) {
    const {name, calories, status, category} = data;

    const handleClick = event => {
        const foodName = event.target.value;
        setDinner([...dinner, foodName]);
    }

    return (<button onClick={handleClick} value={name}>{name}
    <p>Add To Dinner Recipe</p>
    </button>)
};