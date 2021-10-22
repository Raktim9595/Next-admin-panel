import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import FeaturedInfo from '../components/FeaturedInfo';
import Chart from '../components/Chart';
import { data } from "../data";
import WidgetSm from '../components/WidgetSm';
import WidgetLg from '../components/WidgetLg';

export default function Home() {
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
            <FeaturedInfo />
            {/* chart of users  */}
            <div className="shadow-md">
              <Chart data={data} title="user analytics" dataKey="Active User" grid={true} />
            </div>
            {/* widgets  */}
            <div className="flex mt-8 space-x-4">
              <WidgetSm />
              <WidgetLg />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
