import React from "react";
import { PriceCard } from "./PriceCard";
import { PriceCardLoading } from "./PriceCardLoading";

export const Pricing = ({ price }) => {
  return (
    <section
      id="pricing"
      className="max-w-5xl py-20 mx-auto xl:py-24 bg-trasnparent"
    >
      <div className="container px-4 mx-auto mb-16">
        <div className="text-left">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Pricing
          </span>
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            Play Park
          </h3>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          {price ? (
            <>
              <PriceCard
                title="Single Entry"
                mainPrice={price.park_single}
                description={`Entry for one dog. Discounted pricing for additional dogs from the same household.`}
                subdescription={["Puchase at the door"]}
                // link="#"
              />
              <PriceCard
                title="Punch Card"
                mainPrice={price.park_punch}
                popular={true}
                description={`Get 11 entries for the price of 10, for one dog. Discounted pricing for additional dogs from the same household.`}
                subdescription={[`Purchase online or at the door.`]}
                // link=""
              />
              <PriceCard
                title="Membership"
                mainPrice={price.park_monthly}
                mainPriceDesc="per month"
                popular={false}
                description={
                  price.park_yearly
                    ? `Unlimited entries for one dog. Also available, yearly membership for one dog available for $${price.park_yearly}. Discounted pricing for additional dogs from the same household.`
                    : `Unlimited entries for one dog. Discounted pricing for additional dogs from the same household.`
                }
                subdescription={[``]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="Self-Wash Station"
                mainPrice={price.park_self_wash}
                popular={false}
                description={`If you have a dirty dog, bring them to Growlerz and take advantage of our new self-wash station! Our station is open during dog park hours, except for Wednesdays. Plus, if you're a member, you'll get an additional 12% off the regular price.`}
                // subdescription={[]}
                // link=""
              />
            </>
          ) : (
            <>
              {Array(4)
                .fill("")
                .map((obj, idx) => {
                  return <PriceCardLoading key={idx} />;
                })}
            </>
          )}
        </div>
      </div>

      {/* Day Care */}
      <div className="container px-4 mx-auto">
        <div className="text-left">
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            Day Care
          </h3>
          <p className="mb-8 text-lg font-medium leading-loose text-gray-700 md:text-xl md:leading-loose">
            Looking for a flexible and convenient way to enjoy the park with
            your dog? Consider purchasing a multi-day pass! Our multi-day passes
            may be redeemed on non-consecutive days, so you can come and go as
            your schedule allows. And with our Dog Daycare bundles, you never
            have to worry about expiration dates. Plus, if you're a Play Park
            member, you'll get a 5% discount on Dog Daycare. To make sure you
            get the best experience, we highly encourage online reservations.
            Drop-ins are welcome, but availability is limited. And don't forget
            to ask about our discounted pricing for additional dogs from the
            same household.
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {price ? (
            <>
              <PriceCard
                title="Half Day"
                mainPrice={price.daycare_halfDay}
                description={`5 hours day care for one dog.`}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="Single Day"
                mainPrice={price.daycare_day}
                description={`Full day care for one dog. `}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="5 Days"
                mainPrice={price.daycare_fiveDays}
                popular={true}
                description={`Five entries for one dog. Save $10 over regular single day admissions.`}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
              <PriceCard
                title="10 Days"
                mainPrice={price.daycare_tenDays}
                popular={false}
                description={`Ten entries for one dog. Save $30 over regular single day admissions.`}
                subdescription={[]}
                link="https://growlerz.portal.gingrapp.com/#/secure/shop/package-retail/false/package"
              />
            </>
          ) : (
            <>
              {Array(4)
                .fill("")
                .map((obj, idx) => {
                  return <PriceCardLoading key={idx} />;
                })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
