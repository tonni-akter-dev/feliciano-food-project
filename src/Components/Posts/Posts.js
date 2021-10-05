import React from 'react';
// import { Card, CardGroup } from 'react-bootstrap';
import './Posts.css'
const Posts = () => {
    return (
        <div>
            <div className=" text-center mb-4">
                <span className="title" style={{ position: 'relative', top: '80px', fontSize: '120px' }}>Blog</span>
                <h1 className="fw-bolder">Recent Posts
                </h1>
            </div>
{/* card */}
<div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
  <div class="col">
    <div class="card">
      <img src="/images/blog1.webp" style={{height:'300px'}}  class="card-img-top" alt=""/>
      <div class="card-body">
        <small class="card-title">Sept. 06, 2019 Admin</small>
     <h6>Taste the delicious foods in Asia</h6>
     <div className="d-flex justify-content-between">
         <small>Read more</small>
         <p><i class="far fa-comment-alt"></i> 3</p>
     </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/blog2.webp" style={{height:'300px'}}  class="card-img-top" alt="..."/>
      <div class="card-body">
        <small class="card-title">Sept. 06, 2019 Admin</small>
     <h6>Taste the delicious foods in Asia</h6>
     <div className="d-flex justify-content-between">
         <small>Read more</small>
         <p><i class="far fa-comment-alt"></i> 3</p>
     </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/images/blog3.webp" style={{height:'300px'}} class="card-img-top" alt="..."/>
      <div class="card-body">
        <small class="card-title">Sept. 06, 2019 Admin</small>
     <h6>Taste the delicious foods in Asia</h6>
     <div className="d-flex justify-content-between">
         <small>Read more</small>
         <p><i class="far fa-comment-alt"></i> 3</p>
     </div>
      </div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Posts;