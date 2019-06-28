import React from "react";
import ReactDOMServer from "react-dom/server";

export const PurchaseTemp = ReactDOMServer.renderToStaticMarkup(
  <div
    className="body"
    style={{ margin: "0 !important", padding: "15px", backgroundColor: "#FFF" }}
  >
    <div className="wrapper" style={{ width: "100%", tableLayout: "fixed" }}>
      <div
        className="wrapper-inner"
        style={{
          width: "100%",
          backgroundColor: "#eee",
          maxWidth: "670px",
          margin: "0 auto"
        }}
      >
        <table
          className="outer-table"
          style={{
            width: "100%",
            maxWidth: "670px",
            margin: "0auto",
            backgroundColor: "#FFF"
          }}
        >
          <tr>
            <td
              className="header"
              style={{
                backgroundColor: "#1c1d26",
                borderBottom: "3px solid #81B9C3"
              }}
            >
              <a href="https://ethernode.io">
                <img
                  src="https://i.imgur.com/h4mPg48.png"
                  alt="headerImg"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    paddingTop: ".2em",
                    paddingBottom: ".2em"
                  }}
                />
              </a>
            </td>
          </tr>
        </table>
        <table
          className="main-table"
          style={{
            width: "100%",
            maxWidth: "610px",
            margin: "0 auto",
            backgroundColor: "#FFF",
            borderRadius: "6px"
          }}
        >
          <table
            className="outer-table-2"
            style={{
              width: "100%",
              maxWidth: "670px",
              margin: "0 auto",
              backgroundColor: "#FFF"
            }}
          >
            <tr />
          </table>

          <table
            className="main-table"
            style={{
              width: "100%",
              maxWidth: "610px",
              margin: "0 auto",
              backgroundColor: "#FFF",
              borderRadius: "6px"
            }}
          >
            <tr>
              <td className="one-column">
                <table
                  style={{
                    borderSpacing: "0",
                    fontFamily: "sans-serif",
                    color: " #727f80",
                    width: "100%"
                  }}
                >
                  <tr>
                    <td className="inner-bottom" style={{ padding: "22px" }}>
                      <img
                        src="https://i.imgur.com/QWRdliE.png"
                        title="Enkeep"
                        alt="EnKeep"
                        style={{ maxWidth: "100%" }}
                      />
                      <p
                        style={{
                          textAlign: "center !important",
                          fontSize: "25px !important",
                          fontWeight: 600,
                          lineHeight: "45px",
                          margin: "12px 0 20px 0",
                          color: "#4A4A4A"
                        }}
                      >
                        Welcome to Decentralized Networking!
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                          textAlign: "justify"
                        }}
                      >
                        Thank you for purchasing an EnKeep, your gateway to the
                        private, secure, permission-less and censorship
                        resistant network of Ethereum blockchains. As a peer in
                        this network you’ll have access to its many features
                        through EnOS, a transparent and secure digital
                        environment in which to build and utilize applications
                        engineered to protect your data, not exploit it. EnKeep
                        is in production and will begin shipping in early July.
                        Thank you for being part of our early efforts to bring
                        the technology of blockchain and the power of digital
                        freedom to the world.
                      </p>
                      <br />
                      <p> - Team Ethernode</p>
                      <div
                        className="button-holder-center"
                        style={{ textAlign: "center", margin: "5% 2% 3% 0" }}
                      >
                        <a
                          className="btn"
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            backgroundColor: "#2fce74",
                            color: "#FFF",
                            textDecoration: "none",
                            padding: "9px 16px",
                            borderRadius: "28px",
                            textAlign: "center"
                          }}
                          href="https://ethernode.io"
                        >
                          Learn more
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <table
            className="outer-table-3"
            style={{
              width: "100%",
              maxWidth: "670px",
              margin: "22px auto",
              backgroundColor: "#C2C1C1",
              borderTop: "3px solid #81B9C3"
            }}
          >
            <tr>
              <td className="one-column">
                <table
                  style={{
                    borderSpacing: 0,
                    fontFamily: "sans-serif",
                    color: "#727f80",
                    width: "100%"
                  }}
                >
                  <tr>
                    <td
                      className="footer"
                      style={{
                        width: "100%",
                        backgroundColor: " #1c1d26",
                        margin: "0 auto",
                        color: "#FFF"
                      }}
                    >
                      <img
                        src="https://i.imgur.com/h4mPg48.png"
                        alt="Header-Dark"
                        style={{
                          maxWidth: "135px",
                          margin: "0 auto",
                          display: "block",
                          padding: "4% 0 1% 0"
                        }}
                      />
                      <p
                        className="footer"
                        style={{
                          textAlign: "center",
                          color: "#FFF !important",
                          lineHeight: "30px",
                          paddingBottom: "4%",
                          textTransform: "uppercase"
                        }}
                      >
                        &copy; Ethernode 2019.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </table>
      </div>
    </div>
  </div>
);