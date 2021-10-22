import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="flex justify-between space-x-10 items-center">
      <div className="flex flex-col space-y-3 py-5 px-8 flex-1 rounded-lg bg-white shadow-md cursor-pointer">
        <p className="text-2xl">Revanue</p>
        <div className="flex items-center">
          <p className="text-4xl">$2415</p>
          <p className="ml-5 mr-2">-11.4</p>
          <ArrowDownward className="text-red-400 featured-icon" />
        </div>
        <p>compared to last month</p>
      </div>
      <div className="flex flex-col space-y-3 py-5 px-8 flex-1 rounded-lg bg-white shadow-md cursor-pointer">
        <p className="text-2xl">Sales</p>
        <div className="flex items-center">
          <p className="text-4xl">$4460</p>
          <p className="ml-5 mr-2">-4.4</p>
          <ArrowDownward className="text-red-400 featured-icon" />
        </div>
        <p>compared to last month</p>
      </div>
      <div className="flex flex-col space-y-3 py-5 px-8 flex-1 rounded-lg bg-white shadow-md cursor-pointer">
        <p className="text-2xl">Cost</p>
        <div className="flex items-center">
          <p className="text-4xl">$3000</p>
          <p className="ml-5 mr-2">5.6</p>
          <ArrowUpward className="text-green-500 featured-icon" />
        </div>
        <p>compared to last month</p>
      </div>
    </div>
  )
}

export default FeaturedInfo;
