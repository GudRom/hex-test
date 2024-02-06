import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import Table from "../../components/Table";

const DashboardPage = () => {
  const isAuth = useAuthStore((state) => state.isAuth);

  return isAuth ? (
    <>
      <h1 className="my-10 text-center text-3xl">
        Статистика по существующим коротким ссылкам
      </h1>
      <Table />
    </>
  ) : (
    <Navigate to={"/"} />
  );
};

export default DashboardPage;
