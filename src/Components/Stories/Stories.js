import React from 'react';
import Posts from '../Posts/Posts';
import './Stories.css';
const Stories = () => {
    return (
        <>
            <Posts></Posts>
            <div class="row row-cols-1 row-cols-md-3 mt-5 g-4 container mx-auto">
  <div class="col">
    <div class="card">
      <img src="/images/cheaf2.webp" style={{height:'300px'}}  class="card-img-top" alt=""/>
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
      <img src="https://preview.colorlib.com/theme/feliciano/images/image_5.jpg.webp" style={{height:'300px'}}  class="card-img-top" alt="..."/>
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
      <img src="https://preview.colorlib.com/theme/feliciano/images/image_6.jpg.webp" style={{height:'300px'}} class="card-img-top" alt="..."/>
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
{/* pagination */}
<div style={{marginLeft:'550px',color:'#c7a97e'}}>
<nav aria-label="Page navigation example text-center">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
      
</div>
      
      
        </>
    );
};

export default Stories;