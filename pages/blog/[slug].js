import React from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";
import axios from "axios";
import Image from "next/image";

const Blog = ({ blogData }) => {
  return (
    <main>
      <div className="container bg-[#f2eadf] min-h-screen ">
        <Navbar />
        <div className="py-[6rem] min-h-screen mx-auto max-w-[1450px] px-4 lg:px-12">
          <h1 className="font-sansita-regular">{blogData?.title}</h1>
          <div className="flex justify-center">
            <Image
              src={blogData?.image}
              width={1200}
              height={750}
              alt={blogData?.alt}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blogData?.bloghtml }} />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Blog;

export const getServerSideProps = async ({ query }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_BASE_URL}/api/get-blog?blogId=${query.slug}`
    );
    const blogData = response.data.blog;
    return {
      props: {
        error: false,
        success: true,
        blogData,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    return {
      props: {
        error: true,
        success: false,
      },
    };
  }
};
