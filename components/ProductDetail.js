import Chart from "./Chart";
import { productData } from "../data";
import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  return (
    <div className="mt-3">
      <div className="flex justify-between mb-5">
        <h2 className="capitalize font-semibold text-3xl">edit user</h2>
        <button onClick={() => router.push("/newproduct")} className="btn-approved w-28">Create</button>
      </div>
      <div className="flex space-x-5 pr-5">
        <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out userEdit-container">
          <Chart data={productData} dataKey="Sales" title="Sales Perfomance" grid={false} />
        </div>
        <div className="bg-white rounded-md px-4 py-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-center">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="apple air pods" className="h-11 w-11 rounded-full object-cover" />
              <p className="font-semibold text-lg capitalize">apple airpods</p>
            </div>
            <div className="flex justify-between pl-4 pr-16">
              <p className="font-semibold">Id: </p>
              <p className="text-gray-500 text-lg">123</p>
            </div>
            <div className="flex justify-between pl-4 pr-16">
              <p className="font-semibold">Sales: </p>
              <p className="text-gray-500 text-lg">999</p>
            </div>
            <div className="flex justify-between pl-4 pr-16">
              <p className="font-semibold">Active: </p>
              <p className="text-gray-500 text-lg">Yes</p>
            </div>
            <div className="flex justify-between pl-4 pr-16">
              <p className="font-semibold">In Stock: </p>
              <p className="text-gray-500 text-lg">Yes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-5 mt-8 bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex justify-between">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-gray-400 capitalize mb-2">product name</h3>
            <div>
              <input type="text" name="airpod" placeholder="Apple Airpod" className="text-gray-600 focus:outline-none border-b w-60 border-gray-400" />
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 capitalize mb-2">In stock</h3>
            <select name="stock" id="stock" className="border border-gray-400 w-60 rounded-md px-3 py-1 focus:outline-none">
              <option selected>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <h3 className="text-gray-400 capitalize mb-2">active</h3>
            <select name="active" id="active" className="border border-gray-400 w-60 rounded-md px-3 py-1 focus:outline-none">
              <option selected>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pr-10 py-5">
            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="user" className="h-32 w-32 rounded-md object-cover" />
            <button className="btn-update capitalize self-stretch">update</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
