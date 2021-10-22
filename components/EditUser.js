import { PersonOutline, CalendarToday, PhoneAndroid, EmailOutlined, LocationSearching } from "@material-ui/icons";
import { useRouter } from "next/router";

function EditUser() {
  const router = useRouter();
  return (
    <div className="mt-3">
      <div className="flex justify-between mb-5">
        <h2 className="capitalize font-semibold text-3xl">edit user</h2>
        <button onClick={() => router.push("/newuser")} className="btn-approved w-28">Create</button>
      </div>
      <div className="flex space-x-3">
        <div className="bg-white rounded-md p-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex-1">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-5">
              <img src="https://images7.alphacoders.com/944/944271.png" alt="user" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">Anna Becker</p>
                <p className="text-sm text-gray-400">Software Engineer</p>
              </div>
            </div>
            <div className="font-semibold text-sm capitalize mb-6 text-gray-500">
              account details
            </div>
            <div className="flex space-x-5 items-center">
              <PersonOutline className="editUser-icons text-gray-700 cursor-pointer" />
              <p className="text-gray-400 text-sm"> annaMaria1033</p>
            </div>
            <div className="flex space-x-5 items-center">
              <CalendarToday className="editUser-icons text-gray-700 cursor-pointer" />
              <p className="text-gray-400 text-sm"> 10/12/2020</p>
            </div>
            <div className="font-semibold mb-6 text-sm capitalize text-gray-500">
              contact details
            </div>
            <div className="flex space-x-5 items-center">
              <PhoneAndroid className="editUser-icons text-gray-700 cursor-pointer" />
              <p className="text-gray-400 text-sm"> 12-34-55659</p>
            </div>
            <div className="flex space-x-5 items-center">
              <EmailOutlined className="editUser-icons text-gray-700 cursor-pointer" />
              <p className="text-gray-400 text-sm">dummy@gmail.com</p>
            </div>
            <div className="flex space-x-5 items-center">
              <LocationSearching className="editUser-icons text-gray-700 cursor-pointer" />
              <p className="text-gray-400 text-sm">Butwal, Nepal</p>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out userEdit-container flex space-x-3 p-4">
          <div className="userEdit-container">
            <h2 className="text-2xl capitalize font-semibold mb-5">edit</h2>
            <div className="flex flex-col space-y-3">
              <div className="border-b-2 w-56">
                <p className="text-sm font-semibold text-gray-500 mb-1 capitalize">username</p>
                <input type="text" className="w-56 focus:outline-none border-none text-gray-500" />
              </div>
              <div className="border-b-2 w-56">
                <p className="text-sm font-semibold text-gray-500 mb-1 capitalize">fullname</p>
                <input type="text" className="w-56 focus:outline-none border-none text-gray-500" />
              </div>
              <div className="border-b-2 w-56">
                <p className="text-sm font-semibold text-gray-500 mb-1 capitalize">email</p>
                <input type="email" className="w-56 focus:outline-none border-none text-gray-500" />
              </div>
              <div className="border-b-2 w-56">
                <p className="text-sm font-semibold text-gray-500 mb-1 capitalize">phone</p>
                <input type="number" className="w-56 focus:outline-none border-none text-gray-500" />
              </div>
              <div className="border-b-2 w-56">
                <p className="text-sm font-semibold text-gray-500 mb-1 capitalize">address</p>
                <input type="text" className="w-56 focus:outline-none border-none text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex-1 py-12 flex flex-col justify-between items-center pr-8">
            <img src="https://wallpaper.dog/large/20479505.jpg" alt="user" className="h-32 w-32 rounded-md object-cover" />
            <button className="btn-update capitalize self-stretch">update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser;
