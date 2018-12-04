import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import logo from "assets/img/icons8-electrical-48.png";
import { bugs, website, server } from "variables/general.jsx";
import logo2 from "assets/img/icons8-thermometer-64.png";
import logo3 from "assets/img/icons8-lightning-bolt-64.png";
import logo4 from "assets/img/icons8-low-battery-48.png";
import logo5 from "assets/img/icons8-gas-filled-50.png";
import logo6 from "assets/img/icons8-terms-and-conditions-48.png";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
 
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon style={{width:'55px',height:'65px'}} color="warning">
                  <i class="material-icons"><img src={logo2} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>Temperature</p>
                <h3 className={classes.cardTitle}>
                  28  &#8451;
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon style={{width:'55px',height:'65px'}} color="success">
                <i class="material-icons"><img src={logo} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>System Voltage</p>
                <h3 className={classes.cardTitle}>300 V</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Updated 2 minutes back
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon style={{width:'55px',height:'65px'}} color="danger">
                  <i class="material-icons"><img src={logo3} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>System Current</p>
                <h3 className={classes.cardTitle}>75 A</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Update/>
                  Updated now
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon style={{width:'55px',height:'65px'}} color="info">
                  <i class="material-icons"><img src={logo4} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>Power Usage</p>
                <h3 className={classes.cardTitle}>550 W</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
               <CardIcon style={{width:'55px',height:'65px'}} color="danger">
                  <i class="material-icons"><img src={logo5} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>Fire </p>
                <h3 className={classes.cardTitle}>Safe</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon style={{width:'55px',height:'65px'}} color="primary">
                  <i class="material-icons"><img src={logo6} alt='logo'/></i>
                </CardIcon>
                <p className={classes.cardCategory}>System Status</p>
                <h3 className={classes.cardTitle}>ON</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
