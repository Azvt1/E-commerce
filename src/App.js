import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./auth/authWrapper";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthWrapper />
      </BrowserRouter>
    </div>
  );
}
