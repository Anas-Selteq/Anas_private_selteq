import styles from "../../styles/banner.module.css";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Link from "next/link";
import Unlock from "../MobileDesigns/Itdevmob/Unlock";

function Solutions() {
  const [one, setOne] = useState(1);
  const changeText =
    one === 1
      ? "Tell us about your project and what you hope to achieve. We will work with you to define your business scope and project expectations and help you decide the best way to proceed.      "
      : one === 2
        ? "Meet your dedicated team of skilled developers & engineers ready to work on your project with transparent communication. Our team will collaborate throughout development to ensure your vision becomes a reality.      "
        : one === 3
          ? "Our team of experts will take the reins and deliver secure software with quality, reliability, & efficiency on time. We use the latest development methodologies to ensure the best possible results.      "
          : one === 4
            ? "We thoroughly test and check your project for any bugs, errors, or issues to ensure the highest quality and performance. Our team of experts will work tirelessly to ensure your project meets your expectations before delivery.      "
            : "Provide regular feedback and expect on-time delivery of your project. We strive to exceed your expectations and deliver a quality product that meets your needs. Take advantage of our 24/7 expert assistance to get the most out of our service.      ";

  return (
    <>
      <div className="col-md-12 p-0 background_hei display_h">
        <div className="container display_h  text-center pt-5 ">
          <p className={styles.solution_heading}>IT Outsourcing Services with an Elite Team of Developers</p>
          <h6 className="pt-2"><b>How to Outsource with Us?</b></h6>
          <div className="col-md-12 px-5">
            <div className="row mt-5 background_height">
              <div
                className="col-md zoomdown mt-2"
                onMouseEnter={() => setOne(1)}
              >
                <Link className="text_dec_n" href="/banking-and-finance">
                  <div className="display_hover">
                    <div className="col-md-12  background_card_icons">
                      {/* <i id="icons_color" class="fas fa-id-card"></i> */}
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 121.81 102.74"
                        className="width_img1"
                      >
                        <path d="M0,45.23a85.94,85.94,0,0,1,1.48-8.51C6.28,19.23,17,7.12,34.59,2,47-1.69,59.13-.17,70.6,6c.25.13.5.25.73.4a2.37,2.37,0,0,1,.92,3.2,2.42,2.42,0,0,1-3.29.92c-2.56-1.15-5.08-2.41-7.7-3.38A36.69,36.69,0,0,0,50.14,5V6.4q0,20.22,0,40.43a4.47,4.47,0,0,1-1.44,3.46Q34.42,64.51,20.2,78.78c-.34.33-.74.6-1.11.9,10,10.24,30.19,15.14,46.58,7.22-.36-.65-.72-1.28-1.07-1.93a6.44,6.44,0,0,1,1.1-8,5.89,5.89,0,0,0,2-4.82c0-2.5-.37-4.42-2.31-6.26s-2.17-4.62-.91-7.17a54.94,54.94,0,0,1,2.9-5,6.24,6.24,0,0,1,7.11-2.8A6.34,6.34,0,0,0,80,50.06,7.19,7.19,0,0,0,84,45.24c.72-2.91,3.07-4.27,6.27-4.64a59,59,0,0,0-1.94-6.82c-1.29-3.13-2.92-6.12-4.42-9.17-.14-.28-.34-.53-.5-.81a2.35,2.35,0,0,1,.74-3.32,2.25,2.25,0,0,1,3.22.76,65.4,65.4,0,0,1,4.39,8.26c1.43,3.54,2.37,7.27,3.52,10.92l-.29.16c.54.07,1.09.1,1.62.22a6.37,6.37,0,0,1,5.14,5,5.47,5.47,0,0,0,3,3.84c2.21,1.31,4.13,1.94,6.79,1.18s5.13.54,6.69,3q1.45,2.31,2.74,4.73a6.27,6.27,0,0,1-1,7.67,6.56,6.56,0,0,0-2.09,5.25,7.15,7.15,0,0,0,2.27,5.9,6.14,6.14,0,0,1,.84,7.5c-.81,1.5-1.67,3-2.54,4.43a6.44,6.44,0,0,1-7.62,3.13,5.86,5.86,0,0,0-5,.71c-2.25,1.25-3.7,2.62-4.3,5.24s-3.3,4.27-6.18,4.33c-1.67,0-3.33,0-5,0a6.43,6.43,0,0,1-6.44-5,6,6,0,0,0-3.22-4.1c-2.16-1.3-4.08-2-6.57-1.08a5.35,5.35,0,0,1-4.93-1.08,1.37,1.37,0,0,0-1.59-.14C50.83,98.41,34.81,97,20,86.68,8.33,78.52,1.65,67,.21,52.68c0-.35-.14-.69-.21-1ZM15.65,76.3,44.19,47.76,15.42,19.63C.62,35.53,1.92,62.44,15.65,76.3Zm101.46,5.16a6.15,6.15,0,0,0-1-1.45c-2.41-2-3.64-4.44-2.94-7.64a1.67,1.67,0,0,0,0-.59,8.26,8.26,0,0,1,3.21-8.71,1.74,1.74,0,0,0,.32-2.38c-.44-.8-.9-1.58-1.36-2.37-1.85-3.2-1.85-3.23-5.46-2.27a5.78,5.78,0,0,1-5.18-.91,6.65,6.65,0,0,0-1.59-1,8.53,8.53,0,0,1-6-7.22,1.72,1.72,0,0,0-1.9-1.45H92.57c-3.9,0-3.8-.28-4.81,3.6a5.93,5.93,0,0,1-3.28,4,39.74,39.74,0,0,0-3.89,2.26,5.76,5.76,0,0,1-4.76.83c-.73-.18-1.45-.39-2.18-.58a2,2,0,0,0-2.51,1c-.75,1.3-1.48,2.62-2.26,3.91a1.94,1.94,0,0,0,.37,2.76c2.53,2.08,3.78,4.63,3.06,7.95a1.24,1.24,0,0,0,0,.47,8.22,8.22,0,0,1-3.19,8.61,1.79,1.79,0,0,0-.32,2.48c.47.83,1,1.65,1.42,2.47,1.67,2.87,1.53,3.25,5.21,2.14a6,6,0,0,1,5.51,1,25.54,25.54,0,0,0,3.59,2.07,5.75,5.75,0,0,1,3.19,3.77c.19.68.37,1.37.55,2.06A2.07,2.07,0,0,0,90.49,98H95a2,2,0,0,0,2.2-1.75,7.6,7.6,0,0,1,5.36-6.61,1.2,1.2,0,0,0,.41-.23,8.2,8.2,0,0,1,9-1.52,1.67,1.67,0,0,0,2.15-.8c.9-1.49,1.75-3,2.61-4.52A6,6,0,0,0,117.11,81.46ZM45.31,42.23V5A42.64,42.64,0,0,0,18.7,16.17Z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="fin ">Share Your Outsourcing Needs</h6>
                </Link>
              </div>

              <div className="col-md zoomdown" onMouseEnter={() => setOne(2)}>
                <Link className="text_dec_n" href="/healthcare-and-medical">
                  <div className="display_hover">
                    <div className="col-md-12  background_card_icons padd">
                      {/* <i id="icons_color"  class="fas fa-heartbeat"></i> */}
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 105.56 109.01"
                        className="width_img pt-1"
                      >
                        <path
                          className="icon_fil"
                          d="M38.47,10.12A14.59,14.59,0,0,0,41.2,25.24a15.53,15.53,0,0,0,9.51,5.36l3.54.65.19-.25a1.55,1.55,0,0,1,1-.56A15.32,15.32,0,0,0,56.83.54c-.51-.14-1-.26-1.53-.39L54.68,0H51L50.9,0c-.21.06-.42.13-.63.17C44.39,1.41,40.42,4.74,38.47,10.12ZM52.85,4.69h.06A10.65,10.65,0,0,1,63.47,15.34,10.65,10.65,0,0,1,52.83,26h-.06a10.64,10.64,0,0,1,.08-21.27Z"
                        />
                        <path d="M98.77,100.86c2.73-5.07,2.53-10.27-.58-15.46L96.71,83h8.85l-.16-.12-4.14-3.31c-9.51-7.5-15.1-17-16.61-28.14-1.28-9.48-9.34-19.34-21.61-19-1.81.06-3.65,0-5.42,0H53.3l.11-.15-2.84.07c-1.59,0-3.18,0-4.76.06-1.23,0-2.45,0-3.67,0a22.79,22.79,0,0,0-3.93.31A21.61,21.61,0,0,0,21.06,51.17a41.34,41.34,0,0,1-7.9,19.53,56,56,0,0,1-11,10.67C1.42,81.92.71,82.5,0,83.07H9L7.86,84.82c-.1.16-.19.28-.26.41-3.22,5.23-3.46,10.49-.69,15.63A14.53,14.53,0,0,0,20.28,109c23,.09,44.3.08,65.23,0A14.44,14.44,0,0,0,98.77,100.86ZM16.06,74.65c.22-.31.44-.59.65-.88a46.65,46.65,0,0,0,9.08-22.22A16.39,16.39,0,0,1,42.41,37.12c6.92.15,13.93.15,20.83,0A16.31,16.31,0,0,1,79.81,51.19a48.51,48.51,0,0,0,9.78,23.4,1.75,1.75,0,0,1,.22.43l.78,2.13-2.38-1-.9-.37A33.2,33.2,0,0,1,70.87,59.37c-1-2-1.9-4-2.88-6.11l-.21-.45c-.13.71-.26,1.4-.38,2.08q-2.85,16.23-5.7,32.45a2.76,2.76,0,0,1-1.61,2.18C58,90.58,55.94,91.7,54,92.76a2.39,2.39,0,0,1-1.17.33,2.37,2.37,0,0,1-1.18-.34c-2.21-1.22-4.23-2.3-6.16-3.28a2.56,2.56,0,0,1-1.49-2c-1-5.73-1.93-11.46-2.9-17.18L38.44,54.53l-2.9,6C32,68,26,73.17,17.09,76.47a1.06,1.06,0,0,1-.59,0l-.11,0-1.61-.13Zm66.3,3.95L66.7,85.88,70,67.36l1.25,1.55A39.39,39.39,0,0,0,81,77.72ZM39,85.92,24.35,79.05l11.87-9.54Zm-1.56,15.89a15.67,15.67,0,0,1-8.61,2.57c-.47,0-.94,0-1.42-.06a44.44,44.44,0,0,0-4.47-.06q-1.25,0-2.49,0a10.62,10.62,0,0,1-1.25-21.17,8,8,0,0,1,4,.74c5.77,2.67,11.63,5.5,16.66,8,1.46.71,2.88,1.48,4.39,2.29l2.17,1.15,1.48.79-1.47.8c-1,.54-2,1-2.9,1.55C41.42,99.52,39.39,100.58,37.46,101.81Zm48.33,2.42c-5.4.06-10.86.08-16.27.08l-11.42,0H46l-.67-1.49.74-.4,2-1.13c1.46-.81,3-1.65,4.49-2.43Q65.88,92,79.16,85.22c.74-.38,1.52-.7,2.27-1L81.9,84a9.81,9.81,0,0,1,13,5,10.68,10.68,0,0,1-.59,10.3A10.11,10.11,0,0,1,85.79,104.23Z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="fin ">Meet Your Project Team</h6>
                </Link>
              </div>
              <div className="col-md zoomdown" onMouseEnter={() => setOne(3)}>
                <Link className="text_dec_n" href="/education">
                  <div className="display_hover">
                    <div className="col-md-12   background_card_icons">
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100.19 113.24"
                        className="width_img  pt-1"
                      >
                        <path
                          className="icon_fil"
                          d="M98.81,53.24A8.84,8.84,0,0,0,100,46.49a9.08,9.08,0,0,0-10.87-6.9,2.32,2.32,0,0,1-1.8-.43C78.65,31.72,69.7,24,60.67,16.07a2.29,2.29,0,0,1-.69-1.7,13.32,13.32,0,0,0-.89-6.21A12.34,12.34,0,0,0,48.28.08a12.24,12.24,0,0,0-12,5.68,89.52,89.52,0,0,0-4.67,8A3.6,3.6,0,0,1,27.9,16h-.29C16,16,6.88,21,.54,30.94A2.32,2.32,0,0,0,0,32.64c.11.46.52.88,1.3,1.33L3.62,35.3c2.8,1.62,5.69,3.3,8.55,4.91a1.63,1.63,0,0,1,.95,2.19,12.82,12.82,0,0,0,5.44,14.18,37.2,37.2,0,0,0,4.18,2.23A12.49,12.49,0,0,0,37.1,56.43a3,3,0,0,0,.45-.68c.07-.13.15-.27.23-.39l.19-.31.3.2c.55.36.91.57,1.22.74l4.4,2.54,8,4.59a2.23,2.23,0,0,0,1.65.4,2.1,2.1,0,0,0,1.14-1.11,30.78,30.78,0,0,0,3.91-13.26A31.51,31.51,0,0,0,53.36,29.8a1.61,1.61,0,0,1-.18-1.41c.47-.9,1-1.8,1.49-2.66l.71-1.22.42.19a.6.6,0,0,1,.26.14q12.72,11,25.44,22A1.86,1.86,0,0,1,82,47.91c.37,1.7.69,3.18,1,4.69a2.73,2.73,0,0,1-.06,1.66C77.48,65.14,72.5,75.11,67.64,84.76a2.55,2.55,0,0,1-1.58,1.15A13.23,13.23,0,0,0,56,94.53a18.51,18.51,0,0,0-.59,2c-.09.33-.17.65-.27,1l-.07.25H36l-11.45,0A14,14,0,0,0,10.86,111a2.29,2.29,0,0,0,.45,1.72,2.3,2.3,0,0,0,1.67.48h77.6c1.56,0,2.09-.53,2.1-2.12,0-3.72,0-7.44,0-11.17,0-1.75-.48-2.23-2.21-2.24H82.61l-.09-.21c-.25-.62-.47-1.22-.69-1.8a20.53,20.53,0,0,0-1.52-3.45,20.11,20.11,0,0,0-2.3-3c-.39-.43-.78-.87-1.16-1.33l-.14-.18,3.22-6.45c3.7-7.41,7.44-14.89,11.14-22.37a3,3,0,0,1,2.19-1.74A8.84,8.84,0,0,0,98.81,53.24ZM35,53.88a8.73,8.73,0,0,1-6.8,2.93,9.35,9.35,0,0,1-3.73-.75A33.83,33.83,0,0,1,20.44,54a9.5,9.5,0,0,1-4.13-10.84l.13-.42L35.28,53.56ZM52.62,59.4l-.15.36L3.86,31.7l.22-.31C9.36,23.94,16.33,19.85,24.8,19.23c11.85-.87,20.88,3.84,26.84,14C56.39,41.27,56.72,50.08,52.62,59.4Zm3.11-42.11c-1,1.95-2.08,3.82-3.24,5.79-.52.9-1.05,1.8-1.58,2.73l-.23.41-.32-.34a32.15,32.15,0,0,0-16.19-9.3l-.46-.11.24-.41c.56-.95,1.1-1.89,1.63-2.83,1.21-2.14,2.36-4.16,3.71-6.1A9.51,9.51,0,0,1,52.12,4.64,9.51,9.51,0,0,1,55.73,17.29Zm1.4,4.18,1.58-2.78L85,41.53l-1.92,2.41ZM88.46,101l.37,0,.57,0v8.91H14.22l.1-.43c0-.14.07-.28.1-.41a8.7,8.7,0,0,1,.22-.88A10.52,10.52,0,0,1,24.39,101q24.64,0,49.28,0Zm-9.8-3.67,0,.38H58.59l0-.38c.33-4.5,5.1-8.41,10.22-8.41h.07C73.79,88.9,78.35,92.83,78.66,97.28Zm-5-10.68-2.9-.83L85.68,55.94l2.7,1.25ZM91,54.34h0a5.87,5.87,0,0,1-5.78-5.87,6,6,0,0,1,5.88-5.9h0A5.89,5.89,0,1,1,91,54.34Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h6 className="fin ">Start Development</h6>
                </Link>
              </div>
              <div className="col-md zoomdown" onMouseEnter={() => setOne(4)}>
                <Link className="text_dec_n" href="/e-commerce">
                  <div className="display_hover">
                    <div className="col-md-12  background_card_icons padd">
                      {/* <i id="icons_color" class="fas fa-id-card"></i> */}
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="width_img pt-1"
                        viewBox="0 0 101.16 104.07"
                      >
                        <path
                          className="icon_fil"
                          d="M100.72,37.61a12,12,0,0,0,.18-5.53,8.51,8.51,0,0,0-8.65-6.36c-5.3,0-10.61,0-15.92,0H70.77a5.29,5.29,0,0,0-.8.05,2.37,2.37,0,0,0-2,1.89,2.28,2.28,0,0,0,1.19,2.62A4.71,4.71,0,0,0,71,30.6q7,0,14,0h7a4.19,4.19,0,0,1,3.42,1.31,4.19,4.19,0,0,1,.63,3.6L88,77.87c-.49,2.57-1.69,3.57-4.27,3.58H24.5c-2.6,0-3.76-1-4.28-3.55L11.81,36.46c-.22-1.1-.43-2.2-.65-3.33l-.5-2.51H35.38c.95,0,3.17-.24,3.19-2.44A2.2,2.2,0,0,0,38,26.56a3.51,3.51,0,0,0-2.53-.85H29.48q-9.06,0-18.11,0h0A1.88,1.88,0,0,1,9.27,24q-.86-4.27-1.73-8.56C6.68,11.21,5.82,7,5,2.75A3.41,3.41,0,0,0,3.09,0H1.82C.05.91-.24,1.59.16,3.61q1.45,7.23,2.92,14.46L13.93,71.54c.45,2.27.92,4.53,1.38,6.81l.7,3.38-1.51.63a11.31,11.31,0,0,0,4.82,21.71q29,0,58.06,0H90.47a5.23,5.23,0,0,0,.56,0,2.51,2.51,0,0,0,2.24-2.28,2.44,2.44,0,0,0-1.73-2.47,5.63,5.63,0,0,0-1.5-.14H19.52c-.34,0-.67,0-1,0A6.4,6.4,0,0,1,12.76,91c.85-3,3.3-4.65,6.72-4.65H83.83c4.83,0,8-2.63,8.91-7.42q3.48-18.17,7-36.34Z"
                        />
                        <path d="M50.78,12.3v45L49,55.62l-.54-.49L46.21,53c-1.38-1.34-2.76-2.69-4.15-4a2.77,2.77,0,0,0-1.93-.84,2.34,2.34,0,0,0-1.67.71,2.38,2.38,0,0,0-.71,1.7,2.66,2.66,0,0,0,.86,1.89Q45,58.66,51.39,64.87a2.41,2.41,0,0,0,3.62,0q6.42-6.2,12.79-12.46A2.41,2.41,0,0,0,68,48.84a2.47,2.47,0,0,0-3.67.14c-1.36,1.31-2.72,2.64-4.07,4L58,55.1c-.17.16-.34.32-.56.51l-1.79,1.62V12.53a6.43,6.43,0,0,0,0-.76,2.45,2.45,0,0,0-2.47-2.3h-.07C51.66,9.51,50.78,10.56,50.78,12.3Z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="fin ">QA & Testing</h6>
                </Link>
              </div>
              <div
                className="col-md zoomdown mt-1"
                onMouseEnter={() => setOne(5)}
              >
                <Link className="text_dec_n" href="/erp">
                  <div className="display_hover">
                    <div className="col-md-12  background_card_icons">
                      {/* <i id="icons_color" class="fas fa-id-card"></i> */}
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 121.81 102.74"
                        className="width_img2"
                      >
                        <path d="M0,45.23a85.94,85.94,0,0,1,1.48-8.51C6.28,19.23,17,7.12,34.59,2,47-1.69,59.13-.17,70.6,6c.25.13.5.25.73.4a2.37,2.37,0,0,1,.92,3.2,2.42,2.42,0,0,1-3.29.92c-2.56-1.15-5.08-2.41-7.7-3.38A36.69,36.69,0,0,0,50.14,5V6.4q0,20.22,0,40.43a4.47,4.47,0,0,1-1.44,3.46Q34.42,64.51,20.2,78.78c-.34.33-.74.6-1.11.9,10,10.24,30.19,15.14,46.58,7.22-.36-.65-.72-1.28-1.07-1.93a6.44,6.44,0,0,1,1.1-8,5.89,5.89,0,0,0,2-4.82c0-2.5-.37-4.42-2.31-6.26s-2.17-4.62-.91-7.17a54.94,54.94,0,0,1,2.9-5,6.24,6.24,0,0,1,7.11-2.8A6.34,6.34,0,0,0,80,50.06,7.19,7.19,0,0,0,84,45.24c.72-2.91,3.07-4.27,6.27-4.64a59,59,0,0,0-1.94-6.82c-1.29-3.13-2.92-6.12-4.42-9.17-.14-.28-.34-.53-.5-.81a2.35,2.35,0,0,1,.74-3.32,2.25,2.25,0,0,1,3.22.76,65.4,65.4,0,0,1,4.39,8.26c1.43,3.54,2.37,7.27,3.52,10.92l-.29.16c.54.07,1.09.1,1.62.22a6.37,6.37,0,0,1,5.14,5,5.47,5.47,0,0,0,3,3.84c2.21,1.31,4.13,1.94,6.79,1.18s5.13.54,6.69,3q1.45,2.31,2.74,4.73a6.27,6.27,0,0,1-1,7.67,6.56,6.56,0,0,0-2.09,5.25,7.15,7.15,0,0,0,2.27,5.9,6.14,6.14,0,0,1,.84,7.5c-.81,1.5-1.67,3-2.54,4.43a6.44,6.44,0,0,1-7.62,3.13,5.86,5.86,0,0,0-5,.71c-2.25,1.25-3.7,2.62-4.3,5.24s-3.3,4.27-6.18,4.33c-1.67,0-3.33,0-5,0a6.43,6.43,0,0,1-6.44-5,6,6,0,0,0-3.22-4.1c-2.16-1.3-4.08-2-6.57-1.08a5.35,5.35,0,0,1-4.93-1.08,1.37,1.37,0,0,0-1.59-.14C50.83,98.41,34.81,97,20,86.68,8.33,78.52,1.65,67,.21,52.68c0-.35-.14-.69-.21-1ZM15.65,76.3,44.19,47.76,15.42,19.63C.62,35.53,1.92,62.44,15.65,76.3Zm101.46,5.16a6.15,6.15,0,0,0-1-1.45c-2.41-2-3.64-4.44-2.94-7.64a1.67,1.67,0,0,0,0-.59,8.26,8.26,0,0,1,3.21-8.71,1.74,1.74,0,0,0,.32-2.38c-.44-.8-.9-1.58-1.36-2.37-1.85-3.2-1.85-3.23-5.46-2.27a5.78,5.78,0,0,1-5.18-.91,6.65,6.65,0,0,0-1.59-1,8.53,8.53,0,0,1-6-7.22,1.72,1.72,0,0,0-1.9-1.45H92.57c-3.9,0-3.8-.28-4.81,3.6a5.93,5.93,0,0,1-3.28,4,39.74,39.74,0,0,0-3.89,2.26,5.76,5.76,0,0,1-4.76.83c-.73-.18-1.45-.39-2.18-.58a2,2,0,0,0-2.51,1c-.75,1.3-1.48,2.62-2.26,3.91a1.94,1.94,0,0,0,.37,2.76c2.53,2.08,3.78,4.63,3.06,7.95a1.24,1.24,0,0,0,0,.47,8.22,8.22,0,0,1-3.19,8.61,1.79,1.79,0,0,0-.32,2.48c.47.83,1,1.65,1.42,2.47,1.67,2.87,1.53,3.25,5.21,2.14a6,6,0,0,1,5.51,1,25.54,25.54,0,0,0,3.59,2.07,5.75,5.75,0,0,1,3.19,3.77c.19.68.37,1.37.55,2.06A2.07,2.07,0,0,0,90.49,98H95a2,2,0,0,0,2.2-1.75,7.6,7.6,0,0,1,5.36-6.61,1.2,1.2,0,0,0,.41-.23,8.2,8.2,0,0,1,9-1.52,1.67,1.67,0,0,0,2.15-.8c.9-1.49,1.75-3,2.61-4.52A6,6,0,0,0,117.11,81.46ZM45.31,42.23V5A42.64,42.64,0,0,0,18.7,16.17Z" />
                      </svg>
                    </div>
                  </div>
                  <h6 className="fin ">On-Time Delivery</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-md-12 p-0 display_h ${styles.background_learning}`}
        >
          <div className="container text-center pb-5">
            <p className={styles.learning_p}>{changeText}</p>
          </div>
        </div>

        {/* for mobile  */}
        <div className="col-md-12 display_pc back_mob_sol text-center pt-4 mt-1 pb-4">
          <div className="col-md-12 p-0">
            <p className={styles.solution_heading_mob}>SOLUTIONS</p>
            <div className="col-md-12 pt-3">
              <img
                src="../images/educaton.png"
                className="img-fluid img_width_mobile"
              />
              <div className="col-md-12  p-0 text-center mt-4 pb-4">
                <p className={styles.paragraph_mobile}>
                  Selteq’s e-learning mobile apps, cloud-based educational
                  platforms, learning management solutions, knowledge portals &
                  web content development services are all infused with
                  best-in-class pedagogy and industry best practices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-0 ">
            <div className="col-md-12 pt-3">
              <img
                src="../images/health.png"
                className="img-fluid img_width_mobile1"
              />
              <div className="col-md-12  p-0 text-center mt-4 pb-4">
                <p className={styles.paragraph_mobile}>
                  Selteq’s e-learning mobile apps, cloud-based educational
                  platforms, learning management solutions, knowledge portals &
                  web content development services are all infused with
                  best-in-class pedagogy and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className="col-md-12 background_sol_sec display_pc">
        <Unlock />
      </div>
    </>
  );
}

export default Solutions;