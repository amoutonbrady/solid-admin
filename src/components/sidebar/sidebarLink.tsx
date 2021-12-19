import { Component, JSX, splitProps, Show } from 'solid-js';
import { NavLink, NavLinkProps } from 'solid-app-router';
import { mergeClasses } from '@/utils';

interface SidebarLinkProps extends NavLinkProps {
  label: string | JSX.Element;
  icon?: JSX.Element;
  badge?: string | JSX.Element;
}

const SidebarLink: Component<SidebarLinkProps> = (props) => {
  const [internal, external] = splitProps(props, ['label', 'icon', 'badge']);

  return (
    <li>
      <NavLink
        {...external}
        class={mergeClasses([
          'flex items-center py-3 px-4 text-gray-400 hover:text-gray-100 hover:bg-white/5',
        ])}
      >
        <Show when={internal?.icon}>{internal.icon}</Show>

        <Show
          when={internal.label instanceof Element}
          fallback={
            <span class={mergeClasses([internal?.icon ? 'ml-4' : 'ml-10'])}>{internal.label}</span>
          }
        >
          {internal.label}
        </Show>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
