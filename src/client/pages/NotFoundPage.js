import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h2>Oops, page not found.</h2>;
};

export default {
  component: NotFoundPage
};
