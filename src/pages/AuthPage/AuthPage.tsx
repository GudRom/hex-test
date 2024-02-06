import { NavLink } from "react-router-dom";
import AuthForm from "../../components/AuthForm";

const AuthPage = () => {
  return (
    <>
      <h1 className="text-3xl">
        {location.pathname.includes("log-in") ? "Вход" : "Регистрация"}
      </h1>
      <AuthForm />
      {location.pathname.includes("log-in") ? (
        <p>
          Вы не зарегистрированы?{" "}
          <NavLink to="/auth/sign-up">Зарегистрироваться</NavLink>
        </p>
      ) : (
        <p>
          Вы уже зарегистрированы? <NavLink to="/auth/log-in">Войти</NavLink>
        </p>
      )}
    </>
  );
};

export default AuthPage;
