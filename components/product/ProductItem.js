import Link from 'next/link';
import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'


const ProductItem = ({ product }) => {

    const { state, dispatch } = useContext(DataContext);
    const { cart } = state;



    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`}>
                    <a style={{ backgroundColor: '#E2BB66', border: '#E2BB66', flex: 1 }} className="btn  mr-1 m-1">View</a>
                </Link>
                <button style={{ backgroundColor: '#E2BB66', border: '#E2BB66', flex: 1 }}
                    className="btn m1-1 flex-fill"
                    disabled={product.inStock === 0 ? true : false}
                    onClick={() => dispatch(addToCart(product, cart))}>
                    Add to cart
                </button>
            </>
        )
    }

    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={product.images[0].url} className="card-img-top" alt={product.images[0].url} />
            <div className="card-body">
                <h5 className="card-title text-capitalize" title={product.title}>
                    {product.title}
                </h5>
                <p className="card-text" title={product.description}>
                    {product.description}
                </p>

                <div className="row justify-content-between mx-0">
                    <h6 className="text-grey">${product.price}</h6>
                    {
                        product.inStock > 0
                            ? <h6 className="text-grey">In Stock: {product.inStock}</h6>
                            : <h6 className="text-danger">Out Stock</h6>
                    }
                </div>

                <div className="flex-row justify-content-between mx-0">
                    {userLink()}
                </div>
            </div>
        </div>
    )
}

export default ProductItem