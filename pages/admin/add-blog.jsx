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

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
    setBlogHtml(""+draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <div>
      <div className="flex justify-between mx-[10vw] mt-4">
        <h1 className="flex flex-col text-center font-bold">
          <span className="text-3xl">2512</span>
          <small className="!text-xs">PACCHIS BARAH</small>
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
        <div className="max-w-[60vw]">
          <Editor
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={setEditorState}
            toolbar={{
              options: ["image"],
              image: {
                uploadEnabled: true,
                previewImage: true,
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: "auto",
                  width: "auto",
                },
              },
            }}
          />
        </div>
      </div>
      {image && (
        <Image src={image} alt="" width={400} height={500} id="image-preview" />
      )}
    </div>
  );
};

export default TextEditor;
