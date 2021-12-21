import { Portal } from 'solid-js/web';
import { Component, createEffect, createSignal, JSX, Show } from 'solid-js';
import { Backdrop } from '.';
import { Icon } from 'solid-heroicons';
import { x } from 'solid-heroicons/outline';

const Modal: Component<{
  open: boolean;
  onClose?: () => unknown;
  title?: string;
  actions?: JSX.Element;
  isClosable?: boolean;
}> = (props) => {
  const mount = document.getElementById('modal');
  const [open, setOpen] = createSignal(false);

  createEffect(() => setOpen(props.open));
  createEffect(() => {
    document.body.style.overflow = open() ? 'hidden' : '';
  });

  return (
    <Portal mount={mount}>
      <Show when={open()}>
        <div class="fixed top-1/2 left-1/2 w-1/3 p-4 rounded bg-white shadow -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4">
          <Show when={props.title}>
            <header class="flex items-center justify-between text-gray-900">
              <h2 class="font-semibold text-lg">{props.title}</h2>

              <Show when={props.isClosable}>
                <button
                  type="button"
                  onClick={props.onClose}
                  class="h-6 w-6 rounded bg-transparent hover:bg-black/5 flex items-center justify-center"
                >
                  <span class="sr-only">Close the modal</span>
                  <Icon path={x} class="h-full w-auto" />
                </button>
              </Show>
            </header>
          </Show>

          <Show when={props.children}>
            <main class="text-gray-700">{props.children}</main>
          </Show>

          <Show when={props.actions}>
            <footer class="flex items-center justify-end space-x-2">{props.actions}</footer>
          </Show>
        </div>

        <Backdrop open={open()} onClose={props.onClose} />
      </Show>
    </Portal>
  );
};

export default Modal;
