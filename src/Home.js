import { useAuthenticator } from "@aws-amplify/ui-react";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
