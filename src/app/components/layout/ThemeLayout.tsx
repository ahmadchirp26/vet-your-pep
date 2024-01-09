export default function ThemeLayout({
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
