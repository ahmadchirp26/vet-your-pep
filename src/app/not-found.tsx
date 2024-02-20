import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Go Home</Link>
      </p>
    </div>
  );
}
