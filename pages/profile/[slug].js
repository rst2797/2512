import Head from "next/head";
import React from "react";
import Navbar from "../../components/common/header";
import ProfileOptions from "../../components/Profile/ProfileOptions.jsx";
import Footer from "../../components/common/footer.jsx";
import Image from "next/image";
const Profile = ({name}) => {
  return (
    <main className="container min-h-screen bg-[#f2eadf] relative px-[.94rem]">
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
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="og:url" content="https://www.2512.in/profile/darshan" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="description"
          content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
        />
        <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
        <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.2512.in/profile/darshan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pt-24 flex flex-col items-center justify-center">
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/profile.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-full"
        />
        <h3 className="font-sansita-regular !text-[1.5rem] pt-[.88rem] text-[#2F2E2D]">
          {name}
        </h3>
      </div>
      <ProfileOptions />
      <Footer />
    </main>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  console.log(context.query.slug);
  return {
    props: {
      name: context.query.slug,
    },
  };
}
