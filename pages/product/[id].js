import { useState, useContext } from 'react'
import Head from 'next/head'
import { getData } from '../../utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';

const DetailProduct = (props) => {

    const [product] = useState(props.product);
    const [tab, setTab] = useState(0);

    const { state, dispatch } = useContext(DataContext);
    const { cart } = state;

    const isActive = (index) => {
        if (tab === index) return " active";
        return ""
    }

    return (
        <div className="row detail_page">
            <Head>
                <title>Product details</title>
            </Head>
            <div className='col-md-6'>
                <img src={product.images[tab].url} alt={product.images[tab].url}
                    className="d-block img-thumbnail rounded mt-4 h-80 w-100 "
                />

                <div className="row mx-0" style={{ cursor: 'pointer' }} >
                    {product.images.map((img, i) => (
                        <img key={i} src={img.url} alt={img.url}
                            className={`img-thumbnail rounded ${isActive(i)}`}
                            style={{ height: '90px', width: '20%' }}
                            onClick={() => setTab(i)} />
                    ))}
                </div>
            </div>

            <div className='col-md-6'>
                <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="text" style={{ color: '#E2BB66' }}>${product.price}</h5>
                <div className="row justify-content-between mx-0 d-flex">
                    {
                        product.inStock > 0
                            ? <h6 className="text-grey">In Stock: {product.inStock}</h6>
                            : <h6 className="text-danger">Out Stock</h6>
                    }
                </div>
                <div className="my-2">{product.description}</div>
                <div className="my-2">{product.content}</div>
                <button type="button" className="btn btn-dark d-block my-3 px-5"
                    style={{ backgroundColor: '#E2BB66', border: '#E2BB66' }}
                    onClick={() => dispatch(addToCart(product, cart))}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const res = await getData(`product/${id}`);

    return {
        props: {
            product: res.product
        }
    }
}

export default DetailProduct