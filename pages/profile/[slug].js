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

  const handleImageChange = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      console.log(e.target.files[0]);

      await axios
        .post(`/api/get-signedurl-to-upload/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          fileToBinary(e.target.files[0])
            .then((binaryData) => {
              axios.put(res.data.putSigned, binaryData).then((res) => {
                axios
                  .get(
                    `/api/get-profile-picture-signedurl/user-profiles-pictures/${userId}_${e.target.files[0].name}`
                  )
                  .then((res) => {
                    console.log(res.data);
                    axios.post(`/api/update-profile?userId=${userId}`, {
                      imageUri: res.data.url,
                    });
                  });
              });
            })
            .catch((error) => {
              console.error("Error:", error.message);
            });
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  async function fileToBinary(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result property contains the binary data
        const binaryData = reader.result;
        resolve(binaryData);
      };

      reader.onerror = () => {
        reject(new Error("Error reading the file"));
      };

      // Read the file as binary data
      reader.readAsBinaryString(file);
    });
  }
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
            <meta property="og:image" content="/icons/favicon.ico" />
            <meta
              name="description"
              content="Discover conscious fashion at www.2512.in – your sustainable, gender-inclusive clothing brand. Minimalist, greener coding. Shop on mobile & web."
            />
            <meta property="twitter:creator" content="1225 | PACCHIS BARAH" />
            <meta property="twitter:site" content="1225 | PACCHIS BARAH" />

            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="canonical" href="https://www.2512.in/profile/darshan" />
            <link rel="icon" href="/icons/favicon.ico" />
          </Head>
          <Navbar />
          <div className="py-4 px-[.94rem] 2xl:px-20 mx-auto max-w-[1450px]">
            <div className="pt-24 grid-cols-1 grid lg:grid-cols-4 gap-12">
              <ProfileOptions user={user} />
              <div className="lg:w-[70%] col-span-3 pt-6">
                <div className="relative w-fit">
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
                      src={user?.profile}
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
                <div className="flex justify-between pb-4 border-b-[1px] border-black">
                  <h3 className="font-lato-regular !text-[1.3rem] font-semibold pt-[.88rem] text-[#2F2E2D] ">
                    Profile Details
                  </h3>
                  <button className="bg-[#A86549] hidden lg:block text-white font-semibold text-sm rounded-xl py-0 px-[1.25rem] w-[10rem]">
                    Edit
                  </button>
                </div>
                <table className="w-full font-lato-regular !font-semibold !text-[1rem]">
                  <tbody>
                    <tr>
                      <td className="py-2">Full Name</td>
                      <td className="py-2">{user?.name}</td>
                    </tr>
                    <tr>
                      <td className="py-2">Mobile No.</td>
                      <td className="py-2">{user?.phone}</td>
                    </tr>
                    <tr>
                      <td className="py-2">Email ID</td>
                      <td className="py-2">{user?.email}</td>
                    </tr>
                    <tr>
                      <td className="py-2">Gender</td>
                      <td className="py-2">Male</td>
                    </tr>
                    <tr>
                      <td className="py-2">Date of Birth</td>
                      <td className="py-2">28/07/1998</td>
                    </tr>
                    <tr>
                      <td className="py-2">Location</td>
                      <td className="py-2 capitalize">{user?.address}</td>
                    </tr>
                    <tr>
                      <td className="py-2">Alternate Mobile</td>
                      <td className="py-2">----Not Added----</td>
                    </tr>
                  </tbody>
                </table>
                <button className="bg-[#A86549] lg:hidden text-white font-semibold text-sm rounded-lg py-2 px-[1.25rem] w-full my-4">
                  Edit
                </button>
              </div>
            </div>
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
  try {
    const res = await axios.post(
      `${process.env.NEXT_API_BASE_URL}/api/get-user`,
      {
        id: context.query.slug,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      {
        withCredentials: true,
      }
    );
    if (res.data.success) {
      return {
        props: {
          user: res.data.user,
          success: true,
        },
      };
    }
    throw new Error("Something went wrong!!!");
  } catch (error) {
    return {
      props: {
        success: false,
      },
    };
  }
}
