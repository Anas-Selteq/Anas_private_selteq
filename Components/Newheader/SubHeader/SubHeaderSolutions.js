import React, { useState } from "react";
import Styles from "./SubHeader.module.css";
import Image from "next/image";
import { SubHeaderItem } from "./Reusable/SubHeaderItem";
import { SubHeaderMenuItem } from "./SubHeaderMenuItem";
import {
  expert,
  plexaar,
  chelsford,
  deltrum,
  dummy,
  microsoft,
  oracle,
  expert2,
  expertApp,
} from "./assets";

export const SubHeaderSolutions = ({ handleClose }) => {
  const [showSoftwares, setShowSoftwares] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div className={Styles.subHeaderContainer}>
        <div className={Styles.subHeaderChildContainer}>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="SalesPlex"
                desc="Powerful CRM Solution for Efficient Sales Management."
                style="red"
                link="/Newsolutions/salesplex"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Plexaar "
                desc="A Leading ERP Solution to Manage Business Operations."
                style="green"
                link="/Newsolutions/plexaar"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Calendex"
                desc="An Intuitive Booking System to Eliminate Scheduling Headaches."
                style="yellow"
                link="/Newsolutions/calendex"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Ondel "
                desc="Robust Accounting and Finance Software for Business Growth."
                style="blue"
                link="/Newsolutions/ondelafs"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Buzz"
                desc="Enterprise-Grade Communication Platform."
                style="purple"
                link="/Newsolutions/buzz"
              />
            </div>
          </div>

          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Formbiz "
                desc="Secure Forms Data Storage with Advanced Encryption Protocols."
                style="red"
                link="/Newsolutions/formbiz"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Stockpro"
                desc="Automated Inventory Management System."
                style="green"
                link="/Newsolutions/stockpro"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="iReach"
                desc="Comprehensive HR Solution with Integrated Analytics."
                style="yellow"
                link="/Newsolutions/ireach"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Forwarde "
                desc="Ensure Compliance During Employee Onboarding."
                style="blue"
                link="/Newsolutions/forwarde"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Ondel"
                desc="Agile Project Management System for Iterative Development."
                style="purple"
                link="/Newsolutions/ondelpms"
              />
            </div>
          </div>
          <div
            style={{ marginLeft: "2vw" }}
            className={Styles.subHeadingSubChild}
          >
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="mobile"
                title="Expert Pay"
                desc="Advanced POS System with Robust Payment Processing."
                style="red"
                link="/Newsolutions/expertpay"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="web"
                title="Eblurb"
                desc="Next-Gen LMS for Modern Educational Needs"
                style="green"
                link="/Newsolutions/eblurb"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="software"
                title="Onlog"
                desc="Intelligent Scheduling Software for Task Management"
                style="yellow"
                link="/Newsolutions/onlog"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="marketing"
                title="Foggle"
                desc="Meticulous Data Analysis for Methodical Decision-Making."
                style="blue"
                link="/Newsolutions/foggle"
              />
            </div>
            <div onClick={() => handleClose()}>
              <SubHeaderItem
                icon="data"
                title="Docloud"
                desc="Enjoy the Versatility of Document Management."
                style="purple"
                link="/Newsolutions/doCloud"
              />
            </div>
          </div>
        </div>
        <div
          className={Styles.subHeaderChildContainer2}
          style={{ marginLeft: "30px" }}
        >
          {/*<Image src={dummy} alt="Dummy image" style={{width:"150px", height:"150px"}} />*/}
        </div>
      </div>
      <div className={Styles.alignSubHeaderPortfolio}>
        <p>Our partners</p>
        <div className={Styles.subHeaderPortfolio}>
          <Image
            src={microsoft}
            alt="Microsoft"
            style={{ width: "6.5vw", height: "1.5vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={oracle}
            alt="Oracle"
            style={{ width: "7.5vw", height: "1.5vw" }}
            className={Styles.imgHover}
          />

          <Image
            src={expert2}
            alt="Expert"
            style={{ width: "6vw", height: "2vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={plexaar}
            alt="Plexaar"
            style={{ width: "5.5vw", height: "2vw" }}
            className={Styles.imgHover}
          />
          <Image
            src={expertApp}
            alt="Expert"
            style={{ width: "7vw", height: "2vw" }}
            className={Styles.imgHover}
          />
        </div>
      </div>
    </div>
  );
};
