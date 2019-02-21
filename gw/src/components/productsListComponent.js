import React, { Component } from 'react';
import '../App.css';
import ProductTile from './productTileComponent';
import axios from 'axios';
import CustomCarousel from './customCarouselComponent';
import resData from '../data/response.json';

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList : [],
            currentProduct :{}
        }
    }
    
    parentFun = ((e,product) => {
        e.preventDefault(); 
        this.setState({currentProduct:product,showModal:true});
    })
      
    hideModal = () => {
        console.log("Hello")
        this.setState({ showModal: false });
    }
    componentDidMount(){
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
        })
        .then((response) => {
            response  =   resData ;
            this.setState({productList:response.groups});
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                {this.state.productList.map(productDetails=>{
                    return (  
                        <div className=" col-12 col-md-6 col-lg-4"  key={productDetails.id}>
                            <ProductTile product={productDetails} productClicked = {this.parentFun}/>     
                        </div>             
                    )
                })
                }
            </div>  
            {(this.state && this.state.currentProduct && Object.keys(this.state.currentProduct).length > 1) ? <CustomCarousel show = {this.state.showModal} handleClose={this.hideModal} productImages={this.state.currentProduct.images}/> : null}   
        </div>     
        );
    }
}

export default ProductList;




