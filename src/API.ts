/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMisInfoInput = {
  id?: string | null,
  fullname?: string | null,
  email?: string | null,
  description: string,
  url: string,
};

export type ModelMisInfoConditionInput = {
  fullname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMisInfoConditionInput | null > | null,
  or?: Array< ModelMisInfoConditionInput | null > | null,
  not?: ModelMisInfoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateMisInfoInput = {
  id: string,
  fullname?: string | null,
  email?: string | null,
  description?: string | null,
  url?: string | null,
};

export type DeleteMisInfoInput = {
  id?: string | null,
};

export type ModelMisInfoFilterInput = {
  id?: ModelIDInput | null,
  fullname?: ModelStringInput | null,
  email?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMisInfoFilterInput | null > | null,
  or?: Array< ModelMisInfoFilterInput | null > | null,
  not?: ModelMisInfoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateMisInfoMutationVariables = {
  input: CreateMisInfoInput,
  condition?: ModelMisInfoConditionInput | null,
};

export type CreateMisInfoMutation = {
  createMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMisInfoMutationVariables = {
  input: UpdateMisInfoInput,
  condition?: ModelMisInfoConditionInput | null,
};

export type UpdateMisInfoMutation = {
  updateMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMisInfoMutationVariables = {
  input: DeleteMisInfoInput,
  condition?: ModelMisInfoConditionInput | null,
};

export type DeleteMisInfoMutation = {
  deleteMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMisInfoQueryVariables = {
  id: string,
};

export type GetMisInfoQuery = {
  getMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMisInfosQueryVariables = {
  filter?: ModelMisInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMisInfosQuery = {
  listMisInfos:  {
    __typename: "ModelMisInfoConnection",
    items:  Array< {
      __typename: "MisInfo",
      id: string,
      fullname: string | null,
      email: string | null,
      description: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateMisInfoSubscription = {
  onCreateMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMisInfoSubscription = {
  onUpdateMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMisInfoSubscription = {
  onDeleteMisInfo:  {
    __typename: "MisInfo",
    id: string,
    fullname: string | null,
    email: string | null,
    description: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
