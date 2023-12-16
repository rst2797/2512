import React from "react";
import Navbar from "../components/common/header";
import Footer from "../components/common/footer";

const TermsAndCondition = () => {
  const aboutPacchisBarah = [
    "If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.",
    "If you disagree with any part of these terms and conditions, please do not use our website.",
    "The term '2512' or 'us' or 'we' refers to the owner of the website whose registered office is:",
    "2512 Fashion Pvt. Ltd.",
    "Street Address, City, State, Zip Code.",
    "Phone: Your Phone Number. Email: info@2512.com",
    "The term 'you' refers to the user or viewer of our website.",
  ];
  const termsOfUse = [
    "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose, and you acknowledge that such information and materials may contain inaccuracies or errors. We expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
    "Your use of any information or materials on this website is entirely at your own risk, and we shall not be liable; it is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.",
    "This website contains material owned by or licensed to us, including design, layout, look, appearance, and graphics; reproduction is prohibited except in accordance with the copyright notice, which forms part of these terms and conditions.",
    "All trademarks reproduced on this website, which are not the property of, or licensed to, the operator, are acknowledged on the website.",
    "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
    "From time to time, this website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
    "Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.",
    "2512 shall not be liable to you or any third parties for any direct, indirect, special, consequential, or punitive damages allegedly sustained arising out of your access to or inability to access this website. This includes viruses alleged to have been obtained from the website, your use of or reliance on the website or any of the information or materials available on the website, regardless of the type of claim or the nature of the cause of action.",
  ];

  const termsForPurchase = [
    "By placing an order with us, you are certifying that you are over 18 years old.",
    "2512 does not make any specific guarantees or warranties of any kind for our garments and delivery. The delivery times are estimates and are not guaranteed time frames.",
    "By placing an order with us, you are agreeing to all our Terms and Conditions and information on this page.",
    "2512 is not responsible for purchases that are unable to be processed due to technical difficulties with the website or unavailability of products.",
  ];
  return (
    <div className="bg-[#f2eadf]">
      <div className="max-w-[1450px] mx-auto  py-[1.125rem]"></div>
      <Navbar />
      <div className="pt-[4rem] px-[.9485rem]">
        <h1 className="font-sansita-regular !text-[2rem]">Welcome to 2512!</h1>
        <ul className="py-4">
          {aboutPacchisBarah.map((ele, index) => (
            <li key={index} className="font-normal text-base leading-5">
              {ele}
            </li>
          ))}
        </ul>
        <h2 className="font-sansita-regular !text-[1.5rem]">Terms of Use:</h2>
        <ol className="p-4">
          {termsOfUse.map((ele, index) => (
            <li
              key={index}
              className="font-normal my-6 list-decimal text-base leading-5"
            >
              {ele}
            </li>
          ))}
          <h2 className="font-sansita-regular !text-[1.35rem]">
            Terms for Purchase on Our Website:
          </h2>
        </ol>
        <ol className="px-4 pb-4">
          {termsForPurchase.map((ele, index) => (
            <li
              key={index}
              className="font-normal my-6 list-decimal text-base leading-5"
            >
              {ele}
            </li>
          ))}
        </ol>
        <div className="pb-12">
          <h2 className="font-sansita-regular !text-[1.35rem]">
            Intellectual Property:
          </h2>
          <p>
            The content and design of this website and all products are
            copyright and belong to 2512.
          </p>
          <p>The &ldquo; 2512 &rdquo; label has been trademarked.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TermsAndCondition;
