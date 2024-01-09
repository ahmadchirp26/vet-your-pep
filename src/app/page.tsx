import { Button } from "@/core/ui/button";
import DashboardLayout from "./(dashboard)/layout";

export default function HomePage() {
  console.log("Hello World");
  return (
    <>
      <DashboardLayout>
        <div className="text-greensharp">Hello World !!</div>

        <Button>Testing</Button>
      </DashboardLayout>
    </>
  );
}
