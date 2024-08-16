import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Products = () => {

    // const products =useLoaderData( )
    // console.log( products )
    const { count } = useLoaderData()

    
    
    const [apartments, setApartments] = useState()

    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    console.log(count)


    const numberOfPage = Math.ceil(count / itemPerPage)
    // console.log(numberOfPage)

    // 
    const pages = [...Array(numberOfPage).keys()]
    // console.log(pages)

    const handlePagination = (e) => {
        // e.preventDefault
        const val = parseInt(e.target.value)
        setItemPerPage(val)
        setCurrentPage(0)
        // console.log(itemPerPage)


    }
    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const axiosPublic = useAxiosPublic()
   

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/products?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setApartments(data)

            })

    }, [currentPage, itemPerPage])



    return (

        <div>

       

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
       
           
           {
            // products?.slice(0,6).map( (product , ix)  => 
                apartments?.map((apartment, ix) =>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
               )

           }
        </div>


        <div className="pagination my-6  mt-10 flex space-x-4   justify-center items-center  ">
                <p>currentPage :   {currentPage } </p>

                <button onClick={handlePrev} className=' btn'> prev </button>
                {
                    pages?.map(page => <button

                        onClick={() => setCurrentPage(page )}
                        className={ currentPage === page && 'bg-orange-300 py-2 px-4 border' }
                        key={page}
                    > {page} </button>)
                }
                <button onClick={handleNext} className=' btn '> next  </button>
                <select value={itemPerPage} onChange={handlePagination} name="" id="">
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="7">7</option>

                </select>
            </div>
        </div>
    );
};

export default Products;