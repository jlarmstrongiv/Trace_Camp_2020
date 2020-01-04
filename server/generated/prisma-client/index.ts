// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  country: (where?: CountryWhereInput) => Promise<boolean>;
  landmark: (where?: LandmarkWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  country: (where: CountryWhereUniqueInput) => CountryNullablePromise;
  countries: (args?: {
    where?: CountryWhereInput;
    orderBy?: CountryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Country>;
  countriesConnection: (args?: {
    where?: CountryWhereInput;
    orderBy?: CountryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CountryConnectionPromise;
  landmark: (where: LandmarkWhereUniqueInput) => LandmarkNullablePromise;
  landmarks: (args?: {
    where?: LandmarkWhereInput;
    orderBy?: LandmarkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Landmark>;
  landmarksConnection: (args?: {
    where?: LandmarkWhereInput;
    orderBy?: LandmarkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => LandmarkConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCountry: (data: CountryCreateInput) => CountryPromise;
  updateCountry: (args: {
    data: CountryUpdateInput;
    where: CountryWhereUniqueInput;
  }) => CountryPromise;
  updateManyCountries: (args: {
    data: CountryUpdateManyMutationInput;
    where?: CountryWhereInput;
  }) => BatchPayloadPromise;
  upsertCountry: (args: {
    where: CountryWhereUniqueInput;
    create: CountryCreateInput;
    update: CountryUpdateInput;
  }) => CountryPromise;
  deleteCountry: (where: CountryWhereUniqueInput) => CountryPromise;
  deleteManyCountries: (where?: CountryWhereInput) => BatchPayloadPromise;
  createLandmark: (data: LandmarkCreateInput) => LandmarkPromise;
  updateLandmark: (args: {
    data: LandmarkUpdateInput;
    where: LandmarkWhereUniqueInput;
  }) => LandmarkPromise;
  updateManyLandmarks: (args: {
    data: LandmarkUpdateManyMutationInput;
    where?: LandmarkWhereInput;
  }) => BatchPayloadPromise;
  upsertLandmark: (args: {
    where: LandmarkWhereUniqueInput;
    create: LandmarkCreateInput;
    update: LandmarkUpdateInput;
  }) => LandmarkPromise;
  deleteLandmark: (where: LandmarkWhereUniqueInput) => LandmarkPromise;
  deleteManyLandmarks: (where?: LandmarkWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  country: (
    where?: CountrySubscriptionWhereInput
  ) => CountrySubscriptionPayloadSubscription;
  landmark: (
    where?: LandmarkSubscriptionWhereInput
  ) => LandmarkSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type LandmarkOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "city_name_ASC"
  | "city_name_DESC"
  | "rating_ASC"
  | "rating_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type CountryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type CountryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface LandmarkWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  city_name?: Maybe<String>;
  city_name_not?: Maybe<String>;
  city_name_in?: Maybe<String[] | String>;
  city_name_not_in?: Maybe<String[] | String>;
  city_name_lt?: Maybe<String>;
  city_name_lte?: Maybe<String>;
  city_name_gt?: Maybe<String>;
  city_name_gte?: Maybe<String>;
  city_name_contains?: Maybe<String>;
  city_name_not_contains?: Maybe<String>;
  city_name_starts_with?: Maybe<String>;
  city_name_not_starts_with?: Maybe<String>;
  city_name_ends_with?: Maybe<String>;
  city_name_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  country?: Maybe<CountryWhereInput>;
  AND?: Maybe<LandmarkWhereInput[] | LandmarkWhereInput>;
  OR?: Maybe<LandmarkWhereInput[] | LandmarkWhereInput>;
  NOT?: Maybe<LandmarkWhereInput[] | LandmarkWhereInput>;
}

export interface CountryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  landmarks_every?: Maybe<LandmarkWhereInput>;
  landmarks_some?: Maybe<LandmarkWhereInput>;
  landmarks_none?: Maybe<LandmarkWhereInput>;
  AND?: Maybe<CountryWhereInput[] | CountryWhereInput>;
  OR?: Maybe<CountryWhereInput[] | CountryWhereInput>;
  NOT?: Maybe<CountryWhereInput[] | CountryWhereInput>;
}

export type LandmarkWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface CountryCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  landmarks?: Maybe<LandmarkCreateManyWithoutCountryInput>;
}

export interface LandmarkCreateManyWithoutCountryInput {
  create?: Maybe<
    LandmarkCreateWithoutCountryInput[] | LandmarkCreateWithoutCountryInput
  >;
  connect?: Maybe<LandmarkWhereUniqueInput[] | LandmarkWhereUniqueInput>;
}

export interface LandmarkCreateWithoutCountryInput {
  id?: Maybe<ID_Input>;
  name: String;
  city_name: String;
  rating?: Maybe<Int>;
}

export interface CountryUpdateInput {
  name?: Maybe<String>;
  landmarks?: Maybe<LandmarkUpdateManyWithoutCountryInput>;
}

export interface LandmarkUpdateManyWithoutCountryInput {
  create?: Maybe<
    LandmarkCreateWithoutCountryInput[] | LandmarkCreateWithoutCountryInput
  >;
  delete?: Maybe<LandmarkWhereUniqueInput[] | LandmarkWhereUniqueInput>;
  connect?: Maybe<LandmarkWhereUniqueInput[] | LandmarkWhereUniqueInput>;
  set?: Maybe<LandmarkWhereUniqueInput[] | LandmarkWhereUniqueInput>;
  disconnect?: Maybe<LandmarkWhereUniqueInput[] | LandmarkWhereUniqueInput>;
  update?: Maybe<
    | LandmarkUpdateWithWhereUniqueWithoutCountryInput[]
    | LandmarkUpdateWithWhereUniqueWithoutCountryInput
  >;
  upsert?: Maybe<
    | LandmarkUpsertWithWhereUniqueWithoutCountryInput[]
    | LandmarkUpsertWithWhereUniqueWithoutCountryInput
  >;
  deleteMany?: Maybe<LandmarkScalarWhereInput[] | LandmarkScalarWhereInput>;
  updateMany?: Maybe<
    | LandmarkUpdateManyWithWhereNestedInput[]
    | LandmarkUpdateManyWithWhereNestedInput
  >;
}

export interface LandmarkUpdateWithWhereUniqueWithoutCountryInput {
  where: LandmarkWhereUniqueInput;
  data: LandmarkUpdateWithoutCountryDataInput;
}

export interface LandmarkUpdateWithoutCountryDataInput {
  name?: Maybe<String>;
  city_name?: Maybe<String>;
  rating?: Maybe<Int>;
}

export interface LandmarkUpsertWithWhereUniqueWithoutCountryInput {
  where: LandmarkWhereUniqueInput;
  update: LandmarkUpdateWithoutCountryDataInput;
  create: LandmarkCreateWithoutCountryInput;
}

export interface LandmarkScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  city_name?: Maybe<String>;
  city_name_not?: Maybe<String>;
  city_name_in?: Maybe<String[] | String>;
  city_name_not_in?: Maybe<String[] | String>;
  city_name_lt?: Maybe<String>;
  city_name_lte?: Maybe<String>;
  city_name_gt?: Maybe<String>;
  city_name_gte?: Maybe<String>;
  city_name_contains?: Maybe<String>;
  city_name_not_contains?: Maybe<String>;
  city_name_starts_with?: Maybe<String>;
  city_name_not_starts_with?: Maybe<String>;
  city_name_ends_with?: Maybe<String>;
  city_name_not_ends_with?: Maybe<String>;
  rating?: Maybe<Int>;
  rating_not?: Maybe<Int>;
  rating_in?: Maybe<Int[] | Int>;
  rating_not_in?: Maybe<Int[] | Int>;
  rating_lt?: Maybe<Int>;
  rating_lte?: Maybe<Int>;
  rating_gt?: Maybe<Int>;
  rating_gte?: Maybe<Int>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<LandmarkScalarWhereInput[] | LandmarkScalarWhereInput>;
  OR?: Maybe<LandmarkScalarWhereInput[] | LandmarkScalarWhereInput>;
  NOT?: Maybe<LandmarkScalarWhereInput[] | LandmarkScalarWhereInput>;
}

export interface LandmarkUpdateManyWithWhereNestedInput {
  where: LandmarkScalarWhereInput;
  data: LandmarkUpdateManyDataInput;
}

export interface LandmarkUpdateManyDataInput {
  name?: Maybe<String>;
  city_name?: Maybe<String>;
  rating?: Maybe<Int>;
}

export interface CountryUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface LandmarkCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  city_name: String;
  rating?: Maybe<Int>;
  country: CountryCreateOneWithoutLandmarksInput;
}

export interface CountryCreateOneWithoutLandmarksInput {
  create?: Maybe<CountryCreateWithoutLandmarksInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
}

export interface CountryCreateWithoutLandmarksInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface LandmarkUpdateInput {
  name?: Maybe<String>;
  city_name?: Maybe<String>;
  rating?: Maybe<Int>;
  country?: Maybe<CountryUpdateOneRequiredWithoutLandmarksInput>;
}

export interface CountryUpdateOneRequiredWithoutLandmarksInput {
  create?: Maybe<CountryCreateWithoutLandmarksInput>;
  update?: Maybe<CountryUpdateWithoutLandmarksDataInput>;
  upsert?: Maybe<CountryUpsertWithoutLandmarksInput>;
  connect?: Maybe<CountryWhereUniqueInput>;
}

export interface CountryUpdateWithoutLandmarksDataInput {
  name?: Maybe<String>;
}

export interface CountryUpsertWithoutLandmarksInput {
  update: CountryUpdateWithoutLandmarksDataInput;
  create: CountryCreateWithoutLandmarksInput;
}

export interface LandmarkUpdateManyMutationInput {
  name?: Maybe<String>;
  city_name?: Maybe<String>;
  rating?: Maybe<Int>;
}

export interface CountrySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CountryWhereInput>;
  AND?: Maybe<CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput>;
  OR?: Maybe<CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput>;
  NOT?: Maybe<CountrySubscriptionWhereInput[] | CountrySubscriptionWhereInput>;
}

export interface LandmarkSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<LandmarkWhereInput>;
  AND?: Maybe<
    LandmarkSubscriptionWhereInput[] | LandmarkSubscriptionWhereInput
  >;
  OR?: Maybe<LandmarkSubscriptionWhereInput[] | LandmarkSubscriptionWhereInput>;
  NOT?: Maybe<
    LandmarkSubscriptionWhereInput[] | LandmarkSubscriptionWhereInput
  >;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Country {
  id: ID_Output;
  name: String;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
}

export interface CountryPromise extends Promise<Country>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  landmarks: <T = FragmentableArray<Landmark>>(args?: {
    where?: LandmarkWhereInput;
    orderBy?: LandmarkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CountrySubscription
  extends Promise<AsyncIterator<Country>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  landmarks: <T = Promise<AsyncIterator<LandmarkSubscription>>>(args?: {
    where?: LandmarkWhereInput;
    orderBy?: LandmarkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface CountryNullablePromise
  extends Promise<Country | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  landmarks: <T = FragmentableArray<Landmark>>(args?: {
    where?: LandmarkWhereInput;
    orderBy?: LandmarkOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Landmark {
  id: ID_Output;
  name: String;
  city_name: String;
  rating?: Int;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
}

export interface LandmarkPromise extends Promise<Landmark>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  city_name: () => Promise<String>;
  rating: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  country: <T = CountryPromise>() => T;
}

export interface LandmarkSubscription
  extends Promise<AsyncIterator<Landmark>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  city_name: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  country: <T = CountrySubscription>() => T;
}

export interface LandmarkNullablePromise
  extends Promise<Landmark | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  city_name: () => Promise<String>;
  rating: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  country: <T = CountryPromise>() => T;
}

export interface CountryConnection {
  pageInfo: PageInfo;
  edges: CountryEdge[];
}

export interface CountryConnectionPromise
  extends Promise<CountryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CountryEdge>>() => T;
  aggregate: <T = AggregateCountryPromise>() => T;
}

export interface CountryConnectionSubscription
  extends Promise<AsyncIterator<CountryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CountryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCountrySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface CountryEdge {
  node: Country;
  cursor: String;
}

export interface CountryEdgePromise extends Promise<CountryEdge>, Fragmentable {
  node: <T = CountryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface CountryEdgeSubscription
  extends Promise<AsyncIterator<CountryEdge>>,
    Fragmentable {
  node: <T = CountrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateCountry {
  count: Int;
}

export interface AggregateCountryPromise
  extends Promise<AggregateCountry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCountrySubscription
  extends Promise<AsyncIterator<AggregateCountry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface LandmarkConnection {
  pageInfo: PageInfo;
  edges: LandmarkEdge[];
}

export interface LandmarkConnectionPromise
  extends Promise<LandmarkConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LandmarkEdge>>() => T;
  aggregate: <T = AggregateLandmarkPromise>() => T;
}

export interface LandmarkConnectionSubscription
  extends Promise<AsyncIterator<LandmarkConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LandmarkEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLandmarkSubscription>() => T;
}

export interface LandmarkEdge {
  node: Landmark;
  cursor: String;
}

export interface LandmarkEdgePromise
  extends Promise<LandmarkEdge>,
    Fragmentable {
  node: <T = LandmarkPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LandmarkEdgeSubscription
  extends Promise<AsyncIterator<LandmarkEdge>>,
    Fragmentable {
  node: <T = LandmarkSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLandmark {
  count: Int;
}

export interface AggregateLandmarkPromise
  extends Promise<AggregateLandmark>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLandmarkSubscription
  extends Promise<AsyncIterator<AggregateLandmark>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CountrySubscriptionPayload {
  mutation: MutationType;
  node: Country;
  updatedFields: String[];
  previousValues: CountryPreviousValues;
}

export interface CountrySubscriptionPayloadPromise
  extends Promise<CountrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CountryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CountryPreviousValuesPromise>() => T;
}

export interface CountrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CountrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CountrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CountryPreviousValuesSubscription>() => T;
}

export interface CountryPreviousValues {
  id: ID_Output;
  name: String;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
}

export interface CountryPreviousValuesPromise
  extends Promise<CountryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface CountryPreviousValuesSubscription
  extends Promise<AsyncIterator<CountryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface LandmarkSubscriptionPayload {
  mutation: MutationType;
  node: Landmark;
  updatedFields: String[];
  previousValues: LandmarkPreviousValues;
}

export interface LandmarkSubscriptionPayloadPromise
  extends Promise<LandmarkSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LandmarkPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LandmarkPreviousValuesPromise>() => T;
}

export interface LandmarkSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LandmarkSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LandmarkSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LandmarkPreviousValuesSubscription>() => T;
}

export interface LandmarkPreviousValues {
  id: ID_Output;
  name: String;
  city_name: String;
  rating?: Int;
  createdAt?: DateTimeOutput;
  updatedAt?: DateTimeOutput;
}

export interface LandmarkPreviousValuesPromise
  extends Promise<LandmarkPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  city_name: () => Promise<String>;
  rating: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
}

export interface LandmarkPreviousValuesSubscription
  extends Promise<AsyncIterator<LandmarkPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  city_name: () => Promise<AsyncIterator<String>>;
  rating: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Landmark",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://tracecamp-d8c4345743.herokuapp.com/trace-camp_destination-finder/prod`
});
export const prisma = new Prisma();