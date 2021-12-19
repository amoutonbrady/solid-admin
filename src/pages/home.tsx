import { Component } from 'solid-js';
import { Pane } from '@/components';

const HomePage: Component = () => {
  return (
    <div class="grid gap-4 w-full">
      <Pane header="A pane">Hello world!</Pane>
      <Pane header="A pane that can be collapsed" collapsible open>
        Hello world!
      </Pane>
    </div>
  );
};

export default HomePage;
