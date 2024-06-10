
import React from "react";
import "./recommend.scss";
import RecommendFormList from "./RecommendFormList";

function Recommend() {


  return (
    <div>
      <div className="bg-lime-600 py-10">
        <div className="title">
          <h1>My Recommend</h1>
        </div>

        <div>
          <RecommendFormList />
        </div>
      </div>
    </div>
  );
}

export default Recommend;
