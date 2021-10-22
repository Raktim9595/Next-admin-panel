import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";
import {useState} from "react";
import Link from "next/link";

function users() {
  const [data, setdata] = useState(userRows);

  const handleDelete = (id) => {
    const newData = data.filter(dt => dt.id !== id);
    setdata(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex space-x-3 items-center">
            <img src={params.row.avatar} alt="" className="h-10 w-10 object-cover rounded-full" />
            <p>{params.row.username}</p>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={ "/users/" + params.row.id }>
              <button className="w-7/12 h-3/4 bg-green-600 text-white rounded-xl mr-3">Edit</button>
            </Link>
            <DeleteOutline onClick={() => handleDelete(params.row.id)} className="text-red-600 cursor-pointer" />
          </>
        );
      },
    },
  ];

  return (
    <div className="font-SansPro">
      <Head>
        <title>Admin || Dashboard</title>
      </Head>
      <TopBar />
      <main className="max-w-screen-2xl mx-auto bg-gray-50 shadow-md">
      <div className="flex">
        <Sidebar />
        <div className="main-container h-[91vh] overflow-y-scroll">
          <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />
        </div>
      </div>
      </main>
    </div>
  )
}

export default users;
