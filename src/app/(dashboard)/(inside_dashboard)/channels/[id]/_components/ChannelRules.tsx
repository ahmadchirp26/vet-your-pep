import { useGetChannel } from "@/api/Channels/useGetChannel";
import { Dialog, DialogContent } from "@/core/ui/dialog";

interface ChannelRulesProps {
  isOpen: boolean;
  onClose: () => void;
  channelId: string;
}

const ChannelRules = ({ isOpen, onClose, channelId }: ChannelRulesProps) => {
  const { data } = useGetChannel(channelId);
  // console.log("Rules Data", data?.getChannelById?.rules);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <div className="flex flex-col gap-5 outline-none border-none justify-center items-center">
            <span className="text-white font-bold text-lg">Channel's Rule</span>
            <span className="text-graylight text-sm text-center">
              {data?.getChannelById?.rules}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChannelRules;
