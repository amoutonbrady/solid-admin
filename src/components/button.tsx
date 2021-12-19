import { Component, JSX, mergeProps, Show, splitProps } from 'solid-js';
import { mergeClasses, MergeClassesType } from '@/utils';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  class?: MergeClassesType;
  loading?: boolean;
};

const Button: Component<ButtonProps> = (props) => {
  const mergedProps = mergeProps(
    {
      type: 'button',
      class: '',
    },
    props,
  );
  const [internal, external] = splitProps(mergedProps, ['class', 'disabled']);

  return (
    <button
      {...external}
      disabled={props.loading || internal.disabled}
      class={mergeClasses([
        'disabled:bg-opacity-60 disabled:text-opacity-90 disabled:cursor-wait px-3 py-2 rounded flex items-center space-x-3 bg-blue-800 text-blue-50 text-sm uppercase tracking-wide font-semibold',
        internal.class,
      ])}
    >
      <span>{props.children}</span>

      <Show when={props.loading}>
        <svg class="animate-spin h-5 w-5 text-current fill-[none]" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </Show>
    </button>
  );
};

export default Button;
