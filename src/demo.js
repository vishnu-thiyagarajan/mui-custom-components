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
  root: {
    color: "#FFA450",
    height: 8
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#FFCB8D",
    marginTop: -2,
    marginLeft: -12
  },
  track: {
    height: 8,
    borderRadius: 40,
    color: "#FFCB8D"
  },
  rail: {
    height: 8,
    borderRadius: 40,
    color: "transparent"
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
        p={2}
        position="absolute"
        top={0}
        left="0%"
        width="100%"
        height="20%"
        zIndex="-1"
      >
        <PrettoMinSlider
          ThumbComponent={AvgThumbComponent}
          aria-label="pretto slider"
          defaultValue={25}
        />
      </Box>
      <Box
        bgcolor="background.transparent"
        p={2}
        position="absolute"
        top={0}
        left="0%"
        width="100%"
        zIndex="-2"
      >
        <PrettoMaxSlider
          ThumbComponent={YouThumbComponent}
          aria-label="pretto slider"
          defaultValue={40}
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
      <AdjustIcon fontSize="small" />
    </span>
  );
}
