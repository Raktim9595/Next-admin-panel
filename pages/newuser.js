import Head from "next/head";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import AddUser from "../components/AddUser";

function newuser() {
  return (
    <div className="font-SansPro">
      <Head>
        <title>Admin || Dashboard</title>
      </Head>
      <TopBar />
      <main className="max-w-screen-2xl mx-auto bg-gray-50 shadow-md">
        <div className="flex">
          <Sidebar />
          <div className="main-container px-8 py-6 h-[91vh] overflow-y-scroll">
            <AddUser />
          </div>
        </div>
      </main>
    </div>
  )
}

export default newuser;
