import { Component, JSX, mergeProps, splitProps, PropsWithChildren } from 'solid-js';

type FormProps<Data = Record<string, any>> = JSX.FormHTMLAttributes<HTMLFormElement> & {
  onFormSubmit?: (data: Data, event?: Event) => unknown;
  prevent?: boolean;
};

function Form<Data extends Record<string, any>>(props: PropsWithChildren<FormProps<Data>>) {
  const mergedProps = mergeProps({ prevent: true }, props);
  const [internal, external] = splitProps(mergedProps, ['onFormSubmit', 'prevent']);

  const onSubmit: JSX.EventHandlerUnion<HTMLFormElement, Event> = (event) => {
    if (internal.onFormSubmit) {
      const form = new FormData(event.currentTarget);
      const data = Object.fromEntries(form.entries()) as Data;

      internal.onFormSubmit(data, event);
    }

    if (internal.prevent) {
      event.preventDefault();
    }
  };

  return (
    <form {...external} onSubmit={onSubmit}>
      {props.children}
    </form>
  );
}

export default Form;
