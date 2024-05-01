/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IKinodeAppStore {
  export type PackageInfoStruct = {
    packageName: string;
    publisherKnsNodeId: BytesLike;
    metadataUrl: string;
    metadataHash: BytesLike;
  };

  export type PackageInfoStructOutput = [string, string, string, string] & {
    packageName: string;
    publisherKnsNodeId: string;
    metadataUrl: string;
    metadataHash: string;
  };
}

export interface PackageStoreInterface extends utils.Interface {
  functions: {
    "UPGRADE_INTERFACE_VERSION()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "apps(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "contractURI()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getInitializedVersion()": FunctionFragment;
    "getPackageId(string,bytes)": FunctionFragment;
    "getPackageInfo(uint256)": FunctionFragment;
    "getPackageInfo(string,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "knsResolver()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "registerApp(string,bytes,string,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlistPacakge(uint256)": FunctionFragment;
    "updateContractURI(string)": FunctionFragment;
    "updateMetadata(uint256,string,bytes32)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "UPGRADE_INTERFACE_VERSION"
      | "approve"
      | "apps"
      | "balanceOf"
      | "contractURI"
      | "getApproved"
      | "getInitializedVersion"
      | "getPackageId"
      | "getPackageInfo(uint256)"
      | "getPackageInfo(string,bytes)"
      | "initialize"
      | "isApprovedForAll"
      | "knsResolver"
      | "name"
      | "owner"
      | "ownerOf"
      | "proxiableUUID"
      | "registerApp"
      | "renounceOwnership"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "transferFrom"
      | "transferOwnership"
      | "unlistPacakge"
      | "updateContractURI"
      | "updateMetadata"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "apps", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInitializedVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageId",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageInfo(uint256)",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPackageInfo(string,bytes)",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "knsResolver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerApp",
    values: [string, BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlistPacakge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMetadata",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "apps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitializedVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageInfo(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPackageInfo(string,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "knsResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerApp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlistPacakge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AppMetadataUpdated(uint256,string,bytes32)": EventFragment;
    "AppRegistered(uint256,string,bytes,string,bytes32)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "Initialized(uint64)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AppMetadataUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AppRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AppMetadataUpdatedEventObject {
  package: BigNumber;
  metadataUrl: string;
  metadataHash: string;
}
export type AppMetadataUpdatedEvent = TypedEvent<
  [BigNumber, string, string],
  AppMetadataUpdatedEventObject
>;

export type AppMetadataUpdatedEventFilter =
  TypedEventFilter<AppMetadataUpdatedEvent>;

export interface AppRegisteredEventObject {
  package: BigNumber;
  packageName: string;
  publisherName: string;
  metadataUrl: string;
  metadataHash: string;
}
export type AppRegisteredEvent = TypedEvent<
  [BigNumber, string, string, string, string],
  AppRegisteredEventObject
>;

export type AppRegisteredEventFilter = TypedEventFilter<AppRegisteredEvent>;

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface PackageStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PackageStoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    apps(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        packageName: string;
        publisherKnsNodeId: string;
        metadataUrl: string;
        metadataHash: string;
      }
    >;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getInitializedVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPackageId(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPackageInfo(uint256)"(
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[IKinodeAppStore.PackageInfoStructOutput]>;

    "getPackageInfo(string,bytes)"(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<[IKinodeAppStore.PackageInfoStructOutput]>;

    initialize(
      _knsResolver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    knsResolver(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    registerApp(
      packageName: string,
      publisherName: BytesLike,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unlistPacakge(
      package: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateContractURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateMetadata(
      package: BigNumberish,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  apps(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      packageName: string;
      publisherKnsNodeId: string;
      metadataUrl: string;
      metadataHash: string;
    }
  >;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getInitializedVersion(overrides?: CallOverrides): Promise<BigNumber>;

  getPackageId(
    packageName: string,
    publisherName: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPackageInfo(uint256)"(
    package: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IKinodeAppStore.PackageInfoStructOutput>;

  "getPackageInfo(string,bytes)"(
    packageName: string,
    publisherName: BytesLike,
    overrides?: CallOverrides
  ): Promise<IKinodeAppStore.PackageInfoStructOutput>;

  initialize(
    _knsResolver: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  knsResolver(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  registerApp(
    packageName: string,
    publisherName: BytesLike,
    metadataUrl: string,
    metadataHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unlistPacakge(
    package: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateContractURI(
    uri: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateMetadata(
    package: BigNumberish,
    metadataUrl: string,
    metadataHash: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    apps(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        packageName: string;
        publisherKnsNodeId: string;
        metadataUrl: string;
        metadataHash: string;
      }
    >;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getInitializedVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getPackageId(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPackageInfo(uint256)"(
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IKinodeAppStore.PackageInfoStructOutput>;

    "getPackageInfo(string,bytes)"(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<IKinodeAppStore.PackageInfoStructOutput>;

    initialize(_knsResolver: string, overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    knsResolver(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    registerApp(
      packageName: string,
      publisherName: BytesLike,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlistPacakge(
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateContractURI(uri: string, overrides?: CallOverrides): Promise<void>;

    updateMetadata(
      package: BigNumberish,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AppMetadataUpdated(uint256,string,bytes32)"(
      package?: BigNumberish | null,
      metadataUrl?: null,
      metadataHash?: null
    ): AppMetadataUpdatedEventFilter;
    AppMetadataUpdated(
      package?: BigNumberish | null,
      metadataUrl?: null,
      metadataHash?: null
    ): AppMetadataUpdatedEventFilter;

    "AppRegistered(uint256,string,bytes,string,bytes32)"(
      package?: BigNumberish | null,
      packageName?: null,
      publisherName?: null,
      metadataUrl?: null,
      metadataHash?: null
    ): AppRegisteredEventFilter;
    AppRegistered(
      package?: BigNumberish | null,
      packageName?: null,
      publisherName?: null,
      metadataUrl?: null,
      metadataHash?: null
    ): AppRegisteredEventFilter;

    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "Initialized(uint64)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    apps(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInitializedVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getPackageId(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPackageInfo(uint256)"(
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPackageInfo(string,bytes)"(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _knsResolver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    knsResolver(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    registerApp(
      packageName: string,
      publisherName: BytesLike,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unlistPacakge(
      package: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateContractURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateMetadata(
      package: BigNumberish,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UPGRADE_INTERFACE_VERSION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    apps(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInitializedVersion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPackageId(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPackageInfo(uint256)"(
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPackageInfo(string,bytes)"(
      packageName: string,
      publisherName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _knsResolver: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    knsResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerApp(
      packageName: string,
      publisherName: BytesLike,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unlistPacakge(
      package: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateContractURI(
      uri: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateMetadata(
      package: BigNumberish,
      metadataUrl: string,
      metadataHash: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}