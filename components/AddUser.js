function AddUser() {
  return (
    <div>
      <h3 className="text-3xl capitalize font-semibold mb-4">new user</h3>
      <div className="grid gap-4 grid-flow-row-dense grid-cols-2 pr-24">
        <div>
          <p className="text-gray-400 capitalize mb-2">Username</p>
          <input type="text" placeholder="username" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">full name</p>
          <input type="text" placeholder="Full Name" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">email</p>
          <input type="email" placeholder="Email" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">password</p>
          <input type="password" placeholder="password" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">phone</p>
          <input type="number" placeholder="Number" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none pl-5 pr-1 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">address</p>
          <input type="text" placeholder="Address" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" />
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">Gender</p>
          <select name="gender" id="gender" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <p className="text-gray-400 capitalize mb-2">Active</p>
          <select name="gender" id="gender" className="text-gray-500 border border-gray-500 rounded-md focus:outline-none px-5 py-1.5 w-full" >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="self-center justify-items-center">
          <button className="btn-update w-28 capitalize">create</button>
        </div>
      </div>
    </div>
  )
}

export default AddUser;
