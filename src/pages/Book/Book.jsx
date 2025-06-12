import React from "react";
import { IoIosStarHalf } from "react-icons/io";

const Book = ({ singleBook }) => {
    const {bookName, author, image, rating, category, tags, yearOfPublishing, publisher} =singleBook
  return (
    <div className="card bg-base-100 w-[374px] h-[482px] shadow-sm">
      <figure className="p-10 bg-gray-200 mx-auto rounded-3xl mt-3 w-[326px] h-[230px]">
        <img
        className="h-[166px] w-[101.68px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-8">
             {
            tags.map(tag=><button className="btn">{tag}</button>)
        }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="font-medium">
          Book By : {publisher}
        </p>
          <div className="divider divider-secondary font-bold">BoiPoka</div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">{rating} <IoIosStarHalf /></div>
        </div>
      </div>
    </div>
  );
};

export default Book;
