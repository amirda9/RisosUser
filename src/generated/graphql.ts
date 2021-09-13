import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type BadColorReason = BusinessLogicNode & {
  __typename?: 'BadColorReason';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  toothSet: ToothConnection;
  updatedAt: Scalars['DateTime'];
};


export type BadColorReasonToothSetArgs = {
  after?: Maybe<Scalars['String']>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  before?: Maybe<Scalars['String']>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type BadColorReasonConnection = {
  __typename?: 'BadColorReasonConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BadColorReasonEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `BadColorReason` and its cursor. */
export type BadColorReasonEdge = {
  __typename?: 'BadColorReasonEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<BadColorReason>;
};

/** An enumeration. */
export enum BusinesslogicOrderStatusChoices {
  /** Accept */
  ProcessingAccept = 'PROCESSING_ACCEPT',
  /** Ceramic */
  ProcessingCeramic = 'PROCESSING_CERAMIC',
  /** Designing */
  ProcessingDesigning = 'PROCESSING_DESIGNING',
  /** Ditch */
  ProcessingDitch = 'PROCESSING_DITCH',
  /** Invoice Ready */
  ProcessingInvoiceReady = 'PROCESSING_INVOICE_READY',
  /** Molding */
  ProcessingMolding = 'PROCESSING_MOLDING',
  /** Print/Milling */
  ProcessingPrintMilling = 'PROCESSING_PRINT_MILLING',
  /** Reject */
  ProcessingReject = 'PROCESSING_REJECT',
  /** Reject And Resend */
  ProcessingRejectAndResend = 'PROCESSING_REJECT_AND_RESEND',
  /** Scan */
  ProcessingScan = 'PROCESSING_SCAN',
  /** Water Wax */
  ProcessingWaterWax = 'PROCESSING_WATER_WAX',
  /** ready */
  Ready = 'READY',
  /** Sent */
  Sent = 'SENT'
}

/** An enumeration. */
export enum BusinesslogicTicketMessgaeStatusChoices {
  /** Read */
  Read = 'READ',
  /** Unread */
  Unread = 'UNREAD'
}

export type ChangePassword = {
  __typename?: 'ChangePassword';
  status?: Maybe<Scalars['String']>;
};

export type CreateDevice = {
  __typename?: 'CreateDevice';
  status?: Maybe<Scalars['String']>;
};

export type CreateInvoiceInput = {
  actualDate?: Maybe<Scalars['Date']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['Float']>;
  recieptImage?: Maybe<Scalars['String']>;
  relatedOrder: Scalars['ID'];
};

export type CreateInvoicePayload = {
  __typename?: 'CreateInvoicePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  invoice?: Maybe<InvoiceType>;
};

export type CreateLab = {
  __typename?: 'CreateLab';
  profile?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expectedDate?: Maybe<Scalars['Date']>;
  finalizedLab?: Maybe<Scalars['ID']>;
  relatedService?: Maybe<Scalars['ID']>;
  status: Scalars['String'];
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  order?: Maybe<OrderType>;
  service?: Maybe<OrderType>;
};

export type CreatePatient = {
  __typename?: 'CreatePatient';
  profile?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type CreateServiceInput = {
  category?: Maybe<Scalars['ID']>;
  centralSize?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
  relatedDoctor: Scalars['ID'];
  relatedPatient: Scalars['ID'];
  relatedSmileDesign?: Maybe<Scalars['ID']>;
};

export type CreateServicePayload = {
  __typename?: 'CreateServicePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  service?: Maybe<ServiceType>;
};

export type CreateTicket = {
  __typename?: 'CreateTicket';
  status?: Maybe<Scalars['String']>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  profile?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
};

export type DashboardMessage = ExtendProfileNode & {
  __typename?: 'DashboardMessage';
  _id?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type DashboardMessageConnection = {
  __typename?: 'DashboardMessageConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DashboardMessageEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DashboardMessage` and its cursor. */
export type DashboardMessageEdge = {
  __typename?: 'DashboardMessageEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<DashboardMessage>;
};

export type DeletePatient = {
  __typename?: 'DeletePatient';
  status?: Maybe<Scalars['String']>;
};

export type DeletePatientPic = {
  __typename?: 'DeletePatientPic';
  status?: Maybe<Scalars['String']>;
};

export type Doctor = BusinessLogicNode & {
  __typename?: 'Doctor';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  patientSet: Array<PatientType>;
  rateSize: Scalars['Int'];
  rating: Scalars['Float'];
  relatedProfile: Profile;
  services: Array<ServiceType>;
  smileDesigns: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type DoctorSmileDesignsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DoctorConnection = {
  __typename?: 'DoctorConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DoctorEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Doctor` and its cursor. */
export type DoctorEdge = {
  __typename?: 'DoctorEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Doctor>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

/** An enumeration. */
export enum ExtendprofileProfileGenderChoices {
  /** Female */
  Female = 'FEMALE',
  /** Male */
  Male = 'MALE',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

/** An enumeration. */
export enum ExtendprofileProfileRoleChoices {
  /** Doctor */
  Doctor = 'DOCTOR',
  /** Lab */
  Lab = 'LAB',
  /** Patient */
  Patient = 'PATIENT'
}

/** An enumeration. */
export enum ExtendprofileProfileStatusChoices {
  /** Active */
  Active = 'ACTIVE',
  /** Banned */
  Banned = 'BANNED',
  /** Deactive */
  Deactive = 'DEACTIVE',
  /** Freetrial */
  Freetrial = 'FREETRIAL'
}

export type FaceShape = SmileDesignNode & {
  __typename?: 'FaceShape';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type FaceShapeSmiledesignserviceSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FaceShapeConnection = {
  __typename?: 'FaceShapeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FaceShapeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FaceShape` and its cursor. */
export type FaceShapeEdge = {
  __typename?: 'FaceShapeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<FaceShape>;
};

export type ForgetPass = {
  __typename?: 'ForgetPass';
  status?: Maybe<Scalars['String']>;
};

export type Invoice = BusinessLogicNode & {
  __typename?: 'Invoice';
  _id?: Maybe<Scalars['Int']>;
  actualDate?: Maybe<Scalars['Date']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  /** The ID of the object */
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  recieptImage?: Maybe<Scalars['String']>;
  relatedOrder: OrderType;
  updatedAt: Scalars['DateTime'];
};

export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InvoiceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Invoice` and its cursor. */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Invoice>;
};

export type InvoiceType = {
  __typename?: 'InvoiceType';
  actualDate?: Maybe<Scalars['Date']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  recieptImage?: Maybe<Scalars['String']>;
  relatedOrder: OrderType;
  updatedAt: Scalars['DateTime'];
};

export type Lab = BusinessLogicNode & {
  __typename?: 'Lab';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  labPics?: Maybe<LabPic>;
  orderSet: Array<OrderType>;
  rateSize: Scalars['Int'];
  rating: Scalars['Float'];
  relatedProfile: Profile;
  updatedAt: Scalars['DateTime'];
};

export type LabConnection = {
  __typename?: 'LabConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LabEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Lab` and its cursor. */
export type LabEdge = {
  __typename?: 'LabEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Lab>;
};

export type LabPic = BusinessLogicNode & {
  __typename?: 'LabPic';
  _id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** The ID of the object */
  id: Scalars['ID'];
  lab: Lab;
  number?: Maybe<Scalars['Int']>;
  pic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LabPicConnection = {
  __typename?: 'LabPicConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LabPicEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `LabPic` and its cursor. */
export type LabPicEdge = {
  __typename?: 'LabPicEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<LabPic>;
};

export type LabPicMutation = {
  __typename?: 'LabPicMutation';
  status?: Maybe<Scalars['String']>;
};

export type Log = BusinessLogicNode & {
  __typename?: 'Log';
  _id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** The ID of the object */
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  relatedOrder: OrderType;
  status: Scalars['String'];
};

export type LogConnection = {
  __typename?: 'LogConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LogEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Log` and its cursor. */
export type LogEdge = {
  __typename?: 'LogEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Log>;
};

export type Mutations = {
  __typename?: 'Mutations';
  changePassword?: Maybe<ChangePassword>;
  createDevice?: Maybe<CreateDevice>;
  createInvoice?: Maybe<CreateInvoicePayload>;
  createLab?: Maybe<CreateLab>;
  createOrder?: Maybe<CreateOrderPayload>;
  createPatient?: Maybe<CreatePatient>;
  createService?: Maybe<CreateServicePayload>;
  createTicker?: Maybe<CreateTicket>;
  createUser?: Maybe<CreateUser>;
  deletePatient?: Maybe<DeletePatient>;
  deletePatientPic?: Maybe<DeletePatientPic>;
  forgetPass?: Maybe<ForgetPass>;
  labpicMutation?: Maybe<LabPicMutation>;
  refreshToken?: Maybe<Refresh>;
  requestOtp?: Maybe<RequestOtp>;
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  toothMutation?: Maybe<ToothMutation>;
  toothMutationJson?: Maybe<ToothMutationJson>;
  updateLabRate?: Maybe<UpdateLabRate>;
  updateOrder?: Maybe<UpdateOrder>;
  updatePatientPic?: Maybe<UpdatePatientPic>;
  updateProfile?: Maybe<UpdateProfile>;
  updateSmileDesign?: Maybe<UpdateSmileDesign>;
  verifyToken?: Maybe<Verify>;
  verifyUser?: Maybe<VerifyUser>;
};


export type MutationsChangePasswordArgs = {
  newPassword: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsCreateDeviceArgs = {
  ProfileId: Scalars['ID'];
  deviceId: Scalars['String'];
};


export type MutationsCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationsCreateLabArgs = {
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  telephoneNumber?: Maybe<Scalars['String']>;
};


export type MutationsCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationsCreatePatientArgs = {
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  patientPics?: Maybe<PatientPics>;
  phoneNumber: Scalars['String'];
  profileDoctorId?: Maybe<Scalars['Int']>;
};


export type MutationsCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationsCreateTickerArgs = {
  message: Scalars['String'];
  receiverProfile: Scalars['Int'];
  relatedOrder: Scalars['Int'];
  senderProfile: Scalars['Int'];
};


export type MutationsCreateUserArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsDeletePatientArgs = {
  patientId: Scalars['Int'];
};


export type MutationsDeletePatientPicArgs = {
  patientId: Scalars['Int'];
  selectedFields?: Maybe<PatientPicsDeletion>;
};


export type MutationsForgetPassArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationsLabpicMutationArgs = {
  labId: Scalars['ID'];
  pic: Scalars['Upload'];
  picNumber: Scalars['Int'];
};


export type MutationsRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationsRequestOtpArgs = {
  username: Scalars['String'];
};


export type MutationsTokenAuthArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsToothMutationArgs = {
  relatedService: Scalars['ID'];
  teeth?: Maybe<Array<Maybe<TeethInput>>>;
};


export type MutationsToothMutationJsonArgs = {
  centralSize?: Maybe<Scalars['String']>;
  jsonObject?: Maybe<Scalars['JSONString']>;
  relatedService: Scalars['ID'];
};


export type MutationsUpdateLabRateArgs = {
  labId: Scalars['Int'];
  rate: Scalars['Float'];
};


export type MutationsUpdateOrderArgs = {
  description?: Maybe<Scalars['String']>;
  expectedDate?: Maybe<Scalars['DateTime']>;
  finalizedLab?: Maybe<Scalars['ID']>;
  orderId: Scalars['ID'];
  relatedService?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};


export type MutationsUpdatePatientPicArgs = {
  doctorId?: Maybe<Scalars['Int']>;
  patientId: Scalars['Int'];
  patientPics: PatientPics;
};


export type MutationsUpdateProfileArgs = {
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['Upload']>;
  status?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
};


export type MutationsUpdateSmileDesignArgs = {
  doctorId: Scalars['Int'];
  patientId: Scalars['Int'];
  smileCategory?: Maybe<Scalars['String']>;
  smileColor?: Maybe<Scalars['String']>;
  smileDesignImages?: Maybe<SmileDesignImages>;
  smileDesignState?: Maybe<Scalars['String']>;
};


export type MutationsVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationsVerifyUserArgs = {
  otpMessage: Scalars['String'];
  username: Scalars['String'];
};

export type NotifReceiver = NotificationNode & {
  __typename?: 'NotifReceiver';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  deviceId: Scalars['String'];
  /** The ID of the object */
  id: Scalars['ID'];
  notifications: NotificationConnection;
  profile?: Maybe<Profile>;
};


export type NotifReceiverNotificationsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  receivers_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NotifReceiverConnection = {
  __typename?: 'NotifReceiverConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotifReceiverEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NotifReceiver` and its cursor. */
export type NotifReceiverEdge = {
  __typename?: 'NotifReceiverEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<NotifReceiver>;
};

export type NotifService = NotificationNode & {
  __typename?: 'NotifService';
  _id?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  id: Scalars['ID'];
  notificationSet: NotificationConnection;
  objectId: Scalars['Int'];
  objectType: NotificationNotifServiceObjectTypeChoices;
};


export type NotifServiceNotificationSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  receivers_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NotifServiceConnection = {
  __typename?: 'NotifServiceConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotifServiceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NotifService` and its cursor. */
export type NotifServiceEdge = {
  __typename?: 'NotifServiceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<NotifService>;
};

export type Notification = NotificationNode & {
  __typename?: 'Notification';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  message: Scalars['String'];
  notifId?: Maybe<Scalars['String']>;
  notifService?: Maybe<NotifService>;
  receivers: NotifReceiverConnection;
  reportUrl?: Maybe<Scalars['String']>;
  status?: Maybe<NotificationNotificationStatusChoices>;
};


export type NotificationReceiversArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deviceId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  notifications_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  profile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotificationEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `Notification` and its cursor. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Notification>;
};

/** An enumeration. */
export enum NotificationNotifServiceObjectTypeChoices {
  /** INVOICE */
  Invoice = 'INVOICE',
  /** ORDER */
  Order = 'ORDER'
}

/** An enumeration. */
export enum NotificationNotificationStatusChoices {
  /** FAILED */
  Failed = 'FAILED',
  /** SUCCESS */
  Success = 'SUCCESS'
}

export type Otp = ExtendProfileNode & {
  __typename?: 'OTP';
  _id?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  id: Scalars['ID'];
  isValid: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
};

export type OtpConnection = {
  __typename?: 'OTPConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OtpEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OTP` and its cursor. */
export type OtpEdge = {
  __typename?: 'OTPEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Otp>;
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  profile?: Maybe<Scalars['String']>;
  refreshExpiresIn: Scalars['Int'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

export type Order = BusinessLogicNode & {
  __typename?: 'Order';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  expectedDate?: Maybe<Scalars['Date']>;
  finalizedLab?: Maybe<Lab>;
  /** The ID of the object */
  id: Scalars['ID'];
  invoice?: Maybe<InvoiceType>;
  logs: LogConnection;
  relatedService?: Maybe<ServiceType>;
  status: BusinesslogicOrderStatusChoices;
  ticketSet: TicketConnection;
  updatedAt: Scalars['Date'];
};


export type OrderLogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderTicketSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Order` and its cursor. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Order>;
};

export type OrderType = {
  __typename?: 'OrderType';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  expectedDate?: Maybe<Scalars['Date']>;
  finalizedLab?: Maybe<Lab>;
  id: Scalars['ID'];
  invoice?: Maybe<InvoiceType>;
  logs: LogConnection;
  relatedService?: Maybe<ServiceType>;
  status: BusinesslogicOrderStatusChoices;
  ticketSet: TicketConnection;
  updatedAt: Scalars['Date'];
};


export type OrderTypeLogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderTypeTicketSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Patient = BusinessLogicNode & {
  __typename?: 'Patient';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  doctor: DoctorConnection;
  /** The ID of the object */
  id: Scalars['ID'];
  patientPic?: Maybe<PatientPic>;
  patientPics?: Maybe<PatientPic>;
  relatedProfile: Profile;
  serviceSet: Array<ServiceType>;
  smileDesigns: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type PatientDoctorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['Float']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type PatientSmileDesignsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PatientConnection = {
  __typename?: 'PatientConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatientEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Patient` and its cursor. */
export type PatientEdge = {
  __typename?: 'PatientEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Patient>;
};

export type PatientPic = BusinessLogicNode & {
  __typename?: 'PatientPic';
  _id?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fullSmileImage?: Maybe<Scalars['String']>;
  /** The ID of the object */
  id: Scalars['ID'];
  optionalImage?: Maybe<Scalars['String']>;
  patient?: Maybe<PatientType>;
  patients?: Maybe<PatientType>;
  sideImage?: Maybe<Scalars['String']>;
  smileImage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PatientPicConnection = {
  __typename?: 'PatientPicConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatientPicEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PatientPic` and its cursor. */
export type PatientPicEdge = {
  __typename?: 'PatientPicEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<PatientPic>;
};

export type PatientType = {
  __typename?: 'PatientType';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  doctor: DoctorConnection;
  id: Scalars['ID'];
  patientPic?: Maybe<PatientPic>;
  patientPics?: Maybe<PatientPic>;
  relatedProfile: Profile;
  serviceSet: Array<ServiceType>;
  smileDesigns: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type PatientTypeDoctorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['Float']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type PatientTypeSmileDesignsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Profile = ExtendProfileNode & {
  __typename?: 'Profile';
  OTP: OtpConnection;
  _id?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  doctor?: Maybe<Doctor>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<ExtendprofileProfileGenderChoices>;
  /** The ID of the object */
  id: Scalars['ID'];
  lab?: Maybe<Lab>;
  lastName?: Maybe<Scalars['String']>;
  notifreceiver?: Maybe<NotifReceiver>;
  patient?: Maybe<PatientType>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  receiver: TicketConnection;
  role: ExtendprofileProfileRoleChoices;
  sender: TicketConnection;
  status: ExtendprofileProfileStatusChoices;
  telephoneNumber?: Maybe<Scalars['String']>;
};


export type ProfileOtpArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isValid?: Maybe<Scalars['Boolean']>;
  isValid_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['ID']>;
  profile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileReceiverArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileSenderArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `Profile` and its cursor. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Profile>;
};

export type Query = {
  __typename?: 'Query';
  BadColorReason?: Maybe<BadColorReason>;
  DashboardMessage?: Maybe<DashboardMessage>;
  Doctor?: Maybe<Doctor>;
  FaceShape?: Maybe<FaceShape>;
  Invoice?: Maybe<Invoice>;
  Lab?: Maybe<Lab>;
  LabPic?: Maybe<LabPic>;
  Log?: Maybe<Log>;
  NotifReceiver?: Maybe<NotifReceiver>;
  NotifService?: Maybe<NotifService>;
  Notification?: Maybe<Notification>;
  OTP?: Maybe<Otp>;
  Order?: Maybe<Order>;
  Patient?: Maybe<Patient>;
  PatientPic?: Maybe<PatientPic>;
  Profile?: Maybe<Profile>;
  Service?: Maybe<Service>;
  ServiceCategory?: Maybe<ServiceCategory>;
  SmileCategory?: Maybe<SmileCategory>;
  SmileColor?: Maybe<SmileColor>;
  SmileDesignService?: Maybe<SmileDesignService>;
  Ticket?: Maybe<Ticket>;
  Tooth?: Maybe<Tooth>;
  ToothSevice?: Maybe<ToothSevice>;
  allBadcolorreason?: Maybe<BadColorReasonConnection>;
  allDashboardmessage?: Maybe<DashboardMessageConnection>;
  allDoctor?: Maybe<DoctorConnection>;
  allFaceshape?: Maybe<FaceShapeConnection>;
  allInvoice?: Maybe<InvoiceConnection>;
  allLab?: Maybe<LabConnection>;
  allLabpic?: Maybe<LabPicConnection>;
  allLog?: Maybe<LogConnection>;
  allNotification?: Maybe<NotificationConnection>;
  allNotifreceiver?: Maybe<NotifReceiverConnection>;
  allNotifservice?: Maybe<NotifServiceConnection>;
  allOrder?: Maybe<OrderConnection>;
  allOtp?: Maybe<OtpConnection>;
  allPatient?: Maybe<PatientConnection>;
  allPatientpic?: Maybe<PatientPicConnection>;
  allProfile?: Maybe<ProfileConnection>;
  allService?: Maybe<ServiceConnection>;
  allServicecategory?: Maybe<ServiceCategoryConnection>;
  allSmilecategory?: Maybe<SmileCategoryConnection>;
  allSmilecolor?: Maybe<SmileColorConnection>;
  allSmiledesignservice?: Maybe<SmileDesignServiceConnection>;
  allTicket?: Maybe<TicketConnection>;
  allTooth?: Maybe<ToothConnection>;
  allToothsevice?: Maybe<ToothSeviceConnection>;
  getReport?: Maybe<Array<Maybe<ReportNode>>>;
};


export type QueryBadColorReasonArgs = {
  id: Scalars['ID'];
};


export type QueryDashboardMessageArgs = {
  id: Scalars['ID'];
};


export type QueryDoctorArgs = {
  id: Scalars['ID'];
};


export type QueryFaceShapeArgs = {
  id: Scalars['ID'];
};


export type QueryInvoiceArgs = {
  id: Scalars['ID'];
};


export type QueryLabArgs = {
  id: Scalars['ID'];
};


export type QueryLabPicArgs = {
  id: Scalars['ID'];
};


export type QueryLogArgs = {
  id: Scalars['ID'];
};


export type QueryNotifReceiverArgs = {
  id: Scalars['ID'];
};


export type QueryNotifServiceArgs = {
  id: Scalars['ID'];
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryOtpArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryPatientArgs = {
  id: Scalars['ID'];
};


export type QueryPatientPicArgs = {
  id: Scalars['ID'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryServiceCategoryArgs = {
  id: Scalars['ID'];
};


export type QuerySmileCategoryArgs = {
  id: Scalars['ID'];
};


export type QuerySmileColorArgs = {
  id: Scalars['ID'];
};


export type QuerySmileDesignServiceArgs = {
  id: Scalars['ID'];
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryToothArgs = {
  id: Scalars['ID'];
};


export type QueryToothSeviceArgs = {
  id: Scalars['ID'];
};


export type QueryAllBadcolorreasonArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  tooth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tooth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllDashboardmessageArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAllDoctorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize?: Maybe<Scalars['Int']>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating?: Maybe<Scalars['Float']>;
  rating_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile?: Maybe<Scalars['ID']>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sortByRate?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllFaceshapeArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllInvoiceArgs = {
  actualDate?: Maybe<Scalars['Date']>;
  actualDate_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  price_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder?: Maybe<Scalars['ID']>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllLabArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  labPics?: Maybe<Scalars['ID']>;
  labPics_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize?: Maybe<Scalars['Int']>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating?: Maybe<Scalars['Float']>;
  rating_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile?: Maybe<Scalars['ID']>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
  sortByRate?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllLabpicArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  lab?: Maybe<Scalars['ID']>;
  lab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  number_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllLogArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  relatedOrder?: Maybe<Scalars['ID']>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllNotificationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId?: Maybe<Scalars['String']>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService?: Maybe<Scalars['ID']>;
  notifService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receivers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receivers_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportUrl?: Maybe<Scalars['String']>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllNotifreceiverArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  deviceId?: Maybe<Scalars['String']>;
  deviceId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  notifications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notifications_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['ID']>;
  profile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllNotifserviceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  notification?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notification_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectId?: Maybe<Scalars['Int']>;
  objectId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectType?: Maybe<Scalars['String']>;
  objectType_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAllOrderArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctorId?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedDate?: Maybe<Scalars['Date']>;
  expectedDate_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  finalizedLab?: Maybe<Scalars['ID']>;
  finalizedLab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  invoice?: Maybe<Scalars['ID']>;
  invoice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  logs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  logs_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  relatedService?: Maybe<Scalars['ID']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusStartwith?: Maybe<Scalars['String']>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  ticket?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ticket_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllOtpArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isValid?: Maybe<Scalars['Boolean']>;
  isValid_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['ID']>;
  profile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllPatientArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patientPic?: Maybe<Scalars['ID']>;
  patientPic_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patientPics?: Maybe<Scalars['ID']>;
  patientPics_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileId?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile?: Maybe<Scalars['ID']>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllPatientpicArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient?: Maybe<Scalars['ID']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patients?: Maybe<Scalars['ID']>;
  patients_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllProfileArgs = {
  OTP?: Maybe<Array<Maybe<Scalars['ID']>>>;
  OTP_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  after?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  age_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctor?: Maybe<Scalars['ID']>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  gender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  lab?: Maybe<Scalars['ID']>;
  lab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifreceiver?: Maybe<Scalars['ID']>;
  notifreceiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  patient?: Maybe<Scalars['ID']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receiver?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  role?: Maybe<Scalars['String']>;
  role_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  telephoneNumber?: Maybe<Scalars['String']>;
  telephoneNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<Scalars['ID']>;
  user_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllServiceArgs = {
  Teeth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Teeth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['ID']>;
  category_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  centralSize?: Maybe<Scalars['Int']>;
  centralSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orders_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedDoctor?: Maybe<Scalars['ID']>;
  relatedDoctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedPatient?: Maybe<Scalars['ID']>;
  relatedPatient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileDesign?: Maybe<Scalars['ID']>;
  relatedSmileDesign_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllServicecategoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth?: Maybe<Scalars['Int']>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild?: Maybe<Scalars['Int']>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllSmilecategoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth?: Maybe<Scalars['Int']>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild?: Maybe<Scalars['Int']>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllSmilecolorArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth?: Maybe<Scalars['Int']>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild?: Maybe<Scalars['Int']>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllSmiledesignserviceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctor?: Maybe<Scalars['ID']>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient?: Maybe<Scalars['ID']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileCategory?: Maybe<Scalars['ID']>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileColor?: Maybe<Scalars['ID']>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape?: Maybe<Scalars['ID']>;
  shape_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Scalars['Int']>;
  width_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllTicketArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus?: Maybe<Scalars['String']>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  receiver?: Maybe<Scalars['ID']>;
  receiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder?: Maybe<Scalars['ID']>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender?: Maybe<Scalars['ID']>;
  sender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllToothArgs = {
  after?: Maybe<Scalars['String']>;
  badColorReason?: Maybe<Scalars['ID']>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  before?: Maybe<Scalars['String']>;
  cl?: Maybe<Scalars['Int']>;
  cl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor?: Maybe<Scalars['Boolean']>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  relatedService?: Maybe<Scalars['ID']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  toothNumber?: Maybe<Scalars['Int']>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  toothService?: Maybe<Scalars['ID']>;
  toothService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAllToothseviceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  tooth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tooth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryGetReportArgs = {
  labId?: Maybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  refreshToken: Scalars['String'];
  token: Scalars['String'];
};

export type ReportNode = {
  __typename?: 'ReportNode';
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type RequestOtp = {
  __typename?: 'RequestOTP';
  status?: Maybe<Scalars['String']>;
};

export type Service = BusinessLogicNode & {
  __typename?: 'Service';
  Teeth: ToothConnection;
  _id?: Maybe<Scalars['Int']>;
  category?: Maybe<ServiceCategory>;
  centralSize?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  orders: Array<OrderType>;
  relatedDoctor: Doctor;
  relatedPatient: PatientType;
  relatedSmileDesign?: Maybe<SmileDesignService>;
  updatedAt: Scalars['DateTime'];
};


export type ServiceTeethArgs = {
  after?: Maybe<Scalars['String']>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  before?: Maybe<Scalars['String']>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type ServiceCategory = BusinessLogicNode & {
  __typename?: 'ServiceCategory';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  depth: Scalars['Int'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  numchild: Scalars['Int'];
  path: Scalars['String'];
  serviceSet: Array<ServiceType>;
  updatedAt: Scalars['DateTime'];
};

export type ServiceCategoryConnection = {
  __typename?: 'ServiceCategoryConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceCategoryEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ServiceCategory` and its cursor. */
export type ServiceCategoryEdge = {
  __typename?: 'ServiceCategoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ServiceCategory>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Service` and its cursor. */
export type ServiceEdge = {
  __typename?: 'ServiceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Service>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  Teeth: ToothConnection;
  category?: Maybe<ServiceCategory>;
  centralSize?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orders: Array<OrderType>;
  relatedDoctor: Doctor;
  relatedPatient: PatientType;
  relatedSmileDesign?: Maybe<SmileDesignService>;
  updatedAt: Scalars['DateTime'];
};


export type ServiceTypeTeethArgs = {
  after?: Maybe<Scalars['String']>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  before?: Maybe<Scalars['String']>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type SmileCategory = SmileDesignNode & {
  __typename?: 'SmileCategory';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  depth: Scalars['Int'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  numchild: Scalars['Int'];
  path: Scalars['String'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type SmileCategorySmiledesignserviceSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SmileCategoryConnection = {
  __typename?: 'SmileCategoryConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileCategoryEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SmileCategory` and its cursor. */
export type SmileCategoryEdge = {
  __typename?: 'SmileCategoryEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SmileCategory>;
};

export type SmileColor = SmileDesignNode & {
  __typename?: 'SmileColor';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  depth: Scalars['Int'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  numchild: Scalars['Int'];
  path: Scalars['String'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  updatedAt: Scalars['DateTime'];
};


export type SmileColorSmiledesignserviceSetArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  first?: Maybe<Scalars['Int']>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SmileColorConnection = {
  __typename?: 'SmileColorConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileColorEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SmileColor` and its cursor. */
export type SmileColorEdge = {
  __typename?: 'SmileColorEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SmileColor>;
};

export type SmileDesignImages = {
  smileImageResult?: Maybe<Scalars['Upload']>;
  teethLessImage?: Maybe<Scalars['Upload']>;
};

export type SmileDesignService = SmileDesignNode & {
  __typename?: 'SmileDesignService';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  doctor?: Maybe<Doctor>;
  heigth?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  id: Scalars['ID'];
  patient?: Maybe<PatientType>;
  relatedSmileCategory?: Maybe<SmileCategory>;
  relatedSmileColor?: Maybe<SmileColor>;
  serviceSet: Array<ServiceType>;
  shape?: Maybe<FaceShape>;
  smileImageResult?: Maybe<Scalars['String']>;
  status: SmiledesignSmileDesignServiceStatusChoices;
  teethLessImage?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  width?: Maybe<Scalars['Int']>;
};

export type SmileDesignServiceConnection = {
  __typename?: 'SmileDesignServiceConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileDesignServiceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SmileDesignService` and its cursor. */
export type SmileDesignServiceEdge = {
  __typename?: 'SmileDesignServiceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<SmileDesignService>;
};

/** An enumeration. */
export enum SmiledesignSmileDesignServiceStatusChoices {
  /** IMPROPER IMAGE */
  ImproperImage = 'IMPROPER_IMAGE',
  /** NOTREADY */
  Notready = 'NOTREADY',
  /** READY */
  Ready = 'READY'
}

export type TeethInput = {
  cl?: Maybe<Scalars['Int']>;
  toothNumber: Scalars['Int'];
  toothService?: Maybe<Scalars['String']>;
};

export type Ticket = BusinessLogicNode & {
  __typename?: 'Ticket';
  _id?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  id: Scalars['ID'];
  message: Scalars['String'];
  messgaeStatus: BusinesslogicTicketMessgaeStatusChoices;
  receiver: Profile;
  relatedOrder: OrderType;
  sender: Profile;
};

export type TicketConnection = {
  __typename?: 'TicketConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TicketEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Ticket` and its cursor. */
export type TicketEdge = {
  __typename?: 'TicketEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Ticket>;
};

export type Tooth = BusinessLogicNode & {
  __typename?: 'Tooth';
  _id?: Maybe<Scalars['Int']>;
  badColorReason?: Maybe<BadColorReason>;
  cl?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  isBadColor: Scalars['Boolean'];
  relatedService: ServiceType;
  toothNumber: Scalars['Int'];
  toothService?: Maybe<ToothSevice>;
  updatedAt: Scalars['DateTime'];
};

export type ToothConnection = {
  __typename?: 'ToothConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ToothEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Tooth` and its cursor. */
export type ToothEdge = {
  __typename?: 'ToothEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Tooth>;
};

export type ToothMutation = {
  __typename?: 'ToothMutation';
  status?: Maybe<Scalars['String']>;
};

export type ToothMutationJson = {
  __typename?: 'ToothMutationJson';
  status?: Maybe<Scalars['String']>;
};

export type ToothSevice = BusinessLogicNode & {
  __typename?: 'ToothSevice';
  _id?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  toothSet: ToothConnection;
  updatedAt: Scalars['DateTime'];
};


export type ToothSeviceToothSetArgs = {
  after?: Maybe<Scalars['String']>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  before?: Maybe<Scalars['String']>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  first?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type ToothSeviceConnection = {
  __typename?: 'ToothSeviceConnection';
  edgeCount?: Maybe<Scalars['Int']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ToothSeviceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ToothSevice` and its cursor. */
export type ToothSeviceEdge = {
  __typename?: 'ToothSeviceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ToothSevice>;
};

export type UpdateLabRate = {
  __typename?: 'UpdateLabRate';
  rate?: Maybe<Scalars['Float']>;
};

export type UpdateOrder = {
  __typename?: 'UpdateOrder';
  status?: Maybe<Scalars['String']>;
};

export type UpdatePatientPic = {
  __typename?: 'UpdatePatientPic';
  status?: Maybe<Scalars['String']>;
};

export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  status?: Maybe<Scalars['String']>;
};

export type UpdateSmileDesign = {
  __typename?: 'UpdateSmileDesign';
  status?: Maybe<Scalars['String']>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type VerifyUser = {
  __typename?: 'VerifyUser';
  status?: Maybe<Scalars['String']>;
};

export type BusinessLogicNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type ExtendProfileNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type NotificationNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type PatientPics = {
  fullSmileImage?: Maybe<Scalars['Upload']>;
  optionalImage?: Maybe<Scalars['Upload']>;
  sideImage?: Maybe<Scalars['Upload']>;
  smileImage?: Maybe<Scalars['Upload']>;
};

export type PatientPicsDeletion = {
  fullSmileImage?: Maybe<Scalars['Boolean']>;
  optionalImage?: Maybe<Scalars['Boolean']>;
  sideImage?: Maybe<Scalars['Boolean']>;
  smileImage?: Maybe<Scalars['Boolean']>;
};

export type SmileDesignNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', allDoctor?: Maybe<{ __typename?: 'DoctorConnection', edges: Array<Maybe<{ __typename?: 'DoctorEdge', node?: Maybe<{ __typename?: 'Doctor', id: string, rating: number, relatedProfile: { __typename?: 'Profile', email?: Maybe<string>, profilePic?: Maybe<string>, role: ExtendprofileProfileRoleChoices, firstName?: Maybe<string>, phoneNumber?: Maybe<string> } }> }>> }> };

export type ForgetPassMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type ForgetPassMutation = { __typename?: 'Mutations', forgetPass?: Maybe<{ __typename?: 'ForgetPass', status?: Maybe<string> }> };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutations', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token: string, profile?: Maybe<string> }> };

export type PatientQueryVariables = Exact<{
  profile?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type PatientQuery = { __typename?: 'Query', allPatient?: Maybe<{ __typename?: 'PatientConnection', edges: Array<Maybe<{ __typename?: 'PatientEdge', node?: Maybe<{ __typename?: 'Patient', id: string }> }>> }> };

export type CreatepatientMutationVariables = Exact<{
  name: Scalars['String'];
  phoneNo: Scalars['String'];
  age: Scalars['Int'];
  pass: Scalars['String'];
  email?: Maybe<Scalars['String']>;
}>;


export type CreatepatientMutation = { __typename?: 'Mutations', createPatient?: Maybe<{ __typename?: 'CreatePatient', token?: Maybe<string>, user?: Maybe<string>, profile?: Maybe<string> }> };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutations', createUser?: Maybe<{ __typename?: 'CreateUser', token?: Maybe<string> }> };

export type Req_OtpMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type Req_OtpMutation = { __typename?: 'Mutations', requestOtp?: Maybe<{ __typename?: 'RequestOTP', status?: Maybe<string> }> };

export type ChangePassMutationVariables = Exact<{
  new: Scalars['String'];
  user: Scalars['String'];
}>;


export type ChangePassMutation = { __typename?: 'Mutations', changePassword?: Maybe<{ __typename?: 'ChangePassword', status?: Maybe<string> }> };

export type MypatQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MypatQuery = { __typename?: 'Query', Patient?: Maybe<{ __typename?: 'Patient', _id?: Maybe<number>, patientPic?: Maybe<{ __typename?: 'PatientPic', sideImage?: Maybe<string>, fullSmileImage?: Maybe<string>, optionalImage?: Maybe<string>, smileImage?: Maybe<string> }> }> };

export type AllsmileQueryVariables = Exact<{
  pId?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type AllsmileQuery = { __typename?: 'Query', allSmiledesignservice?: Maybe<{ __typename?: 'SmileDesignServiceConnection', edges: Array<Maybe<{ __typename?: 'SmileDesignServiceEdge', node?: Maybe<{ __typename?: 'SmileDesignService', status: SmiledesignSmileDesignServiceStatusChoices, teethLessImage?: Maybe<string>, width?: Maybe<number>, heigth?: Maybe<number> }> }>> }> };

export type ProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', Profile?: Maybe<{ __typename?: 'Profile', id: string, phoneNumber?: Maybe<string>, email?: Maybe<string>, firstName?: Maybe<string>, lastName?: Maybe<string>, age?: Maybe<number> }> };

export type Update_PicMutationVariables = Exact<{
  id: Scalars['Int'];
  pics: PatientPics;
}>;


export type Update_PicMutation = { __typename?: 'Mutations', updatePatientPic?: Maybe<{ __typename?: 'UpdatePatientPic', status?: Maybe<string> }> };

export type OtpMutationVariables = Exact<{
  user: Scalars['String'];
}>;


export type OtpMutation = { __typename?: 'Mutations', requestOtp?: Maybe<{ __typename?: 'RequestOTP', status?: Maybe<string> }> };

export type Verify_UserMutationVariables = Exact<{
  username: Scalars['String'];
  otp: Scalars['String'];
}>;


export type Verify_UserMutation = { __typename?: 'Mutations', verifyUser?: Maybe<{ __typename?: 'VerifyUser', status?: Maybe<string> }> };

export const UsersDocument = gql`
    query users {
  allDoctor {
    edges {
      node {
        id
        rating
        relatedProfile {
          email
          profilePic
          role
          firstName
          phoneNumber
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ForgetPassDocument = gql`
    mutation forgetPass($phoneNumber: String!) {
  forgetPass(phoneNumber: $phoneNumber) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ForgetPassGQL extends Apollo.Mutation<ForgetPassMutation, ForgetPassMutationVariables> {
    document = ForgetPassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PatientDocument = gql`
    query patient($profile: [String]) {
  allPatient(relatedProfile_In: $profile) {
    edges {
      node {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatientGQL extends Apollo.Query<PatientQuery, PatientQueryVariables> {
    document = PatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatepatientDocument = gql`
    mutation createpatient($name: String!, $phoneNo: String!, $age: Int!, $pass: String!, $email: String) {
  createPatient(
    name: $name
    age: $age
    phoneNumber: $phoneNo
    password: $pass
    email: $email
  ) {
    token
    user
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatepatientGQL extends Apollo.Mutation<CreatepatientMutation, CreatepatientMutationVariables> {
    document = CreatepatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!, $email: String!) {
  createUser(username: $username, password: $password, email: $email) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Req_OtpDocument = gql`
    mutation req_otp($username: String!) {
  requestOtp(username: $username) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Req_OtpGQL extends Apollo.Mutation<Req_OtpMutation, Req_OtpMutationVariables> {
    document = Req_OtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangePassDocument = gql`
    mutation changePass($new: String!, $user: String!) {
  changePassword(newPassword: $new, username: $user) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePassGQL extends Apollo.Mutation<ChangePassMutation, ChangePassMutationVariables> {
    document = ChangePassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MypatDocument = gql`
    query mypat($id: ID!) {
  Patient(id: $id) {
    _id
    patientPic {
      sideImage
      fullSmileImage
      optionalImage
      smileImage
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MypatGQL extends Apollo.Query<MypatQuery, MypatQueryVariables> {
    document = MypatDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllsmileDocument = gql`
    query allsmile($pId: [String]) {
  allSmiledesignservice(patient_In: $pId) {
    edges {
      node {
        status
        teethLessImage
        width
        heigth
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllsmileGQL extends Apollo.Query<AllsmileQuery, AllsmileQueryVariables> {
    document = AllsmileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfileDocument = gql`
    query profile($id: ID!) {
  Profile(id: $id) {
    id
    phoneNumber
    email
    firstName
    lastName
    age
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Update_PicDocument = gql`
    mutation update_pic($id: Int!, $pics: patientPics!) {
  updatePatientPic(patientId: $id, patientPics: $pics) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Update_PicGQL extends Apollo.Mutation<Update_PicMutation, Update_PicMutationVariables> {
    document = Update_PicDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OtpDocument = gql`
    mutation OTP($user: String!) {
  requestOtp(username: $user) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OtpGQL extends Apollo.Mutation<OtpMutation, OtpMutationVariables> {
    document = OtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Verify_UserDocument = gql`
    mutation verify_user($username: String!, $otp: String!) {
  verifyUser(username: $username, otpMessage: $otp) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Verify_UserGQL extends Apollo.Mutation<Verify_UserMutation, Verify_UserMutationVariables> {
    document = Verify_UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }