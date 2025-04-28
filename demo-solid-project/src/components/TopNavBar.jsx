import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const TopNavBar = () => {

  return (
    <nav class="bg-blue-500 p-4">
      <div class="flex justify-between items-center">
        <div class="space-x-4">
          <A href="/" class="text-white hover:text-gray-200">Home</A>
          <A href="/about" class="text-white hover:text-gray-200">About</A>
          <A href="/persistence" class="text-white hover:text-gray-200">Persistence/Global signal example</A>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;