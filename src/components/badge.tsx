import { mergeClasses, MergeClassesType } from '@/utils';
import { Component, JSX, mergeProps, splitProps } from 'solid-js';
import { variants } from './button';

type BadgeProps = JSX.ButtonHTMLAttributes<HTMLSpanElement> & {
  class?: MergeClassesType;
  loading?: boolean;
  variant?: 'default' | 'danger';
};

const Badge: Component<BadgeProps> = (props) => {
  const mergedProps = mergeProps(
    {
      type: 'button',
      class: '',
      variant: 'default',
    },
    props,
  );

  const [internal, external] = splitProps(mergedProps, ['class', 'variant']);

  return (
    <span
      {...external}
      class={mergeClasses([
        'uppercase px-1 rounded leading-relaxed text-xs font-medium',
        internal.class,
        variants[internal.variant],
      ])}
    >
      {props.children}
    </span>
  );
};

export default Badge;
