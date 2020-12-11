import React from 'react';
import './Ad.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const ad = () => {
    return (
        <div>
            <div className="ad">
            <div class="container">
            <div class="row">
    <div class="col-sm colfirst">
    <h1>Bit by bit</h1>
            <h6>Learn for an hour and develop new skills. Courses from $11.99 through Dec. 11.</h6>
            <input class="form-control mr-sm-2" type="text" name="" placeholder="What do you want to Learn?" id=""/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
    <div class="col-sm">
     
    </div>
    <div class="col-sm">
    
    </div>
  </div>
</div>
            
        </div>
        </div>
    );
};

export default ad;