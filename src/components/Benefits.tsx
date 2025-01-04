import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { WalletIcon, ChartIcon,MapIcon } from "./Icons";
import benefit from "../assets/benefit.png";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Profit Sharing",
    description: " Easily invest in our system by purchasing X Coin.",
    icon: <WalletIcon />,
  },
  {
    title: "Growing Token Value",
    description:
      "Your investments are securely locked in the fund pool for a specified period.",
    icon: <MapIcon />,
  },
  {
    title: "Reduced Risk",
    description:
      "The pooled funds are utilized by our expert team for profitable company trading operations.",
    icon: <ChartIcon />,
  },
];

export const Benefits = () => {
  return (
    <section className="container py-24 sm:py-32" id="howItWorks">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Benefits{" "}
            </span>
            of Investing with Us
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Manage your investments quickly and effortlessly. With our
            user-friendly interface, learn how the system works instantly and
            start investing today!
          </p>
          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={benefit}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain rounded-lg"
          alt="About services"
        />
      </div>
    </section>
  );
};
