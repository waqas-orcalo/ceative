import { arrow } from "../svgImg";

const About = () => {
  return (
    <div className="mers_tm_section" id="about">
      <div className="mers_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left parallax" data-relative-input="true">
              <img
                className="layer"
                data-depth="0.04"
                src="img/about/1.jpg"
                alt=""
              />
            </div>
            <div className="right">
              <div className="mers_tm_title" data-text-align="left">
                <span>There is all</span>
                <h3>Mrs. Maya About Me</h3>
              </div>
              <div className="text">
                <p>
                  My name is Mrs. Maya and I am a Web Developer, and {`I'm`}
                  very passionate and dedicated to my work. With 20 years
                  experience as a professional Web developer, I have acquired
                  the skills and knowledge necessary to make your project a
                  success. I enjoy every step of the design process, from
                  discussion and collaboration.
                </p>
              </div>
              <div className="info">
                <h3 className="address">
                  18/2, Topkhana Road,{" "}
                  <span className="colored">Australia.</span>
                </h3>
                <div className="list">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/call.svg" alt="" />
                        </div>
                        <div className="short">
                          <span>Contact Phone</span>
                          <h3>
                            <a className="animation_link" href="#">
                              +55 (9900) 666 22
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="icon">
                          <img className="svg" src="img/svg/mail.svg" alt="" />
                        </div>
                        <div className="short">
                          <span>Contact Mail</span>
                          <h3>
                            <a
                              className="animation_link"
                              href="mailto:info.maya@gmail.com"
                            >
                              info.maya@gmail.com
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mers_tm_social">
            <ul>
              <li>
                <div className="list_inner tilt-effect">
                  <div className="title">
                    <img
                      className="svg"
                      src="img/svg/social/envato.svg"
                      alt=""
                    />
                    <h3>Envato Market</h3>
                  </div>
                  <p>Please check my portfolio</p>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a
                    className="mers_tm_full_link"
                    href="https://themeforest.net/user/Codeefly/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <div className="title">
                    <img
                      className="svg"
                      src="img/svg/social/dribbble.svg"
                      alt=""
                    />
                    <h3>Dribbble</h3>
                  </div>
                  <p>Please check my portfolio</p>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a
                    className="mers_tm_full_link"
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <div className="title">
                    <img
                      className="svg"
                      src="img/svg/social/behance.svg"
                      alt=""
                    />
                    <h3>Behance</h3>
                  </div>
                  <p>Please check my portfolio</p>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a
                    className="mers_tm_full_link"
                    href="https://www.behance.net"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </li>
              <li>
                <div className="list_inner tilt-effect">
                  <div className="title">
                    <img
                      className="svg"
                      src="img/svg/social/skype.svg"
                      alt=""
                    />
                    <h3>Skype</h3>
                  </div>
                  <p>Hire me skype contact</p>
                  <span
                    className="arrow_icon"
                    dangerouslySetInnerHTML={{ __html: arrow }}
                  ></span>
                  <a
                    className="mers_tm_full_link"
                    href="https://www.skype.com"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
