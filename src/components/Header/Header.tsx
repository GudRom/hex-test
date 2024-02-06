import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Button";
import { useAuthStore } from "../../store/authStore";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.updateAuth);

  const handleLog = () => {
    if (isAuth) {
      setIsAuth(false);
      localStorage.clear();
    } else {
      navigate("/auth/log-in");
      setIsAuth(true);
    }
  };
  return (
    <header className="flex flex-initial justify-between items-center bg-sky-800 p-4">
      <NavLink to="/">Link Simplifier</NavLink>
      <Button variant="text" onClick={handleLog}>
        <span className="underline">{isAuth ? "Выйти" : "Войти"}</span>
      </Button>
    </header>
  );
};

export default Header;
