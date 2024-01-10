import { Button } from "@/core/ui/button";
import DashboardLayout from "./(dashboard)/layout";

export default function HomePage() {
  console.log("Hello World");
  return (
    <>
      <DashboardLayout>
        <Button>Testing</Button>
      </DashboardLayout>
    </>
  );
}
