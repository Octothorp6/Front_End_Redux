import React from "react"
import ReactDOMServer from "react-dom/server";

const ContactTemp = msg => ReactDOMServer.renderToStaticMarkup(
    <div className="message">{msg}</div>
)

export default ContactTemp;