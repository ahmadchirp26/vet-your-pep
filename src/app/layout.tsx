import ReactQueryProvider from "@/components/hoc/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
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
        className="min-h-screen max-w-screen-2xl mx-auto w-full layout-gradient"
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
