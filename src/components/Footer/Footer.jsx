import React from "react";
//import { FaLocationDot, FaCommentDots, FaPhone } from "react-icons/fa6";
import '../Footer/footer.scss';

// const iconsData = [
//   { icon: <FaLocationDot />, text: "Basée en France" },
//   { icon: <FaCommentDots />, text: "Contactez-moi par e-mail" },
//   { icon: <FaPhone />, text: "Call me maybe" },
// ];

function Footer() {
  return (
    <footer id='contact'>
      {/* <div className="contact-infos">
        {iconsData.map((item, index) => (
          <div key={index}>
            <div className="custom-icons">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div> */}
      <p>© 2023 Alexandra Baumann. All rights deserved. Images de Freepik</p>
    </footer>
  );
}

export default Footer;