import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextApi } from "../../Context/AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(ContextApi);
  console.log(user?.uid);
  const { displayName, email, photoURL, uid } = user;
  // console.log(user);
  // const addreview = (event) => {
  //   event.preventdefault();
  //   console.log(event);
  // };
  const handleAddReview = (event) => {
    event.preventDefault();
    // console.log(event);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
    const reviewText = form.review.value;
    const reviewInfo = {
      userimg: img,
      username: name,
      useremail: email,
      userreview: reviewText,
    };
    fetch("https://as-ph-11-ser.vercel.app/review", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // console.log(reviewInfo);
  };
  const [clientReview, setClientReview] = useState([]);
  console.log(clientReview);
  useEffect(() => {
    fetch("https://as-ph-11-ser.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  return (
    <div>
      {user?.uid ? (
        <div>
          <form onSubmit={handleAddReview} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                defaultValue={email}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                defaultValue={displayName}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                defaultValue={photoURL}
                name="img"
                type="text"
                placeholder="img link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">type review</span>
              </label>
              <textarea
                name="review"
                className="textarea textarea-primary h-0"
                placeholder="type review"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Add Review</button>
            </div>
          </form>
        </div>
      ) : (
        <Link to="/login">
          <button>Log in</button>
        </Link>
      )}

      <h2 className="bg-secondary text-4xl font-semibold text-white m-4 p-4">
        Coustomer Review
      </h2>

      <div className="overflow-x-auto w-full">
        {clientReview.map((userReview) => (
          <div key={userReview._id}>
            <div className="flex justify-between my-9 border-2">
              <div className="flex">
                <img src={userReview.userimg} alt="" />
                <span>
                  <p>{userReview.username}</p>
                  <p>{userReview.useremail}</p>
                </span>
              </div>
              <div>
                <p>{userReview.userreview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
