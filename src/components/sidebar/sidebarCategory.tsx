import { Component, JSX } from 'solid-js';

interface SidebarCategoryProps {
  label: string | JSX.Element;
}

const SidebarCategory: Component<SidebarCategoryProps> = (props) => {
  return (
    <li class="mt-4">
      <p class="font-semibold text-xs uppercase tracking-wide px-4 py-3">{props.label}</p>

      <ul>{props.children}</ul>
    </li>
  );
};

export default SidebarCategory;
