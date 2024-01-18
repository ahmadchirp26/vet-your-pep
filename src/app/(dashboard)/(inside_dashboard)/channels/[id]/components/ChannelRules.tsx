import { Dialog, DialogContent } from "@/core/ui/dialog";

interface ChannelRulesProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChannelRules = ({ isOpen, onClose }: ChannelRulesProps) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <div className="flex flex-col gap-5 outline-none border-none justify-center items-center">
            <span className="text-white font-bold text-lg">Channel's Rule</span>
            <span className="text-graylight text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
              iaculis metus, ut vulputate mi. Morbi blandit tortor quis accumsan
              volutpat. Suspendisse potenti. Maecenas dictum ligula velit, at
              dignissim tortor convallis ut. Praesent convallis turpis a metus
              laoreet pretium. Phasellus a orci id ligula hendrerit viverra quis
              sollicitudin erat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam in iaculis metus, ut vulputate mi. Morbi
              blandit tortor quis accumsan volutpat.
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChannelRules;
