import { FormEvent, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import { register, login } from "../../utils/requests/auth";
import { useAuthStore } from "../../store/authStore";
import { TokenModel } from "../../utils/types/model/TokenModel";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const setIsAuth = useAuthStore((state) => state.updateAuth);

  const registration = () => {
    register({ username, password })
      .then(() => {
        signin();
      })
      .catch((error) => {
        if (error instanceof Error) {
          setFetchError(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signin = () => {
    login({ username, password })
      .then((res: TokenModel) => {
        setIsAuth(true);
        localStorage.setItem("jwt", res.access_token);
        navigate("/dashboard");
        setUsername("");
        setPassword("");
      })
      .catch((error) => {
        if (error instanceof Error) {
          setFetchError(error.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setFetchError("");
    setIsLoading(true);
    if (location.pathname.includes("log-in")) {
      signin();
    } else {
      registration();
    }
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="flex flex-col items-center gap-2 bg-white max-w-lg rounded-xl p-4"
    >
      <Input
        type="text"
        name="username"
        placeholder="username"
        minLength={2}
        value={username}
        isValidateError={isUsernameError}
        onBlur={(e) => {
          if (e.currentTarget.value.trim().length < 2) {
            setIsUsernameError(true);
          }
        }}
        onFocus={() => setIsUsernameError(false)}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <Input
        type="password"
        name="password"
        minLength={6}
        placeholder="password"
        onFocus={() => setIsPasswordError(false)}
        isValidateError={isPasswordError}
        value={password}
        onBlur={(e) => {
          if (e.currentTarget.value.trim().length < 2) {
            setIsPasswordError(true);
          }
        }}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      {fetchError && <p className="text-red-600">{fetchError}</p>}
      {isLoading && <p className="text-black">Loading...</p>}
      <Button type="submit" disabled={isPasswordError && isUsernameError}>
        <span>submit</span>
      </Button>
    </form>
  );
};

export default AuthForm;
