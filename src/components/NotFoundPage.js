import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>"Shady Pines, Ma..."</h2>
        <h3> Page Not Found. </h3>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}