import React from 'react';
import '../App.css';

const  ProductTile   =  (props) => {
    return (    
        <div className="thumbs" onClick={(e)=> {e.preventDefault(); props.productClicked(e,props.product)}}>
            <div  className="product" >
                <div  className="product-image6">
                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                        <img className="card-img-top" height = {props.product.hero.height} width={props.product.hero.width} src={props.product.hero.href} alt="Card image cap"/>
                    </a>
                </div>
                <div  className="product-content">
                    <h3  className="title">{props.product.name}</h3>
                    <div  className="price">
                        ${props.product.priceRange.selling.high}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProductTile;