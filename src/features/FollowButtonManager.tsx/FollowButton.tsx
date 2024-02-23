import { useFollowMutation } from "@/api/Customer/useFollowFriend";
import BellIcon from "@/components/icons/BellIcon";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  customerToFollowId: string;
}
const FollowButton = ({ customerToFollowId }: Props) => {
  const followUserMutation = useFollowMutation();

  return (
    <Button
      //className="flex items-center gap-3 p-2 border border-white rounded-2xl w-32 justify-center cursor-pointer"
      onClick={() =>
        followUserMutation.mutate({
          customerId: customerToFollowId,
        })
      }
      isLoading={followUserMutation.status === "pending"}
    >
      <BellIcon className="mr-2 h-4 w-4" />
      Follow
    </Button>
  );
};

export default FollowButton;
