import { version } from '../package.json';

import { Component, Show } from 'solid-js';
import { Navigate, Outlet, Route, Routes } from 'solid-app-router';
import { Icon } from 'solid-heroicons';
import { bookmark } from 'solid-heroicons/outline';

import { useAuth } from '@/stores/auth';
import {
  Sidebar,
  SidebarLink,
  SidebarCategory,
  SidebarDropdown,
  Button,
  Modal,
} from '@/components';

import LoginPage from '@/pages/login';
import HomePage from '@/pages/home';

const Layout: Component = (props) => {
  const [_, actions] = useAuth();

  return (
    <div class="flex">
      <Sidebar header="Solid Admin" footer={<span class="text-sm text-gray-300">v{version}</span>}>
        <SidebarLink
          label="Link with icon"
          href="/"
          icon={<Icon path={bookmark} class="h-6" />}
          badge={{ label: 'NEW' }}
        />
        <SidebarLink
          label="Link with no icon"
          href="/"
          badge={{ label: 'PRO', variant: 'danger' }}
        />

        <SidebarCategory label="Sidebar title">
          <SidebarLink label="Buttons" href="/" icon={<Icon path={bookmark} class="h-6" />} />
          <SidebarLink label="Inputs" href="/" icon={<Icon path={bookmark} class="h-6" />} />

          <SidebarDropdown label="Components" icon={<Icon path={bookmark} class="h-6" />}>
            <SidebarLink label="And another one" href="/" />
            <SidebarLink label="And another one" href="/" />
          </SidebarDropdown>
        </SidebarCategory>

        <SidebarCategory label="Sidebar title 2">
          <SidebarLink label="Buttons" href="/" icon={<Icon path={bookmark} class="h-6" />} />
          <SidebarLink label="Inputs" href="/" icon={<Icon path={bookmark} class="h-6" />} />
        </SidebarCategory>
      </Sidebar>

      <div class="h-full flex flex-col flex-1">
        <header class="h-16 bg-white shadow flex px-4 items-center">
          <Button variant="danger" onClick={actions.logout} class="ml-auto">
            Log Out
          </Button>
        </header>
        <main class="flex-1 overflow-auto p-4">{props.children}</main>
      </div>
    </div>
  );
};

const Protected: Component = () => {
  const [auth] = useAuth();

  return (
    <Show when={auth.isLoggedIn} fallback={<Navigate href="/login" />}>
      <Layout>
        <Outlet />
      </Layout>
    </Show>
  );
};

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="" component={Protected}>
          <Route path="/" component={HomePage} />
        </Route>

        <Route path="/login" component={LoginPage} />
      </Routes>
    </>
  );
};

export default App;
