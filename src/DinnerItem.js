
export default function DinnerItem({ data, setDinner, dinner }) {
    const { name, calories, status, category, prepTime, image } = data;

    const handleClick = event => {
        const foodName = event.target.value;
        setDinner([...dinner, foodName]);
    }

    return (
    <div className="foodBox">
        <div>
        <img src={image} className="boxImage" />
        <h3>{name}</h3>
        </div>
        <div>
        <p>Calories: {calories}</p>
        <p>Status: {status}</p>
        <p>Food Category: {category}</p>
        <p>Prep Time: {prepTime}</p>
        </div>
        <button onClick={handleClick} value={name}>Add To Dinner Recipe</button>
    </div>)
};