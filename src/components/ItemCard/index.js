import { useEffect } from 'react';
const ItemCard = ({id, saleBadge, title, ratings, oldPrice, price, type, inCart, setCartItems, cartItems, products,setProducts }) => { 
   // console.log(id, saleBadge, title, ratings, oldPrice, price, type, inCart, setCartItems, cartItems );
    ratings = Number(ratings);
    var arrRating = Array.from({ length: `${ratings}` }, (_, i) => i+1);
    
    const addProduct = (e) => {
        var cartid = e.target.id.split("-");
        cartid = cartid[1];
       // console.log(cartid);
        setCartItems( cartItems + 1 )  
        var remid = 'rembtn-'+cartid;
        let r = document.getElementById(remid);
        r = r.parentElement;
        r.style.display = "block";
        let idx = products.findIndex( el => el.id === cartid ) 
        var copy = [...products]
        copy[idx].inCart = true;
        products[idx].inCart = true; 
        setProducts([...copy]);
        var el = e.target;
        el.classList.add('disabled');
      //  console.log("push", products);
    }

   const removeProduct = (e) => {
    var remid = e.target.id;
        let r = document.getElementById(remid)
        r = r.parentElement;
        r.style.display = "none";
    var cartid = e.target.id.split("-");
    cartid= cartid[1]
    //console.log(cartid);
    let idx = products.findIndex( el => el.id === cartid ) 
    var copy = [...products]
    copy[idx].inCart = false;
    products[idx].inCart = false; 
    let btn = 'itembtn-'+ cartid;
    let btnel = document.getElementById(btn);
    btnel.classList.remove('disabled') 
    setCartItems( cartItems - 1 )  
    setProducts([...copy]);
  // console.log("remove",products);
  }
   
  useEffect ( ( ) => {

  },[products]);
    return ( 

        <div className="col mb-5">
                        <div className="card h-100">
                            {/* // <!-- Sale badge--> */}
                            { saleBadge && <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div> }
                            {/* // <!-- Product image--> */}
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            {/* // <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{title}</h5>
                                    {/* <!-- Product reviews--> */}
                                   { (ratings > 0) && 
                                    <div className="d-flex justify-content-center small text-warning mb-2"> 
                                    { arrRating.map( (el) => { return <div key = {el} className="bi-star-fill"></div>} )}                                      
                                    </div>
                                   }
                                    {/* <!-- Product price--> */}
                                   { (oldPrice !== "") && <span className="text-muted text-decoration-line-through"> {oldPrice} </span>} 
                                    {price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                { (type === "view") && <div className="text-center"><button className="btn btn-outline-dark mt-auto" id={`itembtn-${id}`} href="/">View options</button></div> }

                                { (type === "add") &&  
                                 <div className="text-center"><button className="btn btn-outline-dark mt-auto" id={`itembtn-${id.split("-")[1]}`} title={title}  onClick={addProduct}> Add To Cart </button></div> }

                                {<div className="text-center remove-btn">
                                    <button className="btn btn-outline-dark my-2 mx-1" id={`rembtn-${id.split("-")[1]}`} title={title}  onClick={removeProduct}>  Remove from Cart </button></div> }
                                
                            </div>
                        </div>
                    </div>
    )
}
export default ItemCard;