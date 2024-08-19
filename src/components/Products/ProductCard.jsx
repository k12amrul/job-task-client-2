import React from 'react';

const ProductCard = ({product}) => {
    console.log( product )
 
        const { image  ,price , brand ,name ,category } = product
  
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
            <img
            // src='https://media.istockphoto.com/id/1929345158/photo/modern-apartment-with-large-windows.jpg?s=1024x1024&w=is&k=20&c=BPU6q-8EwLIfG63zB0V-pYyxFbtPxNtfFFs8cLchyn8='
                src={image}
                alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title ">{name} </h2>
            <h2 className=" text-3xl ">{brand} </h2>
            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <h4>{ category} </h4>
            price $ {price}
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default ProductCard;