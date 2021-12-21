import { Portal } from 'solid-js/web';
import { Component, Show } from 'solid-js';

const Backdrop: Component<{ open: boolean; onClose?: () => unknown }> = (props) => {
  const mount = document.getElementById('backdrop');

  return (
    <Portal mount={mount}>
      <Show when={props.open}>
        <div
          class="fixed inset-0 bg-gray-900 opacity-80 cursor-crosshair"
          onClick={props.onClose}
        ></div>
      </Show>
    </Portal>
  );
};

export default Backdrop;
