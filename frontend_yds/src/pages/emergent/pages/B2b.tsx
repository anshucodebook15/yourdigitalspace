// import React from "react";
// import Layout from "../layout/layout";
// import About from "../components/About";
import { useAssets } from "../../../hooks/useAssets";
// import HeaderTwo from "../components/HeaderTwo";
import LayoutTwo from "../layout/layoutTwo";

const B2b = () => {
  const { images } = useAssets();

  const teamMembers = [
    {
      name: "Ms. Shipra Kumar",
      role: "Founder & Director",
      image: "shipra",
      description:
        "Ms. Shipra Kumar, a Le Cordon Bleu graduate, turned her passion into purpose when she founded Dolci in 2010. What started as a humble home baking venture has blossomed into a celebrated café brand, known across Bengaluru for its quality and unforgettable flavors. Driven by creativity, craftsmanship, and a love for bringing people together through food, Ms. Shipra has made Dolci a name that resonates with warmth, taste, and excellence.",
    },
    {
      name: "Mr. Vivek Kumar",
      role: "Director",
      image: "vivek",
      description:
        "Mr. Vivek Kumar, Director at Dolci, is a dynamic entrepreneur with deep roots in hospitality and textiles. He brings a legacy of excellence and innovation, having led several successful ventures including Clarks Exotica Convention Resort & Spa. His strategic vision and commitment to quality have played a key role in shaping Dolci’s growth. A passionate philanthropist and creative thinker, Mr. Kumar continues to inspire with his leadership and dedication.",
    },
    {
      name: "Mr. Nigel Colaco",
      role: "Director",
      image: "nigel",
      description:
        "Mr. Nigel Colaco, Director at Dolci, is a visionary entrepreneur and seasoned real estate expert. As Executive Director of Clarks Exotica and Director of Continental Builders and Developers, he has been instrumental in shaping some of Bengaluru’s most iconic residential and commercial projects, including Swiss Town and Hollywood Town. His commitment to quality, innovation, and sustainable development reflects the same passion he brings to Dolci’s growth and success.",
    },
    {
      name: "Mr. Randal Colaco",
      role: "Director",
      image: "randel",
      description:
        "Mr. Randal Colaco, Director of Dolci, brings fresh vision and creative direction to the family’s hospitality ventures. With a passion for premium experiences, Mr. Randal plays a key role in shaping Dolci’s identity and growth. His approach blends design sensibility, operational excellence, and customer-first thinking. Randal represents the new wave of leadership with a strong focus on innovation and lifestyle-driven brands.",
    },
    {
      name: "Mr. M Balaji",
      role: "Executive Director & CEO",
      image: "balaji",
      description:
        "Mr. Balaji M, Executive Director and CEO of Dolci, brings over 25 years of cross-industry experience to the brand. He plays a pivotal role in Dolci’s strategic growth. As the driving force behind Dolci’s expansion, Mr. Balaji combines visionary leadership with deep operational insight. His people-centric approach and passion for excellence continue to shape the brand’s journey forward.",
    },
  ];

  const TeamSection = ({ images }: { images: Record<string, string> }) => {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-0 items-start">
          {teamMembers.map((member, index) => (
            <div key={index} className="px-10 flex flex-col justify-center items-center text-center">
              <div className="w-60 h-60 rounded-full overflow-hidden mb-4">
                <img
                  src={images[member.image]}
                  alt={member.name}
                  className="w-full"
                />
              </div>
              <h4 className=" font-bold">
                {member.name}
              </h4>
              <h5 className="mb-4">{member.role && <span>{member.role}</span>}</h5>
              <p className="text-[14px] leading-5 font-montserrat">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <LayoutTwo>
        <div className="py-20"></div>
        {/* <h1>B2B</h1> */}
        {/* <About /> */}

        <section className="contain mb-20">
          <div className=" text-center ">
            <h2 className="font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
              Our Directors
            </h2>
          </div>
          <TeamSection images={images} />
        </section>

        <section className="text-center mb-16 ">
          <h1 className="font-playfair-display text-4xl md:text-5xl font-bold text-midnight-blue mb-6">
            Dolci White Label Bakery Partnerships in India
          </h1>
          <p className="font-great-vibes text-2xl text-dark-accent mb-10">
            From Home Baking to Beloved Café Chain
          </p>
          <div className="max-w-5xl mx-auto">
            <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
              At Dolci we power some of the biggest brands with our expertise in
              baking and food innovation. As a trusted white label bakery
              supplier and private label bakery manufacturer for B2B, we create
              high-quality products that carry your brand name while delivering
              our top-notch craftsmanship and consistency.
            </p>
          </div>
        </section>

        <div className="contain border-[1px] border-gray-200 mb-16"></div>

        <section className="text-center mb-20 bg-white">
          <h2 className="font-playfair-display text-4xl md:text-4xl font-bold text-midnight-blue mb-6">
            Our B2B White Label Bakery Services
          </h2>
          <p className="font-great-vibes text-2xl text-dark-accent mb-10">
            From Home Baking to Beloved Café Chain
          </p>
          <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            White Label Solutions
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
              We specialize in white label baked goods manufacturing. From
              breads, cakes, cookies, and pastries to savory items, every
              product can be exclusively branded under your label, with our team
              ensuring taste, quality, and freshness.
            </p>
          </div>
        </section>
        <section className="text-center mb-20 bg-white">
          <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Custom Product Development
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
              Looking for innovation? Our custom bakery solutions in India are
              designed for brands that want unique recipes, specialized product
              lines, or dietary-specific ranges like gluten-free and vegan
              bakery items. We handle everything from concept to scalable
              production while maintaining your brand&rsquo;s signature quality.
            </p>
          </div>
        </section>
        <section className="text-center mb-20 bg-white">
          <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Large-Scale Supply
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12">
              With two state-of-the-art facilities, we are the reliable bakery
              contract manufacturing partner for businesses that demand scale
              without compromise. As a bulk baked goods supplier and industrial
              bakery producer in India, we guarantee consistent output, timely
              delivery, and high standards for every order.
            </p>
          </div>
        </section>

        <section className="text-center mb-20 bg-white">
          <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Our Partnerships
          </h3>

          <div className="max-w-5xl mx-auto">
            <ol className="font-montserrat text-lg text-gray-700 leading-relaxed mb-12">
              <li>
                <strong>ITC:</strong> Supplying a wide range of breads, cakes,
                cookies and other baked products.&nbsp;
              </li>
              <li>
                <strong>Chai Point:</strong> Producing fresh sandwiches, puffs
                and savoury delights across 39 outlets.
              </li>
              <li>
                <strong>Fyole Caf&eacute; (Mall of Asia):</strong> Crafting
                specialty baked goods to complement their caf&eacute; menu.
              </li>
            </ol>
          </div>
        </section>

        <section className="text-center bg-white">
          <h3 className="font-playfair-display text-3xl md:text-3xl font-bold text-midnight-blue mb-6">
            Why Partner With Dolci?
          </h3>

          <div className="max-w-5xl mx-auto">
            <ul className="font-montserrat text-[18px] text-gray-700 leading-relaxed mb-12 ">
              <li>
                Expertise in <strong>white label bakery partnerships</strong> in
                India
              </li>
              <li>
                Proven track record with leading caf&eacute;s, restaurants, and
                FMCG brands
              </li>
              <li>
                Ability to scale from boutique batches to{" "}
                <strong>large-scale bakery supply</strong>
              </li>
              <li>
                Wide product portfolio: bread, cookies, cakes, biscuits, puff
                pastries, fresh sandwiches and many more
              </li>
              <li>Commitment to quality, innovation, and consistency</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          {/* CTA Section */}
          <div className="mt-24 text-center rounded-3xl p-10 lg:p-12 text-midnight-blue max-w-2xl mx-auto border-1 border-dolci-blue">

            <p className="font-montserrat text-midnight-blue/80 mb-10 max-w-3xl mx-auto text-base lg:text-lg">
              Get in touch today to discuss your requirements
              and explore how we can create the perfect baked products for your brand.
            </p>

            <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-6 leading-normal">
              I AM INTERESTED
            </h3>


          </div>
        </section>
      </LayoutTwo>
    </div>
  );
};

export default B2b;
