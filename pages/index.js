import { getData } from '../utils/fetchData'
import { useState } from 'react'
import Head from 'next/head'
import ProductItem from '../components/product/ProductItem'

const Home = (props) => {

  const [products, setProducts] = useState(props.products);

  return (
    <div className="home_page">
      <Head>
        <title>Home page</title>
      </Head>
      <div className="products">
        {
          products.length === 0 
          ? <h2>No Products</h2>

          : products.map(product => (
            <ProductItem key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await getData('product');

  return {
    props: {
      products: res.products,
      result: res.result
    }
  }
}

export default Home