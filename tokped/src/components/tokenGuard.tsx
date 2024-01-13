import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function TokenGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("token");
  if (!token || token.value.length <= 0) {
    redirect("/login");
  }
  return <>{children}</>;
}
