import { Statistics } from "./Statistics";
import { MapIcon } from "./Icons";
export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="w-[300px] object-contain rounded-lg">
            <MapIcon />
          </div>
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Project
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                With years of experience in the financial sector, we are
                introducing an innovative investment model that is a first in
                the world.
                <br />
                <br />
                Through our X Coin, users can directly invest via
                cryptocurrencies. With X Coin, users not only invest but also
                enjoy the privilege of partnering in our projects.
                <br />
                <br />
                This system transcends traditional financial methods, ensuring
                that our users benefit from their investments. By leveraging
                corporate acquisitions and sales, we provide regular
                profit-sharing to our investors, marking the beginning of a new
                era in financial technologies.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
