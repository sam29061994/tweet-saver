import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

export default ({ onChange, value }) => (
  <React.Fragment>
    <IconButton type="submit">
      <SearchIcon />
    </IconButton>

    <InputBase
      value={value}
      onChange={onChange}
      placeholder="Search Recent Tweets ..."
    />
  </React.Fragment>
);
