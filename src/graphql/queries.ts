/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMisInfo = /* GraphQL */ `
  query GetMisInfo($id: ID!) {
    getMisInfo(id: $id) {
      id
      fullname
      email
      description
      url
      createdAt
      updatedAt
    }
  }
`;
export const listMisInfos = /* GraphQL */ `
  query ListMisInfos(
    $filter: ModelMisInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMisInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullname
        email
        description
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
