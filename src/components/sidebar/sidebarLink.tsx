import { Component, JSX, splitProps, Show, Switch, Match } from 'solid-js';
import { NavLink, NavLinkProps } from 'solid-app-router';
import { mergeClasses } from '@/utils';
import Badge from '../badge';

interface SidebarBadgeConfig {
  label: string;
  variant?: 'default' | 'danger';
}

interface SidebarLinkProps extends NavLinkProps {
  label: string | JSX.Element;
  icon?: JSX.Element;
  badge?: SidebarBadgeConfig;
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

        <Show when={internal.badge}>
          <Badge variant={internal.badge.variant} class="ml-auto">
            {internal.badge.label}
          </Badge>
        </Show>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
