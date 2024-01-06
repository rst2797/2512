import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Head from "next/head";
import Sidebar from "../../components/admin/order/Sidebar";
import axios from "axios";
import Image from "next/image";

const AnalyticsReport = ({ deliveredOrders }) => {
  const [salesData, setSalesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  useEffect(() => {
    // Replace this with your actual API call to fetch the sales data
    const fetchData = async () => {
      try {
        // Assuming you have the API endpoint that returns the sales data
        const response = await fetch(
          "/api/admin/sales-analytics?month=January&year=2024&targetedSales=6000"
        );
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales analytics data:", error);
      }
    };
    console.log(deliveredOrders);
    fetchData();
  }, []);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = deliveredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const options = {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 90,
      },
    },
    title: {
      text: `${new Date().getFullYear()} - Pacchis Barah Sales Analytics`,
      align: "left",
    },
    subtitle: {
      text: "Below chart indicates each month's total sales amount",
      align: "left",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
      },
    },
    series: [
      {
        name: "Month's total sales",
        data: salesData,
      },
    ],
  };

  return (
    <div className="!transition-none w-full">
      <Head>
        <title>2512 Sales Analytics Report</title>
        <meta
          name="description"
          content="View the 3D donut sales analytics report for total sales."
        />
        {/* Add more meta tags as needed */}
      </Head>
      <Sidebar />
      <div className="sticky right-0 w-full z-30 bg-white top-0 flex items-center justify-center">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <h1 className="text-[10rem] font-extrabold text-[#F4E9DF]">2512</h1>
        <Image src="/icons/tshirt.gif" width={100} height={100} alt="" />
      </div>
      <div className="w-full h-48 pl-[15vw] relative z-20">
        <table className="w-full border-collapse border border-[#a4a4a4]">
          <thead>
            <tr className="bg-[#F4E9DF] border border-[#a4a4a4]">
              <th className="py-2 px-4 text-left">Order</th>
              <th className="py-2 px-4 text-left w-[30%]">Product</th>
              <th className="py-2 px-4 text-left w-[30%]">Details</th>
              <th className="py-2 px-4 text-left">Payment Method</th>
            </tr>
          </thead>
          {currentOrders.map((ele, orderIndex) => (
            <tbody key={ele._id}>
              {ele.items.map((item, itemIndex) => (
                <tr
                  key={item.id}
                  className={`border border-[#a4a4a4] ${
                    (orderIndex + itemIndex) % 2 === 0
                      ? "bg-[#F4E9DF]"
                      : "bg-white"
                  }`}
                >
                  <td className="py-2 px-4">
                    {orderIndex + 1}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        width={50}
                        height={80}
                        className="h-10 w-10 object-cover mr-2"
                      />
                      <div className="px-2">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-gray-500 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <p>{`Size: ${item.size}`}</p>
                    <p>{`Quantity: ${item.quantity}`}</p>
                    <p>{`Price: ₹${item.price}`}</p>
                    <p>{`Total: ₹${item.itemTotal}`}</p>
                  </td>
                  <td className="py-2 px-4">{ele.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
        <div className="py-4 flex justify-center">
          {Array.from(
            { length: Math.ceil(deliveredOrders.length / ordersPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`mx-1 px-3 py-1 border rounded text-[#F4E9DF] ${
                  currentPage === index + 1 ? "bg-[#A86549]" : "bg-[#a4a4a4]"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReport;

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4545/api/admin/delivered-orders"
    );
    return {
      props: {
        error: false,
        deliveredOrders: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
        deliveredOrders: [],
      },
    };
  }
};