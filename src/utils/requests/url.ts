import { BASE, shorterUrl } from "../configs/urlConfig";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
};

export async function getLinks(params: string) {
  const res = await fetch(`${BASE}${shorterUrl.STATISTICS}?${params}`, {
    headers,
  });

  const count = res.headers.get("x-total-count");

  if (count) {
    localStorage.setItem("totalCount", count.toString());
  }

  return res.json();
}

export async function shortLink(link: string) {
  const res = await fetch(`${BASE}${shorterUrl.SQUEEZE}?link=${link}`, {
    method: "POST",
    headers,
  });

  return res.json();
}
