"use client";

import React, { useContext, createContext, useEffect } from "react";
const ModalContext = createContext<{
  communitySettingmodal: boolean;
  setCommunitySettingmodal: React.Dispatch<React.SetStateAction<boolean>>;
  communityProfileModal: boolean;
  setCommunityProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  communityMemberProfileModal: boolean;
  setCommunityMemberProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  friendProfileModal: boolean;
  setFriendProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  userSearchModal: boolean;
  setUserSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  newCommunityModal: boolean;
  setNewCommunityModal: React.Dispatch<React.SetStateAction<boolean>>;
  newChannelModal: boolean;
  setNewChannelModal: React.Dispatch<React.SetStateAction<boolean>>;
  newRoomModal: boolean;
  setNewRoomModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftBuyModal: boolean;
  setNftBuyModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftBuyConfirmModal: boolean;
  setNftBuyConfirmModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftListModal: boolean;
  setNftListModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftUnListModal: boolean;
  setNftUnListModal: React.Dispatch<React.SetStateAction<boolean>>;
  nftTransferModal: boolean;
  setNftTransferModal: React.Dispatch<React.SetStateAction<boolean>>;
  callActionModal: boolean;
  setCallActionModal: React.Dispatch<React.SetStateAction<boolean>>;
  calling: boolean;
  setCalling: React.Dispatch<React.SetStateAction<boolean>>;
  newGroupModal: boolean;
  setNewGroupModal: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  communitySettingmodal: false,
  setCommunitySettingmodal: () => {},
  communityProfileModal: false,
  setCommunityProfileModal: () => {},
  communityMemberProfileModal: false,
  setCommunityMemberProfileModal: () => {},
  friendProfileModal: false,
  setFriendProfileModal: () => {},
  userSearchModal: false,
  setUserSearchModal: () => {},
  newCommunityModal: false,
  setNewCommunityModal: () => {},
  newChannelModal: false,
  setNewChannelModal: () => {},
  newRoomModal: false,
  setNewRoomModal: () => {},
  nftBuyModal: false,
  setNftBuyModal: () => {},
  nftBuyConfirmModal: false,
  setNftBuyConfirmModal: () => {},
  nftListModal: false,
  setNftListModal: () => {},
  nftUnListModal: false,
  setNftUnListModal: () => {},
  nftTransferModal: false,
  setNftTransferModal: () => {},
  callActionModal: false,
  setCallActionModal: () => {},
  calling: false,
  setCalling: () => {},
  newGroupModal: false,
  setNewGroupModal: () => {},
});
export const useSettingModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useSettingModal must be used within a SettingModalProvider"
    );
  }
  return context;
};

const SettingModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [communitySettingmodal, setCommunitySettingmodal] =
    React.useState<boolean>(false);
  const [communityProfileModal, setCommunityProfileModal] =
    React.useState<boolean>(false);
  const [communityMemberProfileModal, setCommunityMemberProfileModal] =
    React.useState<boolean>(false);
  const [friendProfileModal, setFriendProfileModal] =
    React.useState<boolean>(false);
  const [userSearchModal, setUserSearchModal] = React.useState<boolean>(false);
  const [newCommunityModal, setNewCommunityModal] =
    React.useState<boolean>(false);
  const [newChannelModal, setNewChannelModal] = React.useState<boolean>(false);
  const [newRoomModal, setNewRoomModal] = React.useState<boolean>(false);
  const [nftBuyModal, setNftBuyModal] = React.useState<boolean>(false);
  const [nftBuyConfirmModal, setNftBuyConfirmModal] =
    React.useState<boolean>(false);
  const [nftListModal, setNftListModal] = React.useState<boolean>(false);
  const [nftUnListModal, setNftUnListModal] = React.useState<boolean>(false);
  const [nftTransferModal, setNftTransferModal] =
    React.useState<boolean>(false);
  const [callActionModal, setCallActionModal] = React.useState<boolean>(false);
  const [calling, setCalling] = React.useState<boolean>(false);
  const [newGroupModal, setNewGroupModal] = React.useState<boolean>(false);

  const _functions: Record<
    number,
    React.Dispatch<React.SetStateAction<boolean>>
  > = {
    1: setCommunitySettingmodal,
    2: setCommunityProfileModal,
    3: setCommunityMemberProfileModal,
    4: setFriendProfileModal,
    5: setUserSearchModal,
    6: setNewChannelModal,
    7: setNewCommunityModal,
    8: setNewRoomModal,
    9: setNftBuyModal,
    10: setNftBuyConfirmModal,
    11: setCallActionModal,
    12: setCalling,
    13: setNewGroupModal,
    14: setNftListModal,
    15: setNftTransferModal,
    16: setNftUnListModal,
  };
  const initialValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const handleformat = (index: number) => {
    const functionArray = initialValue.filter((item: number) => item !== index);
    functionArray.map((item, index) => {
      _functions[item](false);
    });
  };
  useEffect(() => {
    if (communitySettingmodal) handleformat(1);
  }, [communitySettingmodal]);
  useEffect(() => {
    if (communityProfileModal) handleformat(2);
  }, [communityProfileModal]);
  useEffect(() => {
    if (communityMemberProfileModal) handleformat(3);
  }, [communityMemberProfileModal]);
  useEffect(() => {
    if (friendProfileModal) handleformat(4);
  }, [friendProfileModal]);
  useEffect(() => {
    if (userSearchModal) handleformat(5);
  }, [userSearchModal]);
  useEffect(() => {
    if (newChannelModal) handleformat(6);
  }, [newChannelModal]);
  useEffect(() => {
    if (newCommunityModal) handleformat(7);
  }, [newCommunityModal]);
  useEffect(() => {
    if (newRoomModal) handleformat(8);
  }, [newRoomModal]);
  useEffect(() => {
    if (nftBuyModal) handleformat(9);
  }, [nftBuyModal]);
  useEffect(() => {
    if (nftBuyConfirmModal) handleformat(10);
  }, [nftBuyConfirmModal]);
  useEffect(() => {
    if (nftListModal) handleformat(14);
  }, [nftListModal]);
  useEffect(() => {
    if (nftUnListModal) handleformat(16);
  }, [nftUnListModal]);
  useEffect(() => {
    if (nftTransferModal) handleformat(15);
  }, [nftTransferModal]);
  useEffect(() => {
    if (callActionModal) handleformat(11);
  }, [callActionModal]);
  useEffect(() => {
    if (calling) handleformat(12);
  }, [calling]);
  useEffect(() => {
    if (newGroupModal) handleformat(13);
  }, [newGroupModal]);
  return (
    <ModalContext.Provider
      value={{
        communitySettingmodal,
        setCommunitySettingmodal,
        communityProfileModal,
        setCommunityProfileModal,
        communityMemberProfileModal,
        setCommunityMemberProfileModal,
        friendProfileModal,
        setFriendProfileModal,
        userSearchModal,
        setUserSearchModal,
        newCommunityModal,
        setNewCommunityModal,
        newChannelModal,
        setNewChannelModal,
        newRoomModal,
        setNewRoomModal,
        nftBuyModal,
        setNftBuyModal,
        nftBuyConfirmModal,
        setNftBuyConfirmModal,
        nftListModal,
        setNftListModal,
        nftUnListModal,
        setNftUnListModal,
        nftTransferModal,
        setNftTransferModal,
        callActionModal,
        setCallActionModal,
        calling,
        setCalling,
        newGroupModal,
        setNewGroupModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default SettingModalProvider;
