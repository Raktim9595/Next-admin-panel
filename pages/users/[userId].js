import Head from "next/head";
import EditUser from "../../components/EditUser";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { userRows } from "../../data";

const userDetail = ({ id }) => {
  return (
    <div>
      <Head>
        <title>Admin || Dashboard</title>
      </Head>
      <TopBar />
      <main className="max-w-screen-2xl mx-auto bg-gray-50 shadow-md">
        <div className="flex">
          <Sidebar />
          <div className="main-container px-8 py-4 h-[91vh] overflow-y-scroll">
            <EditUser />
          </div>
        </div>
      </main>
    </div>
  )
};

export default userDetail;

export function getStaticPaths() {
  const paths = userRows.map(user => {
    return {
      params: { userId: user.id.toString() }
    }
  })
  return {
    fallback: false,
    paths,
  }
}

export function getStaticProps(context) {
  const {userId} = context.params;
  return {
    props: {
      id: userId,
    }
  }
}