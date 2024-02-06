import { BASE, authUrl } from "../configs/urlConfig";
import { loginDto } from "../types/dto/loginDto";
import { registerDto } from "../types/dto/registerDto";

export async function login(params: loginDto) {
  const res = await fetch(
    `${BASE}${authUrl.LOGIN}`,
    {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}

export async function register(params: registerDto) {
  const res = await fetch(`${BASE}${authUrl.REGISTER}?username=${params.username}&password=${params.password}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
}
