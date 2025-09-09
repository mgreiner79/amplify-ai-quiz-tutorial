import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <h1>App</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
