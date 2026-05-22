const TOKEN_KEY = "mediqueue_token";

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getUser() {
  const token = getToken();
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { id: payload.id, email: payload.email, name: payload.name, image: payload.image };
  } catch {
    return null;
  }
}

export async function fetchJWT() {
  const res = await fetch(`${process.env.API_KEY}/api/jwt`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to get token");
  const data = await res.json();
  setToken(data.token);
  return data.user;
}

export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}
