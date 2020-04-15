import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Title = styled('h1')`
  margin: 0;
  font-size: 20px;
  color: orange;
`;

const News = () => (
  <div>
    <Helmet>
      <title>News</title>
    </Helmet>
    <Title>News</Title>
  </div>
);

export default News;
