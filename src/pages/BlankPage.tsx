import BlankNavbar from "@/components/layout/BlankNavbar";
import BlankHero from "@/components/sections/BlankHero";
import BlankSteps from "@/components/sections/BlankSteps";

const BlankPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlankNavbar />
      <BlankHero />
      <BlankSteps />
    </div>
  );
};

export default BlankPage;
