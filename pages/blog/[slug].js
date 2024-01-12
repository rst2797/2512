import React from "react";
import Navbar from "../../components/common/header";
import Footer from "../../components/common/footer";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";

const Blog = ({ blogData }) => {
  return (
    <main>
      <Head>
        <title>{blogData?.metaTitle}</title>
        <meta name="description" content={blogData?.metaDescription} />
        <meta property="og:title" content={blogData?.metaTitle} />
        <meta property="og:description" content={blogData?.metaDescription} />
        <meta property="og:image" content="/icons/favicon.ico" />
        <meta
          property="og:url"
          content={`https://www.2512.in/blog/${blogData?._id}`}
        />

        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.2512.in/blog/${blogData?._id}`}
        />
        <link rel="icon" href="/icons/favicon.ico" />
        <link
          rel="preload"
          href={blogData?.image}
          as="image"
          type="image/*"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container bg-[#f2eadf] min-h-screen ">
        <Navbar />
        <div className="py-[6rem] min-h-screen mx-auto max-w-[1450px] px-4 lg:px-12">
          <h1 className="font-sansita-regular py-6">{blogData?.title}</h1>
          <div className="flex justify-center">
            {blogData?.image && (
              <Image
                src={blogData?.image}
                width={1200}
                height={750}
                alt={blogData?.alt}
                className="rounded-2xl"
              />
            )}
          </div>
          <div
            className="py-6"
            dangerouslySetInnerHTML={{ __html: blogData?.bloghtml }}
          />
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
      `{process.env.NEXT_API_BASE_URL}/api/get-blog?blogId=${query.slug}`
    );

    if (response.data.success) {
      const blogData = response.data.blog;

      if (blogData.image) {
        const preSignedUrl = await axios.get(
          `{process.env.NEXT_API_BASE_URL}/api/get-profile-picture-signedurl/blogs-thumbnail/${blogData.image}`
        );
        blogData.image = preSignedUrl.data.url;
      }

      return {
        props: {
          error: false,
          success: true,
          blogData,
        },
      };
    } else {
      throw new Error("Failed to fetch blog data");
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      props: {
        error: true,
        success: false,
      },
    };
  }
};
