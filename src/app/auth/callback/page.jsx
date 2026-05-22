"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchJWT } from "@/lib/jwt";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    fetchJWT()
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        router.push("/login");
      });
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-lg">Completing sign in...</p>
    </div>
  );
}
