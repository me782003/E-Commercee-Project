import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetails from '../../components/Products/ProductDetails'
import RateContainer from './../../components/Rate/RateContainer';
import CardProductsContainer from '../../components/Products/CardProductsContainer';
import ViewHoomeProductHook from '../../pojectHooks/products/view-home-products.hook';
import ViewProductDetailsHook from '../../pojectHooks/products/view-product-details-hook';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/Products/ProductGallery';

import lab from '../../images/labtop.png'
import ReactImageMagnify from 'react-image-magnify';


const ProductDetailsPage = () => {

  // const [items] = ViewHoomeProductHook();

  const {id} = useParams();

  const [item , images, cat, brand, prod, loading ] = ViewProductDetailsHook(id);


  if (prod)
  var items = prod.slice(0, 6);

  if(item){
    var rateAvg = item.ratingsAverage ;
    var rateQty = item.ratingsQuantity;
  }

  return (
    <div style={{minHeight: '100vh'}}> 
     <CategoryHeader/>
     <Container fluid>
       <ProductDetails />
       <RateContainer rateAvg={rateAvg} rateQty={rateQty}/>
     </Container>
      
        <CardProductsContainer products = {items}  title="منتجات قد تعجبك"/>
    </div>
  )
}

export default ProductDetailsPage
