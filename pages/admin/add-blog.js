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

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [blogTitle, setTitle] = useState("");
  const [blogHtml, setBlogHtml] = useState("");
  const [image, setImage] = useState(
    "https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/profile.jpg"
  );

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

  const addImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Log the image data to the console
        console.log({
          name: file.name,
          type: file.type,
          size: file.size,
          dataUrl: reader.result, // Fix the typo here
        });
      };

      // Set the image state with the correct data
      setImage(reader.result);

      // Read the selected image file as a data URL
      reader.readAsDataURL(file);
    }
  };
  const uploadHandler = () => {
    try {
      setBlogHtml(
        "" + draftToHtml(convertToRaw(editorState.getCurrentContent()))
      );
      console.log(convertToRaw(editorState.getCurrentContent()).blocks[0].text);
      axios
        .post(
          `http://localhost:4545/api/admin/upload-blog`,
          {
            title: blogTitle,
            bloghtml: blogHtml,
            blogsummary: convertToRaw(editorState.getCurrentContent()).blocks[0]
              .text,
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
          } else {
            throw new Error(res.data.message);
          }
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    console.log(blogTitle);
  }, [blogHtml, blogTitle]);

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
      {/* {image && (
        <Image src={image} alt="" width={400} height={500} id="image-preview" />
      )} */}
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
