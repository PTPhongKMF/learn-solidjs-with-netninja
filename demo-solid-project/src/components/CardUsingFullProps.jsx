import { A } from "@solidjs/router";

const CardUsingFullProps = (props) => {
  return (
    <div class="bg-gray-400 p-4 text-center rounded-md shadow-2xs">
      <h2 class="text-2xl">{props.blog.title}</h2>
      <p>{props.blog.description}</p>

      <button class="btn"><A href={`/blog/${props.blog.id}`}>View</A></button>
    </div>
  );
}

export default CardUsingFullProps;