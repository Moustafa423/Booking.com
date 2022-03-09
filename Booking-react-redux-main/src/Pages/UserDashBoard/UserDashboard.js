import React, { useEffect } from "react";
  import Profile from "../../component/UserDashBoard/Profile";
import Bookings from "../../component/UserDashBoard/Bookings";
 import Reviews from "../../component/UserDashBoard/Reviews";
import Community from "../../component/UserDashBoard/Community";
import "./style.css";
 import PropTypes from "prop-types";
 import SwipeableViews from "react-swipeable-views";
 import { useTheme } from "@mui/material/styles";
 import AppBar from "@mui/material/AppBar";
 import Tabs from "@mui/material/Tabs";
 import Tab from "@mui/material/Tab";
 import Typography from "@mui/material/Typography";
 import Box from "@mui/material/Box";



  
export default function UserDashboard() {
 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}


 const theme = useTheme();
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };

 const handleChangeIndex = (index) => {
   setValue(index);
 };





  useEffect(() => {
 
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: "instant",
     });
  }, []);

  return (
    <>
      {/* <div className="color ">
        <div className="container bg-white py-3  ">
          <Tabs defaultActiveKey="Profile" id="uncontrolled-tab-example">
            <Tab className="tabs" eventKey="Profile" title="Profile">
              <Profile />
            </Tab>
            <Tab eventKey="Bookings" title="Bookings">
              <Bookings />
            </Tab>
            
            <Tab eventKey="Reviews" title="Reviews">
              <Reviews />
            </Tab>
            <Tab eventKey="Community" title="Community">
              <Community />
            </Tab>
          </Tabs>
        </div>
      </div> */}

      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Bookings" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
            <Tab label="Community" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Bookings />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Reviews />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Community />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
}
