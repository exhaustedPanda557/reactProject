
export default function DinnerItem({ data, setDinner, dinner }) {
    const { name, calories, status, category, image } = data;

    const handleClick = event => {
        const foodName = event.target.value;
        setDinner([...dinner, foodName]);
    }

    return (<div className="foodBox"><img src={image} className="boxImage"/><button onClick={handleClick} value={name}>Add To Dinner Recipe
    
    </button></div>)
};