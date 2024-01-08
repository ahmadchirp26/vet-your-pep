export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-full w-full layout-gradient">{children}</div>
    </>
  );
}
