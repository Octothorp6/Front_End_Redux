import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import developer_mode from "@material-ui/icons/DeveloperMode";
import Cloud from "@material-ui/icons/Cloud";
import flight_takeoff from "@material-ui/icons/FlightTakeoff";
import {
  enKeepIcon,
  enosLogo,
  purpose,
  gateway,
  developer,
  smartHome,
  networkEarth,
  architecture,
  cloudImg,
  enconnectLogo,
  tuxor
} from "../../../assets/index";
import Home from "@material-ui/icons/Home";
// core components
import { GridContainer, GridItem } from "../../UI/Grid";
import NavPills from "../navPills";
import pillsStyle from "./navPillsStyle";
import ListItem from "../List";
import List from "@material-ui/core/List";
import Presale from "../Presale";
import EnOs from "../EnOs";

function SectionPills(props) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="success"
                horizontal={{
                  tabsGrid: { xs: 12, md: 3, sm: 3, lg: 3 },
                  contentGrid: { xs: 12, sm: 9, md: 9, lg: 9 }
                }}
                tabs={[
                
                  {
                    tabButton: "EnKeep",
                    tabIcon: Home,
                    tabContent: (
                      <React.Fragment>
                        <img
                          src={enKeepIcon}
                          alt="enKeep"
                          style={{ maxWidth: "6em" }}
                        />
                        <List>
                          <ListItem
                            alt="plug"
                            icon={gateway}
                            header="Gateway/Network"
                            text={
                              <>
                                Connecting to blockchain networks with EnKeep is
                                as easy as plugging in the power, connecting an
                                ethernet cable to your router, and logging in
                                from your computer or smart phone. You can host
                                nodes for any supported blockchains with a
                                single click and be instantly connected to the
                                network.
                              </>
                            }
                          />
                          <ListItem
                            alt="developer"
                            icon={developer}
                            header="Developer Tools"
                            text={
                              <>
                                EnKeep runs the EnOS Linux operating system
                                which has been engineered to increase access to
                                and enhance the properties and features of
                                Ethereum blockchains and networks. The Open-RPC
                                spec JSON-RPC api allows easy development of
                                truly decentralized blockchain applications, no
                                3rd parties required for users with EnOS.
                              </>
                            }
                          />
                          <ListItem
                            alt="img"
                            icon={smartHome}
                            header="Decentralized Applications"
                            text={
                              <>
                                Personal digital data has rapidly become one of
                                the most valuable commodities on earth and the
                                value continues to increase as more connected
                                devices enter our daily lives. The security of
                                the devices and sensors in your home and the
                                data they produce is critical to your personal
                                privacy and that data is currently being
                                monetized and occasionally exposed by the
                                companies collecting it. Ethernode is developing
                                smart home devices with a different model,
                                <br />
                                <br />
                                <strong>It's YOUR data, OWN it.</strong> <br />
                              </>
                            }
                          />
                        </List>
                        <Presale />
                      </React.Fragment>
                    )
                  },
                  {
                    tabButton: "Mission",
                    tabIcon: flight_takeoff,
                    tabContent: (
                      <span>
                        <img
                          src={networkEarth}
                          alt="networkEarth"
                          style={{ maxWidth: "8em" }}
                        />
                        <p style={{ color: "white" }}>
                          Blockchain networks have the potential to make
                          meaningful and lasting positive changes, allowing
                          people around the <br className="nully" /> world to
                          communicate, transact, and transfer information
                          privately and securely. At the core of this technology
                          is a <br className="nully" />
                          powerful principle - trust minimization, reducing or
                          eliminating reliance on 3rd parties for formal
                          verification.
                          <br />
                          <br />
                          While most of the attention around blockchain networks
                          has been focused on the blockchain part, at Ethernode
                          we’re all <br className="nully" /> about the networks.
                          Public encrypted networks like Ethereum Classic and
                          Ethereum are permission-less to join. If you have an
                          <br className="nully" /> internet connection and
                          modest hardware you simply host a node and become a
                          peer in a secure distributed public network!
                          <br className="nully" />
                          This stores a synced copy of the blockchain ledger on
                          your local hardware and you get a network address
                          which allows you to <br className="nully" />
                          send and receive data securely and privately from
                          other peers in the network. Unfortunately, nodes
                          haven’t been that simple to
                          <br className="nully" /> host and even as user
                          awareness and adoption have grown the number of nodes
                          has decreased, requiring users to{" "}
                          <br className="nully" />
                          rely on a remote connection to a 3rd party node host
                          for their blockchain interactions. Not very trust
                          minimized.
                          <br />
                          <br />
                          We’re solving this problem by making node hosting
                          simple, convenient, and practical.
                          <br /> <br />
                          EnOS is an opensource Linux operating system built for
                          blockchain, a platform where DApps run on the user’s
                          device and all <br className="nully" /> user data and
                          blockchain interactions happen locally and securely.
                          With EnKeep you not only get plug and play convenience
                          but <br className="nully" />
                          also the fortress at the center of your own private
                          and secure home mesh network. This creats an
                          environment where your <br className="nully" />
                          increasingly connected smart home can communicate
                          securely and you own the data you produce.
                          <br />
                          <br />
                          To a future of effectively implemented trust
                          minimization maximalism!
                          <br />
                          <br />
                          -Team Ethernode
                        </p>
                        <img
                          src={tuxor}
                          alt="tuxor"
                          style={{ maxWidth: "8em" }}
                        />
                      </span>
                    )
                  },
                  {
                    tabButton: "EnOs",
                    tabIcon: developer_mode,
                    tabContent: (
                      <span>
                        <img
                          src={enosLogo}
                          alt="enKeep"
                          style={{ maxWidth: "4em" }}
                        />
                        <List>
                          <ListItem
                            alt="purpose"
                            icon={purpose}
                            header="Purpose"
                            text={
                              <>
                                Trust is one of the fundamental components of
                                human interaction, allowing us to specialize and
                                leverage resources to tremendous mutual
                                advantage. It’s also ephemeral, difficult to
                                quantify, time consuming to gain and can be
                                irreparably damaged without justification or
                                recourse. Encrypted public networks with the
                                distributed ledger technology of blockchains
                                have the potential to reduce the frictional
                                costs of many traditional verification processes
                                with exponential benefits for everyone. In
                                ordert to effectively applying trust minimized
                                technology users must participate in the network
                                directly.
                                <br />
                                <br />
                                Basically, you'll need a node.
                              </>
                            }
                          />
                          <ListItem
                            alt="architecture"
                            icon={architecture}
                            header="Architecture"
                            text={
                              <>
                                EnOS is an open source Linux based operating
                                system with built in tools for hosting and
                                administrating blockchain nodes and a JSON-RPC
                                api and SDK for building and running
                                decentralized applications that interact with
                                blockchains through local nodes. It is
                                lightweight and can be installed on a Single
                                Board Computer, hard drive partition, and cloud
                                hosted environments.
                              </>
                            }
                          />
                        </List>
                        <br />
                        <br />
                        <br />
                        <EnOs />
                      </span>
                    )
                  },
                  {
                    tabButton: "EnConnect",
                    tabIcon: Cloud,
                    tabContent: (
                      <span>
                        <img
                          src={enconnectLogo}
                          alt="earth"
                          style={{ maxWidth: "6em" }}
                        />
                        <List>
                          <ListItem
                            alt="cloud"
                            icon={cloudImg}
                            header="EnConnect"
                            text={
                              <>
                                Deploying DApps for users who don’t host a node
                                will always require that the user performs
                                blockchain transactions through a node or node
                                network that is either public or maintained by
                                the developer. Providing users with reliable,
                                low latency connections is key to their
                                satisfaction and EnConnect makes it easy to
                                manage and scale a network of geographically
                                distributed nodes to meet your user’s needs.
                                EnConnect also provides managed infrastructure
                                for enterprises and institutions utilizing
                                private blockchain networks. Services start with
                                creating and deploying private PoA blockchains
                                that give you full power over how your
                                blockchain solution is deployed and extend to
                                application and hardware development.
                              </>
                            }
                          />
                        </List>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(pillsStyle)(SectionPills);
