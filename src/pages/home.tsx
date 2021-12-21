import { Component, createSignal } from 'solid-js';
import { Button, Modal, Pane } from '@/components';

const HomePage: Component = () => {
  const [isModalOpen, setModalOpen] = createSignal(false);

  return (
    <div class="grid gap-4 w-full">
      <Pane header="A pane">Hello world!</Pane>
      <Pane header="A pane that can be collapsed" collapsible>
        <Button onClick={[setModalOpen, true]}>Open modal!</Button>
      </Pane>

      <Modal
        open={isModalOpen()}
        onClose={() => setModalOpen(false)}
        title="Hello world!"
        actions={
          <>
            <Button isQuiet onClick={() => setModalOpen(false)}>
              I'd rather not
            </Button>
            <Button onClick={() => setModalOpen(false)}>Let's go!</Button>
          </>
        }
        isClosable
      >
        <section class="space-y-2">
          <p>
            This is the greatest case of false advertising I've seen since I sued the movie "The
            Never Ending Story." When I held that gun in my hand, I felt a surge of power…like God
            must feel when he's holding a gun.
          </p>
          <p>
            How is education supposed to make me feel smarter? Besides, every time I learn something
            new, it pushes some old stuff out of my brain. Remember when I took that home winemaking
            course, and I forgot how to drive? Look out, Itchy! He's Irish!
          </p>
          <p>
            Oh, loneliness and cheeseburgers are a dangerous mix. Well, he's kind of had it in for
            me ever since I accidentally ran over his dog. Actually, replace "accidentally" with
            "repeatedly" and replace "dog" with "son."
          </p>
          <p>
            Kids, we need to talk for a moment about Krusty Brand Chew Goo Gum Like Substance. We
            all knew it contained spider eggs, but the hantavirus? That came out of left field. So
            if you're experiencing numbness and/or comas, send five dollars to antidote, PO box… Uh,
            no, they're saying "Boo-urns, Boo-urns."
          </p>
        </section>
      </Modal>
    </div>
  );
};

export default HomePage;
