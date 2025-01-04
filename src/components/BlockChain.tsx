import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, Fan, Blend } from "lucide-react";
import chain from "../assets/chain.png";
interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Decentralized Decision-Making",
    description:
      "Token holders are actively involved in decision-making through a secure voting system, ensuring their voices shape the acquisitions.",
    icon: <Users size={40} />,
  },
  {
    title: "Efficient Transactions",
    description:
      "Blockchain enables faster and lower-cost transfers of funds, compared to traditional financing methods.",
    icon: <Fan size={40} />,
  },
  {
    title: "Transparent Operations",
    description:
      "All financial and operational decisions are recorded on the blockchain, ensuring complete transparency and trust.",
    icon: <Blend size={40} />,
  },
];

export const BlockChain = () => {
  return (
    <section className="container py-24 sm:py-32" id="blockChain">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              How Blockchain{" "}
            </span>
            Enhances the Process
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            By integrating blockchain technology, we provide a secure,
            transparent, and efficient way to fund and manage company
            acquisitions
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
          src={chain}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
