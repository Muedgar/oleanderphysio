"use client";
import React from "react";

import "../../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import TransitionLink from "./TransitionLink";
import TransitionLinkMenu from "./TransitionLinkMenu";

export default function NavBar() {
  return (
    <>
      <div className="banner">
        <p>Welcome to oleander physiotherapy clinic</p>
        <div>
          <span className="banner-wide">
            <span>88 broklyn silver street, USA</span>
          </span>
          <span>
            <span>Mon to Fri 9:00am to 6:00pm</span>
          </span>
        </div>
      </div>
      <nav className="nav_clinic">
        <div className="nav_clinic_container">
          <p className="logo">
            <span>Oleander</span>
            <span>Physiotherapy</span>
          </p>
          <div className="contacts">
            <p className="cursor-pointer">
              <span className="icon">
                <FontAwesomeIcon
                  className="w-[20px] text-white"
                  icon={faPhone}
                />
              </span>
              <span className="call_to_action">
                <span>Call us anytime</span>
                <span>07883999283</span>
              </span>
            </p>
            <p className="cursor-pointer">
              <span className="icon">
                <FontAwesomeIcon
                  className="w-[20px] text-white"
                  icon={faEnvelope}
                />
              </span>
              <span className="call_to_action">
                <span>Write a mail</span>
                <span>neehhelp@info.com</span>
              </span>
            </p>
            <button className="call_to_action_button hover:shadow-lg hover:animate-pulse outline-none">
              Book an appointment
            </button>
          </div>
          <div className="dropdown">
            <TransitionLinkMenu href="/menu" label="" />
          </div>
        </div>
      </nav>
      <ul className="menu">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
        <TransitionLink href="/foundation" label="Foundation" />
        <TransitionLink href="/services" label="Services" />
        <TransitionLink href="/contact" label="Contact" />
      </ul>
      <div className="drawer"></div>
    </>
  );
}
