import { NotificationsNone, Settings, Language } from '@material-ui/icons';
import { Badge, IconButton } from '@material-ui/core';
import { useRouter } from "next/router";

function TopBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-8 py-2 sticky top-0 z-50 bg-white shadow">
      <p onClick={() => router.push("/")} className="text-4xl tracking-wide text-blue-600 cursor-pointer">Raktim </p>
      <div>
        <div className="flex space-x-3 items-center"> {/*top right icons */}
          <div className="flex items-center space-x-3">
            <IconButton className="h-10 w-10">
              <Badge badgeContent={1} color="error">
                <NotificationsNone className="text-gray-700" />
              </Badge>
            </IconButton>
            <IconButton className="h-10 w-10">
              <Badge badgeContent={4} color="error">
                <Language className="text-gray-700" />
              </Badge>
            </IconButton>
            <IconButton className="h-10 w-10">
              <Settings className="text-gray-700" />
            </IconButton>
          </div>
          <div className="h-11 w-11 rounded-full bg-purple-600 flex justify-center items-center cursor-pointer">
            <img src="https://res.cloudinary.com/dulnbshak/image/upload/v1634012114/YelpCamp/me-project_k6q0rc.png" alt="Raktim" className="h-9" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
