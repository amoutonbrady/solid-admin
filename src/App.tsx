import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <>
      <header class="bg-gray-100 flex items-center justify-center col-start-1 col-span-2 row-start-1">
        Header
      </header>

      <aside class="bg-gray-100 flex items-center justify-center col-start-1 row-start-2">
        Sidebar
      </aside>

      <main class="flex items-center justify-center col-start-2 row-start-2 bg-gray-50">
        Content
      </main>

      <footer class="flex items-center justify-center bg-gray-100 col-start-1 col-span-2 row-start-3">
        Footer
      </footer>
    </>
  );
};

export default App;
