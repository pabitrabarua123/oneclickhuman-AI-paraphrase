"use client";

import React, { useEffect } from "react";
import { Tool } from "./Tool";

import sal from "sal.js";

const ContentGenerator = ({userData}) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

       // bgflashlight.style.setProperty("--x", x + "px");
       // bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  
  return (
    <>
          <div
            className="chat-box-list pt--30"
            id="chatContainer"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <div className="chat-box author-speech">
              <div className="inner" id="content-generator">
                 { userData.email_verification === true ?
                   <>
                   { userData.subscrption_status > 0 || userData.onetime_credit > 0 ?
                     <Tool userData={userData}/> 
                     : 
                     <p>Sorry, you do not have access to this feature.<a style={{color: '#7064e9'}} href='/pricing'>Upgrade account </a></p>
                   } 
                   </>
                   :
                   <p>Using Undetectable Content Generator needs Email to be verified, please go to your inbox and verify.</p>
                 }
              </div>
            </div>
          </div>

    </>
  );

};

export default ContentGenerator;
