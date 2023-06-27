import styles from "../../styles/banking.module.css"
// import Image from "next/image"

function Bannersol({heading}) {
  // console.log("jjjkkj", heading);
  return (
    <div className="col-md-12 px-5 pb-5 pt-4 background_white">
        <div className="container ">
            <div className="row">
                <div className="col-md-7 m-auto text-center">
                    <img src="https://1864597015.rsc.cdn77.org/selteq/images/doc.png" className="img-fluid img_width_bannersol "  />
                </div>
                <div className="col-md-5 m-auto px-5">
                   <h2><b>{heading.heading}</b></h2>
                   <h5 className={`pb-3 ${styles.color_red_banner1}`}><b>{heading.sub_heading}</b></h5>
                   {/* <h3 className={styles.color_red_banner}>and Financial Operations</h3> */}
                   <h6 className={styles.p_banner1}>{heading.sub_head_paagraph}</h6>
                   {/* <h6 className={styles.p_banner1}>Sell more with an industry-leading suite of professional ecommerce apps.</h6> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bannersol