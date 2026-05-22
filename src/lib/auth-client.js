import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: `${API_KEY}`,
  fetchOptions: {
    credentials: "include",
  },
});