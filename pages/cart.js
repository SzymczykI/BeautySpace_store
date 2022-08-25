import Head from 'next/head'
import { useContext } from 'react'
import { DataContext } from '../store/GlobalState'

const Cart = () => {

  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if(cart.length === 0) 
  return <img className="img-responsive w-100" src="/empty_cart.jpg" alt="empty_cart designed by Mamewmy - Freepik.com" />

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>

      <h1>Cart</h1>
    </div>
  )
}

export default Cart