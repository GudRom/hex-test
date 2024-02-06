import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Button from "../../components/Button";

const MainPage = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();
  
  return (
    <>
      <h1 className="my-10 text-center text-3xl">
        Здесь вы найдете список коротких ссылок
      </h1>
      {isAuth ? (
        <Button className={"mx-auto"} onClick={() => navigate("/dashboard")}>
          К списку
        </Button>
      ) : (
        <Button className={"mx-auto"} onClick={() => navigate("/auth/sign-up")}>
          Зарегистрироваться
        </Button>
      )}
    </>
  );
};

export default MainPage;
