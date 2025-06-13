import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;
  const handleMarkAsRead = (id) => {
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    toast("Wow so easy!");
    addToStoreDB(id);
  };
  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <ToastContainer />
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-success mr-2"
      >
        Mark As Read
      </button>

      <button className="btn btn-primary ml-2">Add To Wish List</button>
    </div>
  );
};

export default BookDetails;
