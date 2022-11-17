
export default function DinnerItem({ data, setDinner, dinner }) {
    const { name, calories, status, category, prepTime, image } = data;

    const handleClick = event => {
        const foodName = event.target.value;
        setDinner([...dinner, foodName]);
    }

    return (
    <div className="foodBox">
        <div className="itemOverview">
        <img src={image} className="boxImage" />
        <h3>{name}</h3>
        </div>
        <div>
        <p><span className='descriptionLabels'>Calories:</span> {calories}</p>
        <p><span className='descriptionLabels'>Status: </span> {status}</p>
        <p><span className='descriptionLabels'>Food Category: </span> {category}</p>
        <p><span className='descriptionLabels'>Prep Time: </span> {prepTime}</p>
        </div>
        <button onClick={handleClick} value={name}>Add To Dinner Recipe</button>
    </div>)
};