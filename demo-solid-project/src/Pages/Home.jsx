import { createSignal } from "solid-js";
import Card from "../components/Card";
import CardUsingChildren from "../components/CardUsingChildren";

const Home = () => {
  const [text, setText] = createSignal("");

  return (
    <>
      <textarea class="min-h-20 w-full border-2 rounded-md p-2" onInput={(e) => setText(e.currentTarget.value)} />
      <label class="text-2xl mb-1">You wrote:</label>
      <p>{ text() }</p>

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
      </div>
    </>
  );
}

export default Home;