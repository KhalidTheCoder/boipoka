import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-center items-center p-16 w-full'>
            <div>
                <h1>Books to freshen up your bookshelf</h1>
                <button className='btn btn-primary'>View The List</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;