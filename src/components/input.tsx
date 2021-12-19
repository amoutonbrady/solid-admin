import { Component, JSX, splitProps, mergeProps } from 'solid-js';
import { mergeClasses, MergeClassesType, randomId } from '@/utils';

type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  loading?: boolean;
  class?: MergeClassesType;
};

const Input: Component<InputProps> = (props) => {
  const mergedProps = mergeProps(
    {
      id: randomId(),
      type: 'text',
      class: '',
    },
    props,
  );

  const [internal, external] = splitProps(mergedProps, ['label', 'class', 'loading', 'disabled']);

  return (
    <div class={mergeClasses(['flex flex-col space-y-1', internal.class])}>
      <label
        for="password"
        class={mergeClasses([
          'mr-auto cursor-pointer uppercase text-sm tracking-wide font-semibold text-gray-700',
        ])}
      >
        {internal.label}
      </label>

      <div
        class="relative"
        classList={{
          'after:top-0 after:left-0 after:w-full after:h-full after:absolute after:animate-pulse after:bg-gray-300 after:z-20 after:rounded':
            internal.loading,
        }}
      >
        <input
          {...external}
          disabled={internal.loading || internal.disabled}
          class={mergeClasses([
            'rounded border relative z-10 px-3 py-1.5 border-gray-700 w-full',
            { 'opacity-0': internal.loading },
          ])}
        />
      </div>
    </div>
  );
};

export default Input;
