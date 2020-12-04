import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DeleteIcon from '@material-ui/icons/Delete';

import {deleteBook} from "../apis/booksApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    maxWidth: '100%',
  },
}));

export const SavedItem = ({book}) => {
  const classes = useStyles();
  const [wrap, setWrap] = useState(true);
  const [deletedId, setDeletedId] = useState("");

  return (
    <Box className={classes.root}>
      <Box pt={2} className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <img src={book.image} alt={book.title}/>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography style={{fontSize: 20}}>
              <Link color="secondary" href={book.link} target="_blank">
                {book.title}
              </Link>
            </Typography>
            <Box mt={1} mb={1}>
              {book.authors ? (
                <Typography variant="body2">{book.authors.join(', ')}</Typography>
              ) : ''}
            </Box>
            {book.description ? (
              <React.Fragment>
                <Box mb={1}>
                  <Typography variant="body2" onClick={() => setWrap(!wrap)} noWrap={wrap} >{book.description}</Typography>
                </Box>
                <Button
                  startIcon={<MenuBookIcon color="primary"/>}
                  size="small"
                  variant="outlined"
                  onClick={() => setWrap(!wrap)}
                  style={{
                    fontWeight: 'normal',
                    textTransform: 'none',
                    borderRadius: '25px',
                    marginRight: '10px',
                  }}
                >
                  {wrap ? 'See More' : 'See Less'}
                </Button>
              </React.Fragment>
            ) : ''}
            <Button
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon color="primary"/>}
              onClick={() => {
                setDeletedId(book._id);
                deleteBook(deletedId);
              }}
              style={{
                fontWeight: 'normal',
                textTransform: 'none',
                borderRadius: '25px',
              }}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
