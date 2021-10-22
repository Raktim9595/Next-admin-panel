import Head from "next/head";
import ProductDetail from "../../components/ProductDetail";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { productRows } from "../../data";

function productDetail({ id }) {
 

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
          <ProductDetail />
        </div>
      </div>
    </main>
  </div>
  )
}

export default productDetail;

export function getStaticPaths() {
  const paths = productRows.map(user => {
    return {
      params: { productId: user.id.toString() }
    }
  })
  return {
    fallback: false,
    paths,
  }
}

export function getStaticProps(context) {
  const {productId} = context.params;
  return {
    props: {
      id: productId,
    }
  }
}
