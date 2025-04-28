import { createResource, createSignal, For, Show } from "solid-js";
import Card from "../components/Card";
import CardUsingChildren from "../components/CardUsingChildren";
import CardUsingFullProps from "../components/CardUsingFullProps";

export async function fetchBlogs() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:8000/blogs");

  return res.json();
}


const Home = () => {
  const [blogs] = createResource(fetchBlogs);

  return (
    <>
      <Show when={blogs()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-3 gap-10 my-4">
          <Card title="Title 1" />
          <Card title="Title 2" />
          <Card title="Title 3" />

          <CardUsingChildren>
            <h2 class="text-2xl">Title using chilren 1</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sapiente?</p>

            <button class="btn">Click me</button>
          </CardUsingChildren>
          <CardUsingChildren>
            <h2 class="text-2xl">Title using chilren 2</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, sapiente?</p>

            <button class="btn">Click me</button>
          </CardUsingChildren>

          <For each={blogs()}>
            {(blog) => (
              <CardUsingFullProps blog={blog} />
            )}
          </For>
        </div>
      </Show>
    </>
  );
}

export default Home;