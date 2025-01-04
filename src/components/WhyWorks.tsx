import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, SwatchBook, LandPlot } from "lucide-react";
interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Real-World Assets Meet Blockchain Innovation",
    description:
      "Unlike many speculative crypto projects, your investment is tied to tangible, revenue-generating businesses",
    icon: <Lightbulb size={40} />,
  },
  {
    title: "Shared Success",
    description:
      " Our platform ensures that token holders share in both decision-making and the financial success of the companies we acquire.",
    icon: <SwatchBook size={40} />,
  },
  {
    title: "Accessible to All",
    description:
      "With our blockchain-based system, anyone can participate in corporate acquisitions, breaking down barriers to traditional investment opportunities.",
    icon: <LandPlot size={40} />,
  },
];
export const WhyWorks = () => {
  return (
    <section id="WhyWorks" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why This Model{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works?
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="w-12 h-12 mb-4 mx-auto text-green-400">
                {icon}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
