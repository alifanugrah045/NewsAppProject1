import { Button } from "bootstrap";
import React from "react";


const CardComponents = ({author,title,description}) => {
  return (
    <div className="container mt-4">
      {/* card */}
      <div class="row">
        <div class="col-sm-6">
          <div class="card text-start">
            <div class="card-body">
              <h6 style={{color: "grey"}}>{author}</h6>
              <h4 class="card-title">{title}</h4>
              <p class="card-text">{description}</p>
             <button className="btn btn-primary">News Page</button>
             <button className="btn btn-success ms-2">Save</button>
            </div>
          </div>
        </div>
        {/* <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div> */}
      </div>
      {/* card */}
    </div>
  );
};

export default CardComponents;
