import Head from "next/head";
import React from "react";
import Navbar from "../../components/common/header";
import ProfileOptions from "../../components/Profile/ProfileOptions.jsx";
import Footer from "../../components/common/footer.jsx";
import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "cookies";
const Profile = ({ user, success }) => {
  const [responseData, setResponseData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("profileImage", selectedImage);

      const response = await axios.post(
        `/api/upload-profile-picture/${id}`,
        formData
      );

      if (response.data.success) {
        // Reload the user data after successful upload
        axios.post("/api/get-user", { id }).then((res) => {
          setResponseData(res.data);
        });
      } else {
        // Handle error
        console.error(
          "Upload failed:",
          response.data.message || "An error occurred"
        );
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error.message);
    }
  };
  const router = useRouter();
  useEffect(() => {
    if (!success) {
      router.push("/login?destination=/");
    }
  }, []);
  return (
    <main className="container min-h-screen bg-[#f2eadf] relative">
      {success && (
        <>
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
            <meta
              property="og:url"
              content="https://www.2512.in/profile/darshan"
            />
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
          <div className=" px-[.94rem]">
            <div className="pt-24 flex flex-col items-center justify-center">
              <div className="relative">
                {selectedImage ? (
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/profile.jpg"
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute left-0 right-0 top-0 bottom-0 opacity-0"
                />
              </div>
              <h3 className="font-sansita-regular !text-[1.5rem] pt-[.88rem] text-[#2F2E2D]">
                {user?.name}
              </h3>
            </div>
            <ProfileOptions user={user} />
          </div>
          <Footer />
        </>
      )}
    </main>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const temp = cookies.get("token");

  const token = temp?.split("%22")[1];

  const res = await axios.post(
    "http://localhost:4545/api/get-user",
    {
      id: context.query.slug,
    },
    {
      headers: {
        Authorization: "Bearer ".concat(token),
      },
    },
    {
      withCredentials: true,
    }
  );
  console.log("Profile user", res.data);
  if (res.data.success) {
    return {
      props: {
        user: res.data.user,
        success: true,
      },
    };
  } else {
    return {
      props: {
        success: false,
      },
    };
  }
}
