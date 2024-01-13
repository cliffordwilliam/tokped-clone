// RENDER URLSearchParams "error" IN CLIENT
"use client";

import { useSearchParams } from "next/navigation";

const ErrorDialog = () => {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  return <>{errorMessage && <p>{errorMessage}</p>}</>;
};

export default ErrorDialog;
