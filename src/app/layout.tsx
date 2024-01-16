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
      <body suppressHydrationWarning={true} className="layout-gradient">
        {children}
      </body>
    </html>
  );
}
