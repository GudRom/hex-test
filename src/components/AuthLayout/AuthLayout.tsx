import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-dvh gap-4">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
