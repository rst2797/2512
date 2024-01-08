import Image from "next/image";
import React from "react";
import Link from "next/link";

const SectionSix = () => {
  return (
    <div className="bg-[url('https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/Mask+group.png')] p-4 lg:px-24">
      <div className="mx-auto max-w-[1450px] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <table>
        <tbody>
          <tr className="border-b-[1px] border-black">
            <td className="p-2 drop-shadow-xl">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_1.png"
                alt=""
                width={200}
                height={200}
              />{" "}
            </td>
            <td className="p-2 drop-shadow-xl border-x-[1px] border-black">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_2.png"
                alt=""
                width={200}
                height={200}
              />{" "}
            </td>
            <td className="p-2 drop-shadow-xl">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_3.png"
                alt=""
                width={200}
                height={200}
              />{" "}
            </td>
          </tr>
          <tr className="border-b-[1px] border-black">
            <td className="p-2 drop-shadow-xl">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_4.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
            <td className="p-2 drop-shadow-xl border-x-[1px] border-black">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_5.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
            <td className="p-2 drop-shadow-xl">
              {" "}
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_6.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
          </tr>
          <tr className="">
            <td className="p-2 drop-shadow-xl">
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_7.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
            <td className="p-2 drop-shadow-xl border-x-[1px] border-black">
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/Post_8.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
            <td className="p-2 drop-shadow-xl">
              <Image
                src="https://s3.eu-north-1.amazonaws.com/web.pacchisbarah/images/home/grid/post_9.png"
                alt=""
                width={200}
                height={200}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="lg:w-[40%]">
        <h2 className="font-sansita-regular !text-[2.5rem] !font-light lg:!text-[3rem] text-[#2F2E2D] !leading-[4rem] text-center">
          Dress with purpose, share with pride.
        </h2>
        <p className="text-center py-2 font-semibold text-sm lg:text-[1.5rem] lg:py-[2.5rem] text-[#2F2E2D] ">
          Connect, click & change.
        </p>
        <Link href="https://instagram.com/pacchisbarah?igshid=MTNiYzNiMzkwZA==" >
          <a target="_blank">
            <h2 className="font-sansita-regular !text-[2.5rem] !font-light lg:!text-[2.5rem] text-[#2F2E2D] text-center underline">
              @pacchisbarah
            </h2>
          </a>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default SectionSix;
