import { trackBtnEvent } from "@/lib/mixpanel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginLayout({ children }) {
  const session = await getServerSession();
  if (session) {
    trackBtnEvent("Dashboard");
    redirect("/dashboard");
  }
  return <>{children}</>;
}
