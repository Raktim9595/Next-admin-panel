function WidgetLg() {
  return (
    <div className="widgetLg-container bg-white rounded-md shadow-md p-4">
      <h3 className="text-3xl capitalize font-semibold mb-3">latest transactions</h3>
      <div className="grid justify-items-center content-center grid-flow-row-dense grid-cols-4 gap-x-2 gap-y-4">
        <div><span className="font-bold text-lg">Customer</span></div>
        <div><span className="font-bold text-lg">Date</span></div>
        <div><span className="font-bold text-lg">Amount</span></div>
        <div><span className="font-bold text-lg">Status</span></div>
        {/* first row */}
        <div className="flex items-center space-x-2">
          <img src="https://all-images.net/media/posts/66/4k-iphone-itachi-wallpaper-91.jpg" alt="Itachi" className="h-10 w-10 rounded-full object-cover" />
          <p className="font-semibold">Itachi Uchiha</p>
        </div>
        <div><span className="text-lg text-gray-500">10 Aug, 2021</span></div>
        <div><span className="text-lg text-gray-500">$150.99</span></div>
        <button className="btn-approved justify-self-stretch">Approved</button>
        {/* secoand row */}
        <div className="flex items-center space-x-2">
          <img src="https://all-images.net/media/posts/66/4k-iphone-itachi-wallpaper-91.jpg" alt="Itachi" className="h-10 w-10 rounded-full object-cover" />
          <p className="font-semibold">Itachi Uchiha</p>
        </div>
        <div><span className="text-lg text-gray-500">10 Aug, 2021</span></div>
        <div><span className="text-lg text-gray-500">$150.99</span></div>
        <button className="btn-declined justify-self-stretch">Declined</button>
        {/* third row */}
        <div className="flex items-center space-x-2">
          <img src="https://all-images.net/media/posts/66/4k-iphone-itachi-wallpaper-91.jpg" alt="Itachi" className="h-10 w-10 rounded-full object-cover" />
          <p className="font-semibold">Itachi Uchiha</p>
        </div>
        <div><span className="text-lg text-gray-500">10 Aug, 2021</span></div>
        <div><span className="text-lg text-gray-500">$150.99</span></div>
        <button className="btn-pending justify-self-stretch">Pending</button>
        {/* fourth row */}
        <div className="flex items-center space-x-2">
          <img src="https://all-images.net/media/posts/66/4k-iphone-itachi-wallpaper-91.jpg" alt="Itachi" className="h-10 w-10 rounded-full object-cover" />
          <p className="font-semibold">Itachi Uchiha</p>
        </div>
        <div><span className="text-lg text-gray-500">10 Aug, 2021</span></div>
        <div><span className="text-lg text-gray-500">$150.99</span></div>
        <button className="btn-approved justify-self-stretch">Approved</button>
      </div>
    </div>
  )
}

export default WidgetLg;
