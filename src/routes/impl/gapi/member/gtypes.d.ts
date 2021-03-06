/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface Query {
  _?: boolean;
  getProfile?: Profile;
  listTasks?: Array<Task | null>;
}

export interface Profile {
  email: string;
  roles?: Array<string | null>;
  displayName: string;
  isEmailVeried?: boolean;
  image: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthDay?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ListTasksInput {
  skip?: number;
  limit?: number;
  orderBy?: ListTasksOrderByInput;
}

export type ListTasksOrderByInput = 'createdAt_ASC' | 'createdAt_DESC';

export interface Task {
  _id: string;
  caption: string;
  isChecked: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Mutation {
  _?: boolean;
  addTask?: Task;
  updateTask?: Task;
  removeTask?: number;
}

export interface Subscription {
  _?: boolean;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  roles?: Array<string | null>;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface Resolver {
  Query?: QueryTypeResolver;
  Profile?: ProfileTypeResolver;
  Task?: TaskTypeResolver;
  Mutation?: MutationTypeResolver;
  Subscription?: SubscriptionTypeResolver;
  User?: UserTypeResolver;
}
export interface QueryTypeResolver<TParent = any> {
  _?: QueryTo_Resolver<TParent>;
  getProfile?: QueryToGetProfileResolver<TParent>;
  listTasks?: QueryToListTasksResolver<TParent>;
}

export interface QueryTo_Resolver<TParent = any, TResult = boolean | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToGetProfileResolver<TParent = any, TResult = Profile | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface QueryToListTasksArgs {
  input?: ListTasksInput;
}
export interface QueryToListTasksResolver<TParent = any, TResult = Array<Task | null> | null> {
  (parent: TParent, args: QueryToListTasksArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileTypeResolver<TParent = any> {
  email?: ProfileToEmailResolver<TParent>;
  roles?: ProfileToRolesResolver<TParent>;
  displayName?: ProfileToDisplayNameResolver<TParent>;
  isEmailVeried?: ProfileToIsEmailVeriedResolver<TParent>;
  image?: ProfileToImageResolver<TParent>;
  firstName?: ProfileToFirstNameResolver<TParent>;
  middleName?: ProfileToMiddleNameResolver<TParent>;
  lastName?: ProfileToLastNameResolver<TParent>;
  birthDay?: ProfileToBirthDayResolver<TParent>;
  createdAt?: ProfileToCreatedAtResolver<TParent>;
  updatedAt?: ProfileToUpdatedAtResolver<TParent>;
}

export interface ProfileToEmailResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToRolesResolver<TParent = any, TResult = Array<string | null> | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToDisplayNameResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToIsEmailVeriedResolver<TParent = any, TResult = boolean | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToImageResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToFirstNameResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToMiddleNameResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToLastNameResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToBirthDayResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToCreatedAtResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface ProfileToUpdatedAtResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface TaskTypeResolver<TParent = any> {
  _id?: TaskTo_idResolver<TParent>;
  caption?: TaskToCaptionResolver<TParent>;
  isChecked?: TaskToIsCheckedResolver<TParent>;
  createdAt?: TaskToCreatedAtResolver<TParent>;
  updatedAt?: TaskToUpdatedAtResolver<TParent>;
}

export interface TaskTo_idResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface TaskToCaptionResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface TaskToIsCheckedResolver<TParent = any, TResult = boolean> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface TaskToCreatedAtResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface TaskToUpdatedAtResolver<TParent = any, TResult = string | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationTypeResolver<TParent = any> {
  _?: MutationTo_Resolver<TParent>;
  addTask?: MutationToAddTaskResolver<TParent>;
  updateTask?: MutationToUpdateTaskResolver<TParent>;
  removeTask?: MutationToRemoveTaskResolver<TParent>;
}

export interface MutationTo_Resolver<TParent = any, TResult = boolean | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToAddTaskArgs {
  caption: string;
  isChecked: boolean;
}
export interface MutationToAddTaskResolver<TParent = any, TResult = Task | null> {
  (parent: TParent, args: MutationToAddTaskArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToUpdateTaskArgs {
  id: string;
  caption: string;
  isChecked: boolean;
}
export interface MutationToUpdateTaskResolver<TParent = any, TResult = Task | null> {
  (parent: TParent, args: MutationToUpdateTaskArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface MutationToRemoveTaskArgs {
  id: string;
}
export interface MutationToRemoveTaskResolver<TParent = any, TResult = number | null> {
  (parent: TParent, args: MutationToRemoveTaskArgs, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface SubscriptionTypeResolver<TParent = any> {
  _?: SubscriptionTo_Resolver<TParent>;
}

export interface SubscriptionTo_Resolver<TParent = any, TResult = boolean | null> {
  resolve?: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
  subscribe: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
}

export interface UserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  displayName?: UserToDisplayNameResolver<TParent>;
  roles?: UserToRolesResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface UserToEmailResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface UserToDisplayNameResolver<TParent = any, TResult = string> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}

export interface UserToRolesResolver<TParent = any, TResult = Array<string | null> | null> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult | Promise<TResult>;
}
