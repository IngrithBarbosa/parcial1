import React from 'react';
import {FormattedMessage} from "react-intl";

function Footer (){
  return (
    <div className="footer" style={{ textAlign: 'center', backgroundColor:'#FFFFFF' }}>
       <div>
          <FormattedMessage id="Contact"/>: +57 3102105253 - info@tusegundazo.com - @tusegundazo 
        </div>
    </div>
  );
}

export default Footer;