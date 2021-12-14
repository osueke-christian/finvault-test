/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Card from '../card';
import Hamburger from '../hamburger';
import './style.scss';

const SideNav: React.FC<{children: ReactNode}> = ({ children }) => {
  const [showPop, setShowPop] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Side nav */}
      <div className={`sidenav ${open ? 'open' : ''}`}>
        <div className="ham-burger" onClick={() => setOpen(!open)}>
          <Hamburger open={open} />
        </div>
        <div className="logo-container">
          <img src="./assets/images/logo.svg" alt="logo" />
        </div>
        {/* <a href="/"> */}

        <div className="accordion" id="accordionNav">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#home"
                aria-expanded="true"
                aria-controls="home"
              >
                <img src="./assets/icons/home.svg" alt="home" />
                <span>Home</span>
              </button>
            </h2>
            <div
              id="home"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionNav"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <NavLink
                      className={(navData) => (navData.isActive ? 'nav-active' : '')}
                      to="/"
                    >
                      Transactions

                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Deposit into Finvault</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Withdraw Funds</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* <div className="get-started"> */}
        <div className="get-started-button">
          <Button onClick={() => setShowPop(!showPop)} buttonType="primary" round size="lg">
            <img src="./assets/icons/check.svg" alt=" " />
            Get Started: Level 1
            <span className="notification">3</span>
          </Button>

          <div className={`pop-up ${!showPop ? 'hidden' : ''}`}>
            <Card>
              <div className="card-top">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Your quick start guide</h5>
                    <p>
                      <span>LEVEL 1 </span>
                      50% completed
                    </p>
                  </div>

                  <input
                    type="image"
                    onClick={() => setShowPop(!showPop)}
                    className="hide-icon"
                    src="./assets/icons/blue-arrow-down.svg"
                    alt="close"
                  />
                </div>
                <div className="information">
                  <img src="./assets/icons/NFT-icon.svg" alt="NFT" />
                  <p>Complete 2 levels and recieve your free NFT </p>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-label="progress"
                  style={{ width: '25%' }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="card-body">
                <div className="item d-flex">
                  <img src="./assets/icons/transparent-check.svg" alt="check" />
                  <div>
                    <s>Open your account</s>
                    <p className="small-text">You have successfully opened your account</p>
                  </div>
                </div>
                <div className="item d-flex">
                  <img src="./assets/icons/ID.svg" alt="ID" />
                  <div>
                    <p className="normal-text">Verify your identity</p>
                    <p className="small-text">You have successfully opened your account</p>
                  </div>
                </div>

                <div className="item d-flex bg-secondary">
                  <img src="./assets/icons/phone.svg" alt="phone" />
                  <div>
                    <p className="normal-text">Verify your phone number</p>
                    <p className="small-text">You have successfully opened your account</p>
                  </div>
                </div>

                <div className="item d-flex">
                  <img src="./assets/icons/account.svg" alt="account" />
                  <div>
                    <p className="normal-text">Verify your identity</p>
                    <p className="small-text">You have successfully opened your account</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* </div> */}
      </div>
      {/* Main */}
      <div className={`main ${open ? 'open' : ''}`}>
        <div className="ham-burger" onClick={() => setOpen(!open)}>
          <Hamburger open={open} />
        </div>
        {open ? null : children}
      </div>
    </div>
  );
};
export default SideNav;
