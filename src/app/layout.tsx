import { getSessionServerAction } from "@/lib/Authentication/server-actions/getSessionServerAction";
import ReactQueryProvider from "@/components/hoc/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { AuthSessionProvider } from "@/lib/Authentication/context/AuthSessionContext";
import { type PropsWithChildren } from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Vet Your Pep",
  description: "VET YOUR PEP",
  icons: [{ rel: "icon", url: "/assets/logo.svg" }],
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getSessionServerAction();
  return (
    <html lang="en">
      <body className="min-h-screen max-w-screen-2xl mx-auto w-full layout-gradient">
        <ReactQueryProvider>
          <AuthSessionProvider
            data={session}
            status={session === null ? "unauthenticated" : "authenticated"}
          >
            {children}
            <Toaster />
          </AuthSessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
