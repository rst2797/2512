import Image from "next/image";
import React from "react";
import Cards from "./Cards"

const SectionTwo = () => {
  return (
    <div className="px-[1.88rem] py-4 bg-[#F4E9DF] mx-auto max-w-[1450px]">
      <div className="lg:flex justify-center lg:pb-8">
        <h2 className="font-sansita-regular !text-[2.5rem] lg:!text-[4rem] text-center">
          How we embrace sustainability?
        </h2>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-evenly items-center">
          <div className="flex">
            <div className="rounded-xl bg-[#A86549] drop-shadow-2xl flex items-center px-12 py-3">
              <div className="w-[40px] pt-2">
                <Image
                  src={
                    "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/icons/tshirt.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="px-6 text-white">
                <h3 className="font-sansita-regular !leading-6 !text-[1.25rem]">
                  Certified Textiles
                </h3>
                <p>For an eco-friendly fashion statement</p>
              </div>
            </div>
          </div>
          <div className="py-12 leading-7 font-semibold w-[30%]">
            We aim to offer low impact certified textile clothing, featuring
            Organic Cotton, Hemp, Lyocell, Bamboo, and Piñatex. Each piece is
            meticulously crafted to stand the test of time, promoting a slow
            fashion movement that encourages conscious consumption.
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="py-12 leading-7 font-semibold w-[30%]">
            Our sustainability commitment extends to packaging. Our brown mailer
            packaging is tailored to minimize paper wastage, emphasizing
            efficiency. Each piece is adorned with a singular label, featuring
            sizing details and our brand logo. Our thank- you cards, crafted
            from re-plantable seed paper, embody environmental responsibility.
            It&apos;s not just about clothing, it&apos;s a holistic approach to
            sustainable practices, woven into every aspect of our brand
            experience.
          </div>
          <div className="flex justify-around ">
            <div className="rounded-xl bg-[#A86549] drop-shadow-2xl flex items-center px-12 py-3">
              <div className="w-[40px] pt-2">
                <Image
                  src={
                    "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/icons/boxed-plant.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="px-6 text-white">
                <h3 className="font-sansita-regular !leading-6 !text-[1.25rem]">
                  Thoughtful Packaging
                </h3>
                <p>For a greener tomorrow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="flex justify-around ">
            <div className="rounded-xl bg-[#A86549] drop-shadow-2xl flex items-center px-12 py-3">
              <div className="w-[40px] pt-2">
                <Image
                  src={
                    "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/icons/people.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="px-6 text-white">
                <h3 className="font-sansita-regular !leading-6 !text-[1.25rem]">
                  Inclusive Fashion
                </h3>
                <p>Gender neutral & non- seasonal</p>
              </div>
            </div>
          </div>
          <div className="py-12 leading-7 font-semibold w-[30%]">
            At PacchisBarah, inclusivity is our compass. Our clothing caters to
            diverse body types, abilities, and cultural aesthetics, fostering a
            sense of belonging. Our commitment to eco-conscious practices
            ensures that each garment treads lightly on the planet, promoting a
            sustainable and compassionate industry.
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="py-12 leading-7 font-semibold w-[30%]">
            Small steps lead to significant impact. Our mindful production
            approach guarantees quality fabrics, low impact dyes, and a
            commitment to avoiding excessive wastage, plastic and toxic
            substances throughout the production process.
          </div>
          <div className="flex justify-around ">
            <div className="rounded-xl bg-[#A86549] drop-shadow-2xl flex items-center px-12 py-3">
              <div className="w-[40px] pt-2">
                <Image
                  src={
                    "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/sustainability/icons/save-plant.png"
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="px-6 text-white">
                <h3 className="font-sansita-regular !leading-6 !text-[1.25rem]">
                  Sustainability at Every Step
                </h3>
                <p>From sourcing to packaging</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center font-semibold w-[60%]">
            Join us in this sustainable journey, where every choice reflects a
            conscious effort to redefine fashion with style, responsibility, and
            care for our planet.
          </p>
        </div>
      </div>
      <div className="block lg:hidden">
        <Cards/>
      </div>
    </div>
  );
};

export default SectionTwo;
