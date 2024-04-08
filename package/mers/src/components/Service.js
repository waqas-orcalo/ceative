import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersProps } from "../sliderProps";
import { arrow } from "../svgImg";
import ServicePopup from "./popup/ServicePopup";
const Service = () => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({ img: "", title: "" });

  const onClick = (img, title) => {
    setActive(true);
    setData({ img, title });
  };
  const { img, title } = data;
  return (
    <Fragment>
      {active && (
        <ServicePopup img={img} title={title} close={() => setActive(false)} />
      )}
      <div className="mers_tm_section" id="service">
        <div className="mers_tm_service">
          <div className="container">
            <div className="mers_tm_title" data-text-align="center">
              <span>Why Choose Us</span>
              <h3>Our Work Services</h3>
            </div>
            <div className="service_list">
              <ul>
                <li>
                  <div className="list_inner  tilt-effect">
                    <span className="icon">
                      <img className="svg" src="img/svg/monitor.svg" alt="" />
                    </span>
                    <h3 className="title">Computer Graphics</h3>
                    <p className="text">
                      I enjoy every step of the design process, from discussion
                      and collaboration...
                    </p>
                    <span
                      className="arrow_icon"
                      dangerouslySetInnerHTML={{ __html: arrow }}
                    ></span>
                    <a
                      className="mers_tm_full_link c-pointer"
                      onClick={() =>
                        onClick("/img/service/1.jpg", "Computer Graphics")
                      }
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="img/service/1.jpg"
                      alt=""
                    />
                    {/* /Modalbox Info End */}
                  </div>
                </li>
                <li>
                  <div className="list_inner tilt-effect">
                    <span className="icon">
                      <img className="svg" src="img/svg/mouse.svg" alt="" />
                    </span>
                    <h3 className="title">Domain Hosting</h3>
                    <p className="text">
                      I enjoy every step of the design process, from discussion
                      and collaboration...
                    </p>
                    <span
                      className="arrow_icon"
                      dangerouslySetInnerHTML={{ __html: arrow }}
                    ></span>
                    <a
                      className="mers_tm_full_link c-pointer"
                      onClick={() =>
                        onClick("/img/service/2.jpg", "Domain Hosting")
                      }
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="img/service/2.jpg"
                      alt=""
                    />
                    {/* /Modalbox Info End */}
                  </div>
                </li>
                <li>
                  <div className="list_inner tilt-effect">
                    <span className="icon">
                      <img className="svg" src="img/svg/layer.svg" alt="" />
                    </span>
                    <h3 className="title">UX/UI Design</h3>
                    <p className="text">
                      I enjoy every step of the design process, from discussion
                      and collaboration...
                    </p>
                    <span
                      className="arrow_icon"
                      dangerouslySetInnerHTML={{ __html: arrow }}
                    ></span>
                    <a
                      className="mers_tm_full_link c-pointer"
                      onClick={() =>
                        onClick("/img/service/3.jpg", "UX/UI Design")
                      }
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="img/service/3.jpg"
                      alt=""
                    />

                    {/* /Modalbox Info End */}
                  </div>
                </li>
                <li>
                  <div className="list_inner tilt-effect">
                    <span className="icon">
                      <img className="svg" src="img/svg/laptop.svg" alt="" />
                    </span>
                    <h3 className="title">Web Development</h3>
                    <p className="text">
                      I enjoy every step of the design process, from discussion
                      and collaboration...
                    </p>
                    <span
                      className="arrow_icon"
                      dangerouslySetInnerHTML={{ __html: arrow }}
                    ></span>
                    <a
                      className="mers_tm_full_link c-pointer"
                      onClick={() =>
                        onClick("/img/service/4.jpg", "Web Development")
                      }
                    />
                    {/* Modalbox Info Start */}
                    <img
                      className="popup_service_image"
                      src="img/service/4.jpg"
                      alt=""
                    />
                    {/* /Modalbox Info End */}
                  </div>
                </li>
              </ul>
            </div>
            <div className="mers_tm_partners">
              <Swiper {...partnersProps} className="owl-carousel">
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/1.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/2.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/3.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/4.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/5.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/6.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/7.png" alt="" />
                  </a>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <a href="#">
                    <img src="img/partners/8.png" alt="" />
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
