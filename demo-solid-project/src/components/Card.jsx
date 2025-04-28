const Card = (props) => {
    return (
        <div class="bg-gray-400 p-4 text-center rounded-md shadow-2xs">
            <h2 class="text-2xl">{props.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sapiente?</p>

            <button class="btn">Click me</button>
        </div>
    );
}

export default Card;