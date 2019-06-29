
import React from "react"
import ReactDOMServer from "react-dom/server";

export const NewSalesTemp = (firstName, lastName, email, total) => ReactDOMServer.renderToStaticMarkup(
    <div className="message"> You have a new preorder ! <br />
      Order Information
      {firstName}{lastName}
      Email address: {email}
      Order total: {total} 
     </div>
)