import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
       <div className="hero bg-base-200 min-h-screen px-24">
  <div className="hero-content justify-around items-center flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='flex flex-col gap-8'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn btn-primary w-44">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;