import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ProductCard from './ProductCard';

const Products = () => {

    // const products =useLoaderData( )
    // console.log( products )
    const { count } = useLoaderData()


    const [asc, setAsc] = useState(true)
    const [ search ,setSearch] =useState('')
    const [products, setproducts] = useState([])

    const [itemPerPage, setItemPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    // console.log(count)


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

   

    // const axiosPublic = useAxiosPublic()

    const handleSearch =( e ) => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch( text)
        console.log(text  )

    }

    useEffect(() => {

        //    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/products?page=${currentPage}&size=${itemPerPage}&sort=${asc ? "asc" : "desc"}`)
        fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/products?page=${currentPage}&size=${itemPerPage}&search=${search}&sort=${asc ? "asc" : "desc"} `)
            // fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/products?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                // console.log( data  )
                setproducts(data)

            })

    }, [currentPage, itemPerPage, asc ,search    ])



    return (

        <div>

            <form onSubmit={handleSearch} action="">

                {/* <label className="input input-bordered flex items-center gap-2">
                    <input  type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <button> ffff</button>
                </label> */}
                <input type="text" name="search" placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />

                <input className=' btn btn-primary' type="submit" value="search" />

            </form>
            <div className=''>

                {/* grid md:grid-cols-2 */}


           

            </div>

            <div className=' mt-6'>
                <button onClick={() => setAsc(!asc)} className=' btn btn-secondary '>
                    {asc ? "Price high to low " : "Price low to high "}  </button>

            </div>

            <div className=' mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>


                {
                    // products?.slice(0,6).map( (product , ix)  => 
                    products?.map((product, ix) =>
                       <ProductCard
                       product={product}
                       key={ix}
                       > </ProductCard>
                    )

                }
            </div>


            <div className="pagination my-6  mt-10 flex space-x-4   justify-center items-center  ">
                <p>currentPage :   {currentPage} </p>

                <button onClick={handlePrev} className=' btn'> prev </button>
                {
                    pages?.map(page => <button

                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page && 'bg-orange-300 py-2 px-4 border'}
                        key={page}
                    > {page} </button>)
                }
                <button onClick={handleNext} className=' btn '> next  </button>
                <select value={itemPerPage} onChange={handlePagination} name="" id="">
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>

                </select>
            </div>
        </div>
    );
};

export default Products;