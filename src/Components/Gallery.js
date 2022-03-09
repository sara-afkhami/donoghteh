import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Carousel, { Modal, ModalGateway } from "react-images";
import SwipeableViews from "react-swipeable-views";
import { styled } from "@mui/material/styles";
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


const BasicRows = (props) => {

  console.log("here "+props.photos)
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>

      <PhotoGallery photos={props.photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );

}

const theme = createTheme({
  palette: {
    type: "ligth",  
    primary: {
      main: '#000',
      opacity: 0
    },
    secondary: {
      main: "#F57365",
    },
  }
});

const AntTab = styled((props) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#B3DAC6",
    fontFamily: [
      
    ].join(","),
    "&:hover": {
      color: "#c14f42",
      opacity: 1
    },
    "&.Mui-selected": {
      color: "#F57365",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff"
    }
  })
);

const Gallery = () => {

  const [value, setValue] = React.useState(0);
  const [selectedPhotos, setSelectedPhotos] = useState(photos);
  const [selectedTags, setSelectedTags] = useState([])
  const allTags = [];
  let allPhotos = photos;
  const filter= ({tag}) =>{
    if (selectedTags.includes(tag)){
      selectedTags.filter((value)=>value!==tag);
    }
    else {
      selectedTags.push(tag);
      selectedTags.sort();
    }
    setSelectedTags(selectedTags);
    //for on tags for adding active class to buttons
    for (let i = 0; i < allPhotos.length; i++) {
      if (allPhotos[i].tags === selectedTags){ //each format
        selectedPhotos.push(allPhotos[i])
      }
      else continue;
      
    }
    setSelectedPhotos(selectedPhotos)
  }

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
    <AppBar position="static" elevation={0}  style={{background:'rgba(0,0,0,0)'}}>
        <Tabs
          className="tabs"
          value={value}
          color="secondary"
          onChange={handleChange}
          indicatorColor="transparent"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <AntTab className="main-tab" label={<span className= "main-tab">Visual Branding</span>} {...a11yProps(0)} />
          <AntTab className="main-tab" label={<span className= "main-tab">Animation & Motion</span>} {...a11yProps(1)} />
          <AntTab className="main-tab" label={<span className= "main-tab">Teaser & Video</span>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} >
          <div className="tab-div">
            <div>
            <button className="tab-button" onClick={filter}>+logo</button>
            <button className="tab-button" onClick={filter}>+Cl</button>
            <button className="tab-button" onClick={filter}>+Catalog</button>
            
            </div>
            <BasicRows photos={selectedPhotos} />
          </div>
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

