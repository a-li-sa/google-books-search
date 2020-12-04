import React from 'react';
import Box from '@material-ui/core/Box';

export const ErrorDisplay = (props) => {
  return (
    <div>
      Your search - <b>{props.term}</b> - did not match any book results.
      <Box mt={1} mb={1}>
        Suggestions:
      </Box>
        • Make sure all words are spelled correctly.<br/>
        • Try different keywords.<br/>
        • Try more general keywords.<br/>
        • Try fewer keywords.
    </div>
  )
}
