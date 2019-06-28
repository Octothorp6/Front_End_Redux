import React from "react"
import ReactDOMServer from "react-dom/server";

export const NewSalesTemp = total => ReactDOMServer.renderToStaticMarkup(
    <div className="message"> You have a new preorder ! <br /> order total:{total} </div>
)