import { Component, createEffect, createSignal } from 'solid-js';
import { Input, Button, Form } from '@/components';
import { useAuth } from '@/stores/auth';
import { useNavigate } from 'solid-app-router';

interface LoginForm {
  login: string;
  password: string;
}

const LoginPage: Component = () => {
  const navigate = useNavigate();
  const [auth, actions] = useAuth();
  const [loading, setLoading] = createSignal(false);

  createEffect(() => {
    if (auth.isLoggedIn) {
      navigate('/', { replace: true });
    }
  });

  function login(form: LoginForm) {
    setLoading(true);

    setTimeout(() => {
      actions.login(form.login, form.password);
      setLoading(false);
    }, 3000);
  }

  return (
    <main class="flex flex-1 items-center justify-center">
      <Form<LoginForm> onFormSubmit={login} class="p-10 shadow-sm rounded bg-white flex flex-col">
        <h1 class="text-3xl">Connexion</h1>
        <p class="text-gray-700 mt-2">Connectez-vous avec les identifiants fournis par email.</p>

        <fieldset class="flex flex-col space-y-4 mt-4">
          <Input name="login" loading={loading()} label="Nom d'utilisateur" placeholder="..." />
          <Input
            name="password"
            loading={loading()}
            label="Mot de passe"
            type="password"
            placeholder="..."
          />
        </fieldset>

        <Button type="submit" loading={loading()} class="ml-auto mt-6">
          Se connecter
        </Button>
      </Form>
    </main>
  );
};

export default LoginPage;
