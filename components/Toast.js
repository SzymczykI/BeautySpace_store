
const Toast = ({ msg, handleShow, bgColor }) => {
    return (
        <div className={`toast show position-fixed bottom-0 end-0 m-2 p-2 text-light ${bgColor}`}
            style={{ minWidth: '280px' }} >

            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="me-auto text-light">{msg.title}</strong>
                <button type="button" onClick={handleShow} className="btn-close ml-2 mb-1 text-light " data-bs-dismiss="toast" aria-label="Close"></button>
            </div>

            <div className="toast-body">{msg.msg}</div>

        </div>
    )
}

export default Toast