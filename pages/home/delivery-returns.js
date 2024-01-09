import React from "react";
import BreadCrumb from "../../components/common/BreadcrumbArray";
import Head from "next/head";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";

const Detail = () => {
  const cancellation = {
    title: "Cancellation of Order",
    brief:
      "You can cancel an order within 24 hours of placing one, email us at info@2512.in and we'll attempt a cancellation before your order is processed further.",
    note: "Only orders cancelled within 24 hours of placement get a full refund.",
  };
  const wrongOrderOrDamaged = {
    title: "RECEIVED WRONG ORDER OR GOODS WERE DAMAGED ON ARRIVAL ?",
    brief:
      "Please mail us at info@2512.in within 24 hours of receiving the goods to raise a request against wrong/damaged orders.",
    requireHead: "Please send us :",
    require: [
      "Your Order ID",
      "A photo of your received order",
      "Please state in detail the problem at hand",
    ],
    requireFooter:
      "Our team will proactively arrange a reverse pick up and send out a new fresh product.",
    note: "The item should be unworn, unwashed with all tags attached and in the same condition, in which it was delivered to be eligible for a return against damaged/wrong goods. In case of damaged packaging we suggest you do not accept the parcel.",
  };
  const storeCredits = {
    title: "STORE CREDITS:",
    points: [
      "When you return a product, our refund is given in the form of a Store Credit, which is 100% redeemable against purchases and is valid for one entire year.",
      "Store credits can be applied during checkout. If you face any issue while applying store credit please write to info@2512.in",
    ],
    note: "Cash on delivery fee applicable on orders are non-refundable and would not reflect in the issued store credits.",
    creditApplicableQuest: "When are store credits not applicable?",
    creditApplicableAns: [
      "For products purchased on clearance, discounts & markdowns.",
      "If the product returned is used, damaged or altered.",
    ],
    whenGetCreditQuest: "When will I get my Store Credits ?",
    whenGetCreditAns:
      "For returns, the reverse pick up will be done in 2-3 days once the request is placed. It takes 7-10 days for the product to arrive at our warehouse, post which it undergoes a quality check. Once it passes the quality check, the store credits will be issued within 24 hours.",
    whenGetCreditNote:
      "shipping / cash on delivery charges are non-refundable.",
  };
  const returnExchangePolicy = {
    title: "RETURN AND EXCHANGE :",
    brief:
      "If you’re looking to return or exchange your order for whatever reason, we’re here to help!",
    points: [
      "Items purchased from PacchisBarah are eligible for return/exchange, if returned within 7 days of delivery.",
      "All Prepaid orders are eligible for returns. All COD orders are only eligible for exchanges.",
      "All items must be in their original condition – unworn, unused with the tag, labels & in the same packing.",
      "A reverse shipping fee of Rs.99 will be applicable on all returns and exchanges. You can alternatively choose to self-ship/arrange pickups.",
      "Only store credits are issued in case of refunds. (Due to high costs of reverse shipping, re-cleaning, and restocking of a product.)",
    ],
    note: "The pick-up be will attempted twice. If the courier company is unable to pick up the shipment. You will have to send the shipment back to the company address. All Reverse Pick up is subject to availability of the service in your area pin-code.",
    processToReturnQuest: "How to process a return ?",
    stepsToProcessReturns: [
      "Maintain good condition. Items must be returned unused, unwashed, unworn with all original tags attached. Make sure you put the item(s) back in the original package in the same way it was delivered.",
      "Our team schedules a pick-up that should take up to 3-5 days. For a returns that result in refund the product would have to reach our facility for quality inspection.",
    ],
    stepNote:
      "If you face any issues, just mail us at info@2512.in and our team will be happy to guide you through the process.",
    exchangeQuest: "Exchanging for a different product ?",
    exchangeAns:
      "In case you'd like to exchange and choose a different product. You can return the purchased products for store credits and use these credits to make a new purchase.",
  };

  const shippingInformation = {
    title: "SHIPPING :",
    regionsAndDetails: [
      {
        region: "INDIA",
        details: [
          "We offer free shipping across India for all prepaid orders. For COD orders, an additional COD fee is applicable.",
          "Order usually takes 5 - 10 working days to deliver, however, for some pin codes, it might take a little more time. In case of delay, please write to us at info@2512.in",
          "Priority Shipping available too with extra cost.",
        ],
      },
      {
        region: "INTERNATIONAL",
        details: [
          "Shipping calculated at checkout.",
          "Delivery within 3-4 weeks.",
          "Unfortunately, we don't accept international returns or exchanges.",
        ],
      },
      {
        region: "ORDER TRACKING",
        details: [
          "Once dispatched, an email with tracking details will be sent to you.",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f2eadf]">
      <Head>
        <title>
          Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive
          Fashion
        </title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sustainable & Stylish Clothing | 2512: Organic Gender-Inclusive Fashion"
        />
        <meta
          property="og:description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimamx-6 list, greener coding. Shop on mobile & web."
        />
        <meta property="og:url" content="https://www.2512.in/home/delivery-returns" />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimamx-6 list, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/home/delivery-returns" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <div className="px-[.94rem] lg:px-20 text-[#2F2E2D]">
        <BreadCrumb name="Home" category="Delivery, Returns & Exchanges" />
        <div className="border-b-2 border-white">
          <h1 className="font-sansita-regular !text-[1.5rem] py-0">
            {shippingInformation.title}
          </h1>
          {shippingInformation.regionsAndDetails.map((ele, index) => (
            <div key={index} className="py-4">
              <h2 className="font-semibold text-[1rem]">{ele.region}</h2>
              <ul>
                {ele.details.map((detail, index) => (
                  <li key={index} className="py-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-b-2 border-white">
          <h1 className="font-sansita-regular !text-[1.5rem] py-0">
            {returnExchangePolicy.title}
          </h1>
          <p>{returnExchangePolicy.brief}</p>
          <ol>
            {returnExchangePolicy.points.map((point, index) => (
              <li key={index} className="py-1 mx-6 list-decimal">
                {point}
              </li>
            ))}
          </ol>
          <p className="py-2">
            <strong>Please Note:&nbsp;</strong>
            {returnExchangePolicy.note}
          </p>
          <h4 className="text-[1.3rem]">
            {returnExchangePolicy.processToReturnQuest}
          </h4>
          {returnExchangePolicy.stepsToProcessReturns.map((ele, index) => (
            <p className="py-2" key={index}>
              <em>
                <strong>Step {index + 1}</strong>
              </em>
              &nbsp;
              {ele}
            </p>
          ))}
        </div>
        <div className="border-b-2 border-white">
          <h1 className="font-sansita-regular !text-[1.5rem] py-0">
            {storeCredits.title}
          </h1>
          <ol>
            {storeCredits.points.map((point, index) => (
              <li key={index} className="py-1 mx-6 list-disc">
                {point}
              </li>
            ))}
          </ol>
          <p className="py-2">
            <strong>Please Note: &nbsp;</strong>
            {storeCredits.note}
          </p>
          <h4 className="text-[1.3rem]">
            {storeCredits.creditApplicableQuest}
          </h4>
          <ol>
            {storeCredits.creditApplicableAns.map((ele, index) => (
              <li className="py-1 mx-6 list-decimal" key={index}>
                {ele}
              </li>
            ))}
          </ol>
          <h4 className="text-[1.3rem]">{storeCredits.whenGetCreditQuest}</h4>
          <p>{storeCredits.whenGetCreditAns}</p>
          <p className="py-2">
            <strong>Please Note: &nbsp;</strong>
            {storeCredits.whenGetCreditNote}
          </p>
        </div>
        <div className="border-b-2 border-white">
          <h1 className="font-sansita-regular !text-[1.5rem] !leading-7 py-4">
            {wrongOrderOrDamaged.title}
          </h1>
          <p className="py-2">{wrongOrderOrDamaged.brief}</p>
          <p className="py-2">
            {wrongOrderOrDamaged.requireHead}
          </p>
          <ol>
            {
              wrongOrderOrDamaged.require.map((ele, index)=>(
                <li key={index} className="py-1 mx-6 list-decimal">{ele}</li>
              ))
            }
          </ol>
          <p className="py-2">{wrongOrderOrDamaged.requireFooter}</p>
          <p className="py-2 text-justify">
            <strong>Please Note: &nbsp;</strong>
            {wrongOrderOrDamaged.note}
          </p>
        </div>
        <div className="border-b-2 border-white">
          <h1 className="font-sansita-regular !text-[1.5rem] py-0">
            {cancellation.title}
          </h1>
          <p className="py-2">{cancellation.brief}</p>
          <p className="py-2 text-justify">
            <strong>Please Note: &nbsp;</strong>
            {cancellation.note}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Detail;
