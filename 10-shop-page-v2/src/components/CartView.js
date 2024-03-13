


export function CartView(props) {
    const { cart } = props;
    return (
        <div className="card mt-3">
            <div className="card-header">Items in cart</div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <tbody>
                        {
                            cart.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>&#8377;{item.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
