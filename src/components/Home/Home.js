import React, { useEffect, useState } from 'react';
import HomeInput from '../HomeInput/HomeInput';
import Nav from '../Nav/Nav';

export const Home = () => {
    const [data, setData] = useState("");
   useEffect(() => {
       const storage = JSON.parse(localStorage.getItem("bucketData"));
       setData(storage);
   }, [])
    return (
        <div className="bg-light">
            <Nav />
            <div className="container mt-5">
                <HomeInput />
            </div>
            <div className="container mt-5">
            {
                data &&
                data.map(el => {
                        return (
                            <div class="alert alert-info alert-dismissible fade show" role="alert">
                           Name:............{ el.name }, <span className="ml-5">Price:.................. { el.price}</span>
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        )
                })
            }
            </div>
        </div>
    )
}

export default Home;
