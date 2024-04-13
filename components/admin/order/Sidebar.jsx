import React, { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import { LiaTshirtSolid } from "react-icons/lia";
import { FaMailchimp, FaDownload } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import * as XLSX from "xlsx";

const Sidebar = () => {
  const [signOut, setSignOut] = useState(false);
  const exportToExcel = (data) => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    ws["!cols"] = [{ width: 40 }];

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Save the workbook to a file
    XLSX.writeFile(wb, "subscriber_data.xlsx");
  };
  const handleDownload = async () => {
    axios
      .get(`/api/admin/get-subscriber-emails`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your download has been assigned",
            showConfirmButton: false,
            timer: 1500,
          });
          const emails = res.data.emails.map((ele) => [ele.email]);
          exportToExcel(emails);
        } else {
          toast.error("Error Occured! Try Again Later.");
        }
      });
  };
  const router = useRouter();
  return (
    <div className="bg-[#A86549] hidden h-screen w-full md:w-[15vw] rounded-e-2xl fixed top-0 left-0 z-40 lg:flex flex-col justify-between md:py-12">
      <div className="admin-logo text-5xl text-center text-[#F4E9DF] leading-5">
        <h1>2512</h1>
        <small className="uppercase text-xs">PACCHIS BARAH</small>
      </div>
      <div className="flex flex-col justify-between px-8 font-bold text-[#F4E9DF]">
        <ul>
          <li>
            <Link href="/">
              <a className="flex items-center">
                <FaHome className="text-2xl mx-2" />
                2512 | Home
              </a>
            </Link>
          </li>
          <li className="mt-12">
            <Link href="/admin/orders">
              <a className="flex items-center">
                <MdBookmarkBorder className="text-2xl mx-2" />
                Orders
              </a>
            </Link>
          </li>
          <li className="flex items-center pt-10">
            <Link href="/admin/canceled_orders">
              <a className="flex items-center">
                <RiContactsBookLine className="text-2xl mx-2" />
                Canceled Orders
              </a>
            </Link>
          </li>
          <li className="mt-8">
            <Link href="/admin/products">
              <a className="flex items-center">
                <LiaTshirtSolid className="text-2xl mx-2" />
                Edit Products
              </a>
            </Link>
          </li>
          <li className="my-4 flex items-center">
            {/* <button href="/admin/enquiries">
              <a className="flex items-center">Subscribers</a>
            </button> */}
            <button className="download-button font-bold text-[#F4E9DF]">
              <div>
                <span className="flex justify-between w-full">
                  <FaMailchimp className="text-2xl text-white" />
                  <p className="overflow-hidden text-ellipsis mr-2">Newsletter</p>
                </span>
              </div>
              <div>
                <span
                  className="flex justify-between"
                  onClick={() => {
                    handleDownload();
                  }}
                >
                  <FaDownload className="text-white text-2xl" />
                  <p>Download</p>
                </span>
              </div>
            </button>
          </li>
          <li className="flex items-center">
            <Link href="/admin/enquiries">
              <a className="flex items-center">
                <RiContactsBookLine className="text-2xl mx-2" />
                Enquiries
              </a>
            </Link>
          </li>
          <li className="mt-12 flex items-center">
            <Link href="/admin/add-blog">
              <a className="flex items-center">
                <TfiWrite className="text-2xl mx-2" />
                Add Blog
              </a>
            </Link>
          </li>
          <li className="my-12 flex items-center">
            <Link href="/admin/sales-analytics">
              <a className="flex items-center">
                <GrAnalytics className="text-2xl mx-2" />
                Sales Analytics
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            setSignOut(true);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            Cookies.remove("token");
            router.push("/login?destination=/");
          }}
          className="bg-[#F4E9DF] text-[#A86549] w-full mx-2 rounded-lg py-2 font-bold flex justify-center"
        >
          {signOut ? (
            <ThreeDots
              visible={true}
              height="50"
              width="50"
              color="#A86549"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Signout"
          )}
        </button>
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

export default Sidebar;
