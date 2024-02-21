import { useGetChannel } from "@/api/Channels/useGetChannel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

interface Props {
  channelId: string;
  className?: string;
}

const ChannelRulesModal = React.forwardRef<HTMLButtonElement, Props>(
  ({ channelId, className, ...props }, ref) => {
    const { data } = useGetChannel(channelId);
    return (
      <Dialog>
        <DialogTrigger asChild ref={ref} {...props}>
          <p className={className}>{"View Channel's Rules"}</p>
        </DialogTrigger>
        <DialogContent>
          <div className="flex flex-col gap-5 outline-none border-none justify-center items-center">
            <span className="text-white font-bold text-lg">Channel's Rule</span>
            <span className="text-graylight text-sm text-center">
              {data?.getChannelById?.rules}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
);

ChannelRulesModal.displayName = "ChannelRulesModal";
export default ChannelRulesModal;
