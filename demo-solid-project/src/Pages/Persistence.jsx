import { createSignal } from 'solid-js';

const [text, setText] = createSignal("");

const Persistence = () => {

  return (
    <div>
      <textarea class="min-h-20 w-full border-2 rounded-md p-2"
        onInput={(e) => setText(e.currentTarget.value)}
        value={text()} />
      <label class="text-2xl mb-1">You wrote:</label>
      <p>{text()}</p>
    </div>

  );
}

export default Persistence;