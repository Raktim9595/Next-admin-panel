import { LineStyle, Timeline, TrendingUp, PermIdentityOutlined, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined, EmailOutlined, ModeCommentOutlined, DynamicFeed, Report, WorkOutline
 } 
from '@material-ui/icons';
import { useRouter } from "next/router";
import Link from "next/link";

function Sidebar() {
  const router = useRouter();

  return (
    <div className="flex-1 h-[91vh] sidebar overflow-y-scroll px-8 py-4 bg-gray-50 border-r-2">
      <div className="flex flex-col space-y-3">
        <div>
          <p className="font-semibold text-gray-400 text-2xl">Dashboard</p>
          <div className="pl-4 flex flex-col space-y-1">
            <div onClick={() => router.push("/")} className="menu-component active-menu">
              <LineStyle />
              <p>Home</p>
            </div>
            <div className="menu-component">
              <Timeline />
              <p>Analytics</p>
            </div>
            <div className="menu-component">
              <TrendingUp />
              <p>Sales</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-400 text-2xl">Quick Menu</p>
          <div className="pl-4 flex flex-col space-y-1">
            <Link href="/users">
              <div className="menu-component">
                <PermIdentityOutlined />
                <p>Users</p>
              </div>
            </Link>
            <div onClick={() => router.push("/products") } className="menu-component">
              <StorefrontOutlined />
              <p>Products</p>
            </div>
            <div className="menu-component">
              <AttachMoneyOutlined />
              <p>Transcations</p>
            </div>
            <div className="menu-component">
              <BarChartOutlined />
              <p>Reports</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-400 text-2xl">Notifications</p>
          <div className="pl-4 flex flex-col space-y-1">
            <div className="menu-component">
              <EmailOutlined />
              <p>Mail</p>
            </div>
            <div className="menu-component">
              <DynamicFeed />
              <p>Feedback</p>
            </div>
            <div className="menu-component">
              <ModeCommentOutlined />
              <p>Messages</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-400 text-2xl">Staff</p>
          <div className="pl-4 flex flex-col space-y-1">
            <div className="menu-component">
              <WorkOutline />
              <p>Manage</p>
            </div>
            <div className="menu-component">
              <Timeline />
              <p>Analytic</p>
            </div>
            <div className="menu-component">
              <Report />
              <p>Report</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
