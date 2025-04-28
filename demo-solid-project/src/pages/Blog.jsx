import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";

async function fetchBlog(id) {
  const res = await fetch(`http://localhost:8000/blogs/${id}`);

  return res.json();
}

const Blog = () => {
  const params = useParams();

    const [blog] = createResource(params.id, fetchBlog);

  return ( 
    <>
      <h1 class="text-4xl flex justify-center mb-4">Product detail - {params.id}</h1>

      <Show when={blog()} fallback={<p>Loading...</p>}>
        <h2 class="text-2xl flex justify-center mb-2">{blog().title}</h2>
        <p>{blog().description}</p>
      </Show>
    </>
   );
}
 
export default Blog;