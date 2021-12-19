import { Component, JSX, Show } from 'solid-js';

interface SidebarProps {
  header?: string | JSX.Element;
  footer?: string | JSX.Element;
}

const Sidebar: Component<SidebarProps> = (props) => {
  return (
    <aside class="text-gray-50 bg-gray-900 h-screen max-w-[256px] flex-1 flex flex-col">
      <Show when={props.header}>
        <header class="h-16 flex items-center justify-center">{props.header}</header>
      </Show>

      <nav class="flex-1 overflow-auto bg-gray-800">
        <ul>{props.children}</ul>
      </nav>

      <Show when={props.footer}>
        <footer class="h-14 flex items-center justify-center">{props.footer}</footer>
      </Show>
    </aside>
  );
};

export default Sidebar;
