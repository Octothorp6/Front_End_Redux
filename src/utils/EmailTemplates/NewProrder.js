
import React from "react"
import ReactDOMServer from "react-dom/server";

export const NewSalesTemp = (firstName, lastName, email, total) => ReactDOMServer.renderToStaticMarkup(
    <div className="message"> You have a new preorder ! <br />
      Order Information<br />
      {firstName} {lastName}<br />
      Email address: {email}<br />
      Order total: {total} 
     </div>
)
