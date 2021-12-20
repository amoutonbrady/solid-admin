import { Component, JSX, Show, mergeProps, splitProps } from 'solid-js';
import { mergeClasses, MergeClassesType, randomId } from '@/utils';
import { Dynamic } from 'solid-js/web';
import { Icon } from 'solid-heroicons';
import { chevronDown } from 'solid-heroicons/outline';

const Pane: Component<{
  header?: string | JSX.Element;
  footer?: string | JSX.Element;
  class?: MergeClassesType;
  collapsible?: boolean;
  open?: boolean;
}> = (props) => {
  const mergedProps = mergeProps(
    {
      id: randomId(),
      type: 'text',
      class: '',
    },
    props,
  );

  const [internal, external] = splitProps(mergedProps, ['class', 'collapsible']);

  return (
    <Dynamic
      component={internal.collapsible ? 'details' : 'section'}
      {...external}
      class={mergeClasses([
        'shadow-sm rounded bg-white max-w-5xl mx-auto border w-full',
        internal.class,
      ])}
    >
      <Show when={props.header}>
        <Dynamic
          component={internal.collapsible ? 'summary' : 'header'}
          class="bg-gray-50 border-b py-2 px-4 flex items-center justify-between"
          classList={{ 'cursor-pointer': internal.collapsible }}
        >
          <Show
            when={props.header instanceof Element}
            fallback={<span class="font-medium">{props.header}</span>}
          >
            {props.header}
          </Show>

          <Show when={internal.collapsible}>
            <Icon path={chevronDown} class="h-4 ml-auto" />
          </Show>
        </Dynamic>
      </Show>

      <main class="px-4 py-2">{props.children}</main>

      <Show when={props.footer}>
        <footer class="bg-gray-50 border-t py-2 px-4">{props.footer}</footer>
      </Show>
    </Dynamic>
  );
};

export default Pane;
