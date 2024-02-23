import useAuthSessionContext from "@/lib/Authentication/context/AuthSessionContext";
import React from "react";
import useGetFollowings from "@/api/Customer/useGetFollowings";
import UnFollowButton from "./UnFollowButton";
import FollowButton from "./FollowButton";

type Props = {
  customerId: string;
};

const FollowButtonManager_ = (props: Props & { myId: string }) => {
  const { data: followingsData, status: followingsDataStatus } =
    useGetFollowings({
      customerId: props.myId,
    });

  if (followingsDataStatus === "pending") {
    return <div>Loading...</div>;
  }
  if (followingsDataStatus === "error") {
    return null;
  }

  const isFollowing = followingsData?.getFollowing.some(
    (following) => following.id === props.customerId
  );
  return isFollowing ? (
    <UnFollowButton customerToUnfollowId={props.customerId} />
  ) : props.myId === props.customerId ? null : (
    <FollowButton customerToFollowId={props.customerId} />
  );
};

const FollowButtonManager = (props: Props) => {
  const { data } = useAuthSessionContext();
  if (!data) {
    return null;
  }
  return <FollowButtonManager_ myId={data.sub} {...props} />;
};

export default FollowButtonManager;
