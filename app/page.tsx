import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="link">Link</Button>
      <Input />

      <h1 className="text-2xl">Is this DM Sans?</h1>
    </div>
  );
};

export default Home;
