import React from 'react';

function Footer() {
  return (

    <>
      <div className="mers_tm_section" >
        <div className='footer'>
          <div className='footer-contents'>

            <div style={{ display: 'flex', flexWrap:"wrap", alignItems: 'center', justifyContent: "space-between", height: "200px" }}>
              <div className="footer-left">
                <img src="img/logo/Logo-dark.svg" alt="" />
              </div>
              <div style={{display:'flex', gap:"15px",alignItems: "center",}}>
                contact
                <div style={{display:'flex', gap:"10px", alignItems: "center",}}> 
                  <div style={{ background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                    <img className="svg" src="img/svg/mail.svg" alt="" />
                  </div>
                  <div style={{ background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                    <img className="svg" src="img/svg/mail.svg" alt="" />
                  </div>
                  <div style={{ background: "#fff", width: "40px", height: "40px", borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "space-between", }}>
                    <img className="svg" src="img/svg/mail.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex",flexWrap:"wrap", gap:"10px", justifyContent: "space-between", height: "40px", alignItems: "center", width: "100%" }}>
              <p>Designed</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <p>Ternms </p>
                <p>Privacy</p>
                <p>Support</p>
              </div>
            </div>




          </div>
        </div>
      </div>
      {/* <div className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/path/to/your/logo.png" alt="Logo" />
          </div>

          <div className="footer-center">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>

          <div className="footer-right">
            <p>Design with love by Creative @2024</p>
          </div>
        </div>
      </div> */}

    </>

  );
}

export default Footer;