import React, { useState } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import useBooks from '../hooks/useBooks'
import { blue } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0px 0px 0px 18px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: "50px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    marginLeft: 0,
  },
  divider: {
    height: 28,
  },
}));

export const SearchBar = () => {
  const classes = useStyles();

  const {books, search } = useBooks('');
  const [term, setTerm] = useState('');
  const [shadow, setShadow] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    search(term);
  }

  const onMouseOver = () => setShadow('3');
  const onMouseOut = () => setShadow('0');
  const onClear = () => {
    setTerm('')
    document.getElementById("searchBar").focus();
  }

  return (
    <ThemeProvider theme={theme}>
      <form noValidate autoComplete="off" onSubmit={onSubmit} >
        <Box variant="outlined" boxShadow={shadow} component={Paper}className={classes.root} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <InputBase
            className={classes.input}
            id="searchBar" fullWidth value={term} onChange={event => setTerm(event.target.value)}
          />
          {term !== '' ? (
            <React.Fragment>
              <Tooltip title="Clear" placement="bottom">
                <IconButton className={classes.iconButton} style={{ backgroundColor: 'transparent' }} onClick={onClear}>
                  <CloseIcon/>
                </IconButton>
              </Tooltip>
            <Divider className={classes.divider} orientation="vertical" />
            </React.Fragment>
            ) : ''}
          <IconButton type="submit" color="primary" className={classes.iconButton} aria-label="search" style={{ backgroundColor: 'transparent' }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
    </ThemeProvider>
  )
}
