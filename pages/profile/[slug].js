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
import { ThreeDots } from "react-loader-spinner";
import { FaCamera } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Profile = ({ user, success }) => {
  const [profileLoader, setProfileLoader] = useState(false);
  const [profile, setProfile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editable, setEditable] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageChange = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      setProfileLoader(true);

      await axios
        .post(`/api/get-signedurl-to-upload/${userId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          axios.put(res.data.putSigned, e.target.files[0]).then((res) => {
            axios
              .get(
                `/api/get-profile-picture-signedurl/user-profiles-pictures/${userId}_${e.target.files[0].name}`
              )
              .then((response) => {
                axios
                  .put(
                    `/api/update-profile?userId=${userId}&profile=${e.target.files[0].name}`
                  )
                  .then((res) => {
                    setProfileLoader(false);
                    toast.success("Profile updated successfully....");
                    setProfile(response.data.url);
                  });
              });
          });
        })
        .catch((error) => {
          console.error("Error:", error.message);
          setProfileLoader(false);
        });
    } catch (error) {
      console.error("Error uploading image:", error);
      setProfileLoader(false);
    }
  };

  const router = useRouter();
  useEffect(() => {
    if (!success) {
      router.push("/login?destination=/");
    } else {
      if (user.profile.includes("/")) {
        setProfile(user.profile);
      } else {
        axios
          .get(
            `/api/get-profile-picture-signedurl/user-profiles-pictures/${user.profile}`
          )
          .then((res) => {
            setProfile(res.data.url);
          });
      }
    }
  }, []);
  return (
    <main className="container min-h-screen bg-[#f2eadf] relative">
      {success && profile && (
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
          <div className="py-4 px-[.94rem] 2xl:px-20 mx-auto max-w-[1450px] min-h-[90vh]">
            <div className="pt-24 grid-cols-1 grid lg:grid-cols-4 gap-12">
              <ProfileOptions user={user} />
              <div className="lg:w-[70%] col-span-3 pt-6">
                <div
                  className="relative w-fit overflow-hidden rounded-full "
                  onMouseEnter={() => setShowUpload(true)}
                  onMouseLeave={() => setShowUpload(false)}
                >
                  {selectedImage ? (
                    <Image
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected Profile Picture"
                      width={100}
                      height={100}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="relative overflow-hidden">
                      <Image
                        src={profile}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      {showUpload && (
                        <span className="absolute left-0 bottom-14 right-0 rounded-full">
                          <span className="bg-white py-14 px-20 opacity-60" />
                          <FaCamera className="absolute top-6 left-10" />
                        </span>
                      )}
                    </span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute left-0 right-0 top-0 bottom-0 opacity-0"
                  />
                  {profileLoader && (
                    <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 w-full h-[95%] bg-[#0000006c] rounded-full">
                      <ThreeDots
                        visible={true}
                        height="70"
                        width="70"
                        color="#fff"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  )}
                </div>
                <Formik
                  initialValues={{
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    altphone: user.altphone,
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is required"),
                    phone: Yup.string()
                      .matches(/^\d{10}$/, "Phone number must be 10 digits")
                      .required("Phone is required"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    axios
                      .put(`/api/edit-profile/${user._id}`, values)
                      .then(() => {
                        toast.success("Profile Updated Successfully...");
                        setSubmitting(false);
                        setEditable(false);
                      });
                  }}
                >
                  <Form>
                    <div className="flex justify-between pb-4 border-b-[1px] border-black">
                      <h3 className="font-lato-regular !text-[1.3rem] font-semibold pt-[.88rem] text-[#2F2E2D] ">
                        Profile Details
                      </h3>
                      <button
                        type={!editable ? "submit" : "button"}
                        onClick={() => setEditable(!editable)}
                        className="bg-[#A86549] hidden lg:block text-white font-semibold text-sm rounded-xl py-0 px-[1.25rem] w-[10rem]"
                      >
                        {editable ? "Save" : "Edit"}
                      </button>
                    </div>

                    <div className="w-full font-lato-regular !font-semibold !text-[1rem]">
                      <div className="py-2">
                        <label htmlFor="name">Full Name</label>
                        <Field
                          type="text"
                          name="name"
                          className={`bg-transparent ${
                            editable && "border-b border-black"
                          } ml-[4.5rem]`}
                        />
                        <ErrorMessage name="name" component="div" />
                      </div>
                      <div className="py-2">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          className={`bg-transparent ${
                            editable && "border-b border-black"
                          } ml-[6.5rem]`}
                        />
                        <ErrorMessage name="email" component="div" />
                      </div>
                      <div className="py-2">
                        <label htmlFor="phone">Phone</label>
                        <Field
                          type="text"
                          name="phone"
                          className={`bg-transparent ${
                            editable && "border-b border-black"
                          } ml-24`}
                        />
                        <ErrorMessage name="phone" component="div" />
                      </div>
                      <div className="py-2">
                        <label htmlFor="altphone">Alternate Phone</label>
                        <Field
                          type="text"
                          name="altphone"
                          className={`bg-transparent ${
                            editable && "border-b border-black"
                          } ml-7`}
                        />
                        <ErrorMessage name="altphone" component="div" />
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
            <div className="p-4">
              <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                style={{ marginBottom: "1rem", width: "fit-content" }}
              />
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
      `https://www.2512.in/api/get-user`,
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
