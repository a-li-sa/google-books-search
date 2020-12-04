import React, {useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';
import SearchIcon from '@material-ui/icons/Search'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#2979ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 70,
    fontWeight: theme.typography.fontWeightRegular,
    '&$selected': {
      color: '#2979ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#2979ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const Navbar = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <AntTabs value={value} onChange={handleChange} style={{paddingLeft: 75}}>
          <AntTab label={<div><SearchIcon fontSize="small" style={{verticalAlign: 'middle'}}/> Search</div>} {...a11yProps(0)} id="searchTab"/>
          <AntTab label={<div><StarIcon fontSize="small" style={{verticalAlign: 'middle'}}/> Saved</div>} {...a11yProps(1)}/>
        </AntTabs>
      </AppBar>
      {props.divider}
      <TabPanel value={value} index={0} style={{marginLeft: 50, marginRight: 50}}>
        {props.search}
      </TabPanel>
      <TabPanel value={value} index={1} style={{marginLeft: 50, marginRight: 50}}>
        {props.saved}
      </TabPanel>
    </div>
  );
}
