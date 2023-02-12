import { gql } from "apollo-boost";

const GET_TRANSFERS = gql`
  {
    accountTokenBalances(orderBy: balance) {
      id
      token
      balance
    }
  }
`;

export default GET_TRANSFERS;