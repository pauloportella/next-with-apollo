import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';

const QUERY = gql`
  {
    hire {
      id
      name
    }
  }
`;

let e = false;

const Index = () => {
  const router = useRouter();
  useQuery(QUERY);

  if (!router || e) {
    e = true;
    return <p>null router</p>;
  }

  return <p>all good</p>;
};

export default Index;
