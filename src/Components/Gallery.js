import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from '@mui/material/styles';
import PhotoGallery from "react-photo-gallery";
import { photos } from "../data/photos";
import { ThemeProvider } from '@mui/material/styles';

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
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}


const BasicRows = () => <PhotoGallery photos={photos} />;

const theme = createTheme({
  palette: {
    type: "ligth",  
    primary: {
      main: "#041340",
    },
    secondary: {
      main: "#F57365",
    },
  }
});
const tabStyle = { default_tab:{ color: "#68C222", width: "33.3%", backgroundColor: "#FFFFFF", fontSize: 15 } };
const Gallery = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="gallery">
    <ThemeProvider theme={theme}>
    <h1 className="gallery-title">Art Works</h1>
    <Box sx={{ maxWidth: "100%", bgcolor: 'transparent' }}>
    <AppBar position="static" elevation={0} >
        <Tabs
          className="tabs"
          value={value}
          color="secondary"
          onChange={handleChange}
          indicatorColor="transparent"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"

          style={tabStyle}
        >
          <Tab className="main-tab" label={<span className= "main-tab" style={{ color: 'white', fontFamily:'museo500' }}>Item One</span>} {...a11yProps(0)} />
          <Tab className="main-tab" label={<span className= "main-tab">Item Two</span>} {...a11yProps(1)} />
          <Tab className="main-tab" label={<span className= "main-tab">Item Three</span>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} >
          <BasicRows/>
        </TabPanel>
        <TabPanel value={value} index={1} >
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </ThemeProvider>
    </div>
  );
  
}
export default Gallery;

