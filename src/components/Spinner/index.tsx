// import react library
import * as React from 'react';

// style
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="9" fill="none" strokeWidth="1.3" strokeMiterlimit="10"/>
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
