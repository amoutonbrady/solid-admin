import { Icon } from 'solid-heroicons';
import { Component, JSX, Show } from 'solid-js';
import { chevronDown } from 'solid-heroicons/outline';

import { mergeClasses } from '@/utils';

interface SidebarDropdownProps {
  label: string | JSX.Element;
  icon: JSX.Element;
}

const SidebarDropdown: Component<SidebarDropdownProps> = (props) => {
  return (
    <li>
      <details class="group">
        <summary class="flex items-center py-3 px-4 text-gray-400 hover:text-gray-100 hover:bg-white/5 group-open:bg-gray-700 cursor-pointer">
          <Show when={props?.icon}>{props.icon}</Show>

          <Show
            when={props.label instanceof Element}
            fallback={
              <span class={mergeClasses([props?.icon ? 'ml-4' : 'ml-10'])}>{props.label}</span>
            }
          >
            {props.label}
          </Show>

          <Icon path={chevronDown} class="h-4 ml-auto" />
        </summary>

        <ul class="bg-gray-700">{props.children}</ul>
      </details>
    </li>
  );
};

export default SidebarDropdown;
