import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-auto mx-auto my-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
