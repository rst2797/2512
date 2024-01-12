import React, { useEffect, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  AtomicBlockUtils,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FaRegImage } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [blogTitle, setTitle] = useState("");
  const [blogHtml, setBlogHtml] = useState("");
  const [featureMedia, setFeatureMedia] = useState(null);
  const [featureMediaDb, setFeatureMediaDb] = useState(null);

  const [thumbnailAlt, setThumbnailAlt] = useState("");
  const [metaTitle, setMetaTitle] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");
  const router = useRouter();

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const addImage = async (e) => {
    e.preventDefault();
    const blogId = Date.now();

    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      console.log(e.target.files[0]);

      await axios
        .post(
          `/api/admin/get-signed-url-to-upload-blog-thumbnail?blogId=${blogId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          axios.put(res.data.putSigned, e.target.files[0]).then((res) => {
            axios
              .get(
                `/api/get-profile-picture-signedurl/blogs-thumbnail/${blogId}_${e.target.files[0].name}`
              )
              .then((res) => {
                console.log(res.data);
                setFeatureMedia(res.data.url);
                setFeatureMediaDb(`${blogId}_${e.target.files[0].name}`)
                toast.success("Profile updated successfully....");
              });
          });
        })
        .catch((error) => {
          toast.error("Something went wrong!!");
        });
    } catch (error) {
      toast.error("Error uploading image");
    }
  };
  const uploadHandler = () => {
    try {
      setBlogHtml(
        "" + draftToHtml(convertToRaw(editorState.getCurrentContent()))
      );
      if (featureMedia && blogHtml) {
        axios
          .post(
            `/api/admin/upload-blog`,
            {
              title: blogTitle,
              bloghtml: blogHtml,
              blogsummary: convertToRaw(editorState.getCurrentContent())
                .blocks[0].text,
              alt: thumbnailAlt,
              featureMedia: featureMediaDb,
              metaTitle: metaTitle || blogTitle,
              metaDescription,
            },
            {
              headers: {
                Authorization: `Bearer ${JSON.parse(
                  localStorage.getItem("token")
                )}`,
              },
            }
          )
          .then((res) => {
            if (res.data.success) {
              toast.success(res.data.message);
              setTimeout(() => {
                router.push("/admin/orders");
              }, 1500);
            } else {
              throw new Error(res.data.message);
            }
          });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Blog can't be upload without thumbnail image!!!",
          showConfirmButton: false,
          timer: 1500,
        });
        throw new Error("Blog can't be upload without thumbnail image!!!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    console.log(blogTitle);
  }, [blogHtml, blogTitle, editorState]);

  return (
    <div>
      <div className="flex justify-between mx-[10vw] mt-4 ">
        <h1 className="font-extrabold text-[#A86549]">
          <Link href="/admin/orders">
            <a className="flex flex-col text-center">
              <span className="text-3xl">2512</span>
              <small className="!text-xs">PACCHIS BARAH</small>
            </a>
          </Link>
        </h1>
        <div className="flex justify-center">
          <button
            onClick={onUnderlineClick}
            className="px-6 py-2 font-bold underline"
          >
            U
          </button>
          <button onClick={onBoldClick} className="px-6 py-2 font-bold">
            B
          </button>
          <button
            onClick={onItalicClick}
            className="px-6 py-2 italic font-bold"
          >
            i
          </button>
          <button className="px-6 py-2 relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="absolute opacity-0 top-4 left-0 w-full h-full z-40"
              onChange={(e) => addImage(e)}
            />
            <FaRegImage className="absolute top-0 bottom-0 left-0 right-0 m-auto z-30" />
          </button>
        </div>
        <button
          onClick={uploadHandler}
          className="bg-[#A86549] px-6 py-1 font-bold text-white rounded-lg"
        >
          Upload
        </button>
      </div>
      <div className="mx-[20vw] my-12 min-h-screen shadow-[0_35px_60px_8px_rgba(0,0,0,0.1)] p-12 border-[1px] border-[#6d6d6d]">
        <input
          type="text"
          placeholder="Blog title..."
          className="border-b-2 border-gray-500 placeholder:text-5xl text-5xl font-bold capitalize mb-8 py-2 active:outline focus:outline-none w-full"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="max-w-[60vw]">
          <Editor
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={setEditorState}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center px-[20vw]">
        {featureMedia && (
          <>
            <div className="flex flex-col w-full ">
              <lable htmlFor="thumbnailAlt" className="font-bold text-xl pt-5">
                Enter image alt text
              </lable>
              <input
                id={"thumbnailAlt"}
                placeholder="Enter an image alt tag here...."
                onChange={(e) => setThumbnailAlt(e.target.value)}
                defaultValue={"2512 blog thumbnail"}
                className="border-b-[1px] border-black h-fit w-[70%] outline-none"
              />
              <lable htmlFor="metaTitle" className="font-bold text-xl pt-5">
                Enter meta title
              </lable>
              <input
                id={"metaTitle"}
                placeholder="Enter an image alt tag here...."
                onChange={(e) => setMetaTitle(e.target.value)}
                defaultValue={blogTitle}
                className="border-b-[1px] border-black h-fit w-[70%] outline-none"
              />
              <lable
                htmlFor="metaDescription"
                className="font-bold text-xl pt-5"
              >
                Enter meta description
              </lable>
              <textarea
                id={"metaDescription"}
                placeholder="Enter blog meta description here, make sure to keep it in the range of 150 to 170"
                onChange={(e) => setMetaDescription(e.target.value)}
                minLength={150}
                maxLength={170}
                rows={4}
                className="border-b-[1px] border-black h-fit w-[70%] outline-none resize-none"
              />
              <button
                onClick={uploadHandler}
                className="bg-[#A86549] px-6 py-1 font-bold text-white rounded-lg w-[70%] my-3"
              >
                Upload
              </button>
            </div>
            <div className="p-2">
              <Image
                src={featureMedia}
                alt="2512 blog thumbnail"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          style={{ marginBottom: "1rem" }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
