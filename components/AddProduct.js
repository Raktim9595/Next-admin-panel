function AddProduct() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="capitalize text-3xl font-semibold">add product</h2>
      <div>
        <h4 className="text-gray-400 font-semibold text-lg mb-2">Image</h4>
        <div className="flex items-center space-x-3">
          <button className="bg-gray-100 border border-gray-400 rounded-sm px-3 py-1">choose file</button>
          <p>No files choosen</p>
        </div>
      </div>
      <div>
        <h4 className="text-gray-400 font-semibold text-lg mb-2">Name</h4>
        <input type="text" placeholder="name" className="text-gray-500 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none w-72" />
      </div>
      <div>
        <h4 className="text-gray-400 font-semibold text-lg mb-2">Stock</h4>
        <input type="text" placeholder="123" className="text-gray-500 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none w-72" />
      </div>
      <div>
        <h4 className="text-gray-400 font-semibold text-lg mb-2">Active</h4>
        <select name="active" id="active" className="text-gray-500 border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none w-72">
          <option selected>Yes</option>
          <option>No</option>
        </select>
      </div>
      <button className="btn-update w-40">Create</button>
    </div>
  )
}

export default AddProduct;
