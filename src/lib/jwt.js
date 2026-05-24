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

  try {

    const token = getToken();

    if (!token) return null;

    // JWT format validation
    const parts = token.split(".");

    if (parts.length !== 3) {
      clearToken();
      return null;
    }

    const decoded = atob(parts[1]);

    const payload = JSON.parse(decoded);

    return {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      image: payload.image,
    };

  } catch (error) {

    console.error("Invalid Token:", error);

    clearToken();

    return null;
  }
}

export async function fetchJWT() {

  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/jwt`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {

      const text = await res.text();

      console.error("Non JSON Response:", text);

      throw new Error("Server returned HTML instead of JSON");
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Failed to get token");
    }

    if (!data.token) {
      throw new Error("Token missing");
    }

    setToken(data.token);

    return data.user;

  } catch (error) {

    console.error("JWT Fetch Error:", error);

    clearToken();

    throw error;
  }
}

export function authHeaders() {

  const token = getToken();

  return token
    ? { Authorization: `Bearer ${token}` }
    : {};
}