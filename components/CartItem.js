import Link from 'next/link'
import { decrease, increase } from '../store/Actions'

const CartItem = ({ item, dispatch, cart }) => {
    return (
        <tr>
            <td style={{ width: '100px', overflow: 'hidden' }}>
                <img src={item.images[0].url} alt={item.images[0].url}
                    className="img-thumbnail w-100"
                    style={{ minWidth: '80px', height: '80px' }} />
            </td>

            <td style={{ minWidth: '200px' }} className="align-middle">
                <h5 className="text-capitalize">
                    <Link href={`/product/${item._id}`}>
                        <a>{item.title}</a>
                    </Link>
                </h5>
                <h6>{item.description}</h6>
                <h6>${item.quantity * item.price}</h6>
            </td>

            <td className="align-middle" style={{ minWidth: '150px' }}>
                <button onClick={() => dispatch(decrease(cart, item._id))}
                    className="btn btn-outline-secondary"
                    disabled={item.quantity === 1 ? true : false} > - </button>
                <span className="px-3">{item.quantity}</span>
                <button onClick={() => dispatch(increase(cart, item._id))}
                    className="btn btn-outline-secondary"
                    disabled={item.quantity === item.inStock ? true : false} > + </button>
            </td>

            <td className="align-middle" style={{ minWidth: '50px', cursor: 'pointer' }}>
                <i className="far fa-trash-alt" aria-hidden="true"
                    style={{ fontSize: '18px' }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => dispatch({
                        type: 'ADD_MODAL',
                        payload: { data: cart, id: item._id, title: item.title }
                    })}></i>
            </td>
        </tr>
    )
}

export default CartItem