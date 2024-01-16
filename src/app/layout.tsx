import ReactQueryProvider from "@/core/hoc/ReactQueryProvider";
import { Toaster } from "@/core/ui/toaster";
import { AuthSessionProvider } from "@/lib/Authentication/context/AuthSessionContext";
import AuthRedirection from "@/lib/Authentication/hoc/AuthRedirection";
import "@/styles/globals.css";

export const metadata = {
  title: "Vet Your Pep",
  description: "VET YOUR PEP",
  icons: [{ rel: "icon", url: "/assets/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="min-h-screen layout-gradient"
      >
        <ReactQueryProvider>
          <AuthSessionProvider>
            <AuthRedirection>
              {children}
              <Toaster />
            </AuthRedirection>
          </AuthSessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
