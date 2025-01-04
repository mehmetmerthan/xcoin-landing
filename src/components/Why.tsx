import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield } from "lucide-react";
interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Lower Failure Rates",
    description:
      "Unlike startups, where nearly 90% fail within the first five years, acquiring established companies provides access to businesses with proven track records and steady revenue streams",
    icon: <CheckCircle size={40} />,
  },
  {
    title: "Existing Infrastructure",
    description:
      "Acquired companies already have customers, operational systems, and brand recognition, eliminating the uncertainty associated with building these from scratch.",
    icon: <TrendingUp size={40} />,
  },
  {
    title: "Immediate Revenue",
    description:
      "Rather than waiting years for a startup to become profitable, acquisitions offer immediate cash flow from day one.",
    icon: <Shield size={40} />,
  },
];
export const Why = () => {
  return (
    <section id="why" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why Focus on{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Company Acquisitions?
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <div className="w-12 h-12 mb-4 mx-auto text-green-400">
                {icon}
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
