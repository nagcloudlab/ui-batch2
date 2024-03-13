

export function CartBadge(props) {
    const { cart } = props;
    return (
        <div className="mt-2 card card-body">
            <i className="fa fa-shopping-cart"></i>
            <span className="">{cart.length} item(s) in cart</span>
        </div>
    )
}