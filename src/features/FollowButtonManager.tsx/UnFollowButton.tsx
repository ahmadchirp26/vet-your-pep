import { useUnFollowMutation } from "@/api/Customer/useUnfollowFriend";
import BellIcon from "@/components/icons/BellIcon";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  customerToUnfollowId: string;
}
const UnFollowButton = ({ customerToUnfollowId }: Props) => {
  const unfollowUserMutation = useUnFollowMutation();

  return (
    <Button
      //className="flex items-center gap-3 p-2 border border-white rounded-2xl w-32 justify-center cursor-pointer"
      onClick={() =>
        unfollowUserMutation.mutate({
          customerId: customerToUnfollowId,
        })
      }
      isLoading={unfollowUserMutation.status === "pending"}
    >
      <BellIcon className="mr-2 h-4 w-4" />
      UnFollow
    </Button>
  );
};

export default UnFollowButton;
