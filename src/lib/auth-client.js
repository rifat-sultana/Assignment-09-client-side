import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
<<<<<<< HEAD
  baseURL: "http://localhost:5000",
  fetchOptions: {
    credentials: "include",
  },
});
=======
<<<<<<< HEAD
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  fetchOptions: {
    credentials: "include",
  },
});
=======
  baseURL: "http://localhost:5000",
  fetchOptions: {
    credentials: "include",
  },
});
>>>>>>> 94b62c9 (READme.MD file completed)
>>>>>>> a751740 (READme.MD file completed)
