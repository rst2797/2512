import React from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";

const PrivacyPolicy = () => {
  const privacyPolicyData = [
    {
      title: "Your Email",
      points: [
        "We only send newsletters to email addresses that have opted in, and you may opt out at any time.",
        "If you place an order, we use your email to communicate order-related information. We do not sell your email to third parties.",
      ],
    },
    {
      title: "Your Personal Information",
      points: [
        "When you place an order, we collect necessary details such as your name, shipping and billing address, credit card number (handled securely by our payment gateway), and email address.",
        "We use this information solely for order processing, providing support, and order updates. We do not sell your personal information.",
      ],
    },
    {
      title: "Anonymous Information",
      points: [
        "We collect non-personal information like browser type, previous website visited, ISP, and operating system for site analysis and improvement.",
        "This information is anonymous and used for analyzing trends and enhancing the user experience.",
      ],
    },
    {
      title: "Cookies",
      points: [
        "Our cookies, while not storing personal information, enhance your user experience (e.g., keeping items in your cart).",
        "We may use third-party services for marketing and analysis. You can opt-out through relevant links provided.",
      ],
    },
    {
      title: "Geo-location",
      points: [
        "We may process your IP address for currency conversion to provide a consistent browsing experience. Your selected currency is stored in a temporary cookie.",
      ],
    },
    {
      title: "Security",
      points: [
        "We employ industry-standard security measures, including physical and electronic safeguards.",
        "All private information during an order is encrypted using 128-bit SSL technology.",
      ],
    },
  ];

  const additionalPrivacyPolicyData = [
    {
      id: 1,
      title: "Security",
      points: [
        "We employ industry-standard security measures, including physical and electronic safeguards.",
        "All private information during an order is encrypted using 128-bit SSL technology.",
      ],
    },
    {
      id: 2,
      title: "Information We DON'T Collect",
      points: [
        "We do not collect or store credit/debit card information. This data goes directly to our secure third-party payment gateway.",
      ],
    },
    {
      id: 3,
      title: "Final Disclaimer",
      points: [
        "While we implement comprehensive security measures, we cannot guarantee absolute protection. Users provide personal information at their own risk.",
      ],
    },
    {
      id: 4,
      title: "Sustainable Products",
      points: [
        "We take pride in offering a limited range of sustainable T-shirts. Our commitment to minimalism reflects in our product selection, focusing on quality and sustainability.",
      ],
    },
    {
      id: 5,
      title: "Policy Updates",
      points: [
        "This privacy policy may be updated periodically. Users will be notified of any changes.",
      ],
    },
  ];

  return (
    <div className="bg-[#f2eadf]">
      <div className="max-w-[1450px] mx-auto px-[.9485rem] py-[1.125rem]">
        <Navbar />
        <div className="lg:px-[2rem]">
          <h2 className="font-sansita-regular !text-[2rem] pt-[6rem] pb-4">
            Privacy Policy for 2512
          </h2>

          <h3 className="text-[1.3rem] font-semibold py-4">Introduction:</h3>
          <p>
            At 2512 or Pacchis Barah, we are committed to ensuring the privacy
            and security of your personal information. This privacy policy
            outlines the types of information we collect, how we use it, and the
            measures we take to safeguard your data.
          </p>

          <h3 className="text-[1.3rem] font-semibold pt-4">
            Information We Collect:
          </h3>

          <ol>
            {privacyPolicyData.map((ele, index) => (
              <li className="pt-[2rem]" key={index}>
                <strong className="font-bold text-[1rem]">{ele.title}</strong>
                <ul className="list-disc px-12">
                  {ele.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {additionalPrivacyPolicyData.map((ele) => (
            <div className="pt-[2rem]" key={ele.id}>
              <h3 className="font-bold text-[1rem]">{ele.title}</h3>
              <ol className="list-decimal px-12">
                {ele.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ol>
            </div>
          ))}

          <p className="pt-12">
            By using our website, you agree to the terms outlined in this
            privacy policy. For any inquiries or concerns, please contact us at{" "}
            <a
              href="mailto:contact@2512pacchisbarah.com"
              className="text-blue-500 font-bold"
            >
              contactus@2512.in
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
