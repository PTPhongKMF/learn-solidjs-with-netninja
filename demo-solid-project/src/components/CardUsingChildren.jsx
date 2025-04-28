const CardUsingChildren = (props) => {
  return (
    <div class="bg-gray-400 p-4 text-center rounded-md shadow-2xs">
      {props.children}
    </div>
  );
}

export default CardUsingChildren;