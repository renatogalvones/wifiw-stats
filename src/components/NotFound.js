import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

class NotFound extends React.Component {
  render({ location }) {
    return (
      <h1>Not Found</h1>
    )
  }
}

export default NotFound;
