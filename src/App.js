import { AuthProvider } from "./context";
import MainRouter from "./router";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
