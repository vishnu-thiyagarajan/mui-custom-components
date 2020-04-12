import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import RoomIcon from "@material-ui/icons/Room";
import AdjustIcon from "@material-ui/icons/Adjust";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 20,
    label: "Basic"
  },
  {
    value: 40,
    label: "IGBC"
  },
  {
    value: 60,
    label: "IGBC PLATINUM"
  },
  {
    value: 80,
    label: "SD+"
  },
  {
    value: 100,
    label: "SD+ ZEN"
  }
];

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const PrettoMinSlider = withStyles({
  disabled: {
    color: "#FFA450",
    height: 10
  },
  thumb: {
    height: 200,
    width: 200,
    backgroundColor: "#FFCB8D",
    marginTop: -5,
    marginLeft: -10
  },
  track: {
    height: 8,
    // borderRadius: 0,
    borderRadius: 40,
    color: "#FFCB8D"
  },
  rail: {
    height: 8,
    borderRadius: 40
    // color: "transparent"
  },
  mark: {
    color: "#000000",
    opacity: 0.2,
    height: 15,
    width: 1,
    marginTop: -3
  }
})(Slider);

const PrettoMaxSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "transparent",
    marginTop: -22,
    marginLeft: -11
  },
  track: {
    height: 8,
    borderRadius: 40,
    color: "#28DEAA"
  },
  rail: {
    height: 8,
    borderRadius: 40,
    color: "#C9EDF8"
  }
})(Slider);

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        bgcolor="background.transparent"
        p={3}
        position="absolute"
        top={0}
        width="100%"
        zIndex="-1"
      >
        <PrettoMinSlider
          ThumbComponent={AvgThumbComponent}
          disabled
          aria-label="pretto slider"
          defaultValue={20}
          marks={marks}
        />
      </Box>
      <Box
        bgcolor="background.transparent"
        p={3}
        position="absolute"
        top={0}
        width="100%"
        zIndex="-2"
      >
        <PrettoMaxSlider
          ThumbComponent={YouThumbComponent}
          aria-label="pretto slider"
          defaultValue={40}
          // marks={marks}
        />
      </Box>
    </div>
  );
}

function YouThumbComponent(props) {
  return (
    <span {...props}>
      <RoomIcon fontSize="large" />
    </span>
  );
}

function AvgThumbComponent(props) {
  return (
    <span {...props}>
      <AdjustIcon style={{ fontSize: 13 }} />
    </span>
  );
}
