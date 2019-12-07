import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
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
  console.log(!loading && data.hire.name);

  if (loading || !data) {
    return <p>loading</p>;
  }

  return <p>{data.hire.name}</p>;
};

export default Index;
