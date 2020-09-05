/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMisInfo = /* GraphQL */ `
  mutation CreateMisInfo(
    $input: CreateMisInfoInput!
    $condition: ModelMisInfoConditionInput
  ) {
    createMisInfo(input: $input, condition: $condition) {
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
export const updateMisInfo = /* GraphQL */ `
  mutation UpdateMisInfo(
    $input: UpdateMisInfoInput!
    $condition: ModelMisInfoConditionInput
  ) {
    updateMisInfo(input: $input, condition: $condition) {
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
export const deleteMisInfo = /* GraphQL */ `
  mutation DeleteMisInfo(
    $input: DeleteMisInfoInput!
    $condition: ModelMisInfoConditionInput
  ) {
    deleteMisInfo(input: $input, condition: $condition) {
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
