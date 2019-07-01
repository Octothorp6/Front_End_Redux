import React from "react"
import ReactDOMServer from "react-dom/server";

export const ContactTemp = msg => ReactDOMServer.renderToStaticMarkup(
    <div className="message">{msg}</div>
)
