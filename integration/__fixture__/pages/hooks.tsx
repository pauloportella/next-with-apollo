import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

const QUERY = gql`
  {
    hire {
      id
      name
    }
  }
`;

const Index = () => {
  const { loading, data } = useQuery(QUERY);

  if (loading || !data) {
    return <p>loading</p>;
  }

  console.log(data);

  return <p>{data.hire.name}</p>;
};

export default Index;
