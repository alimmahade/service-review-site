import React, { useEffect, useState } from "react";

const MyReview = () => {
  const [clientReview, setClientReview] = useState([]);
  console.log(clientReview);
  useEffect(() => {
    fetch("https://as-ph-11-ser.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  return (
    <div>
      <h1>This is my review</h1>
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

export default MyReview;
