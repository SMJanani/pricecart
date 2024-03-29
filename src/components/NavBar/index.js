import Cart from "../Cart";

const Navbar = (props) => {
    // console.log("nav", props.cartItems)
    return(
        // <!-- Navigation-->
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="/"> Shop by choice</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">All Products</a></li>
                                <li><a className="dropdown-item" href="/">Popular Items</a></li>
                                <li><a className="dropdown-item" href="/">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <Cart cartItems = {props.cartItems} products = {props.products} setCartItems = {props.setCartItems} />
                </div>
            </div>
        </nav>

    )
}
export default Navbar;