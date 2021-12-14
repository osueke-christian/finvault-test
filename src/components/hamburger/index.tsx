import React from 'react';
import './style.scss';

const Hamburger:React.FC<{open: boolean}> = ({ open }) => (
  <div>
    {/* <div id="nav-icon1" className={open ? 'open' : ''}>
      <span />
      <span />
      <span />
    </div> */}
    <div id="nav-icon2" className={open ? 'open' : ''}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    {/* <div id="nav-icon3" className={open ? 'open' : ''}>
      <span />
      <span />
      <span />
      <span />
    </div> */}
    {/* <div id="nav-icon4" className={open ? 'open' : ''}>
      <span />
      <span />
      <span />
    </div> */}
  </div>
);

export default Hamburger;
