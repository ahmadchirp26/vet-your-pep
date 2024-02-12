import { getChannelByIdServerFetch } from "@/api/Channels/useGetChannel";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import ChannelViewTemplate from "./_templates/ChannelViewTemplate";

const ViewChannel = async (props: { params: { id: string } }) => {
  const response = await getChannelByIdServerFetch(props.params.id);
  return (
    <HydrationBoundary state={dehydrate(response.queryClient)}>
      <ChannelViewTemplate channelId={props.params.id} />
    </HydrationBoundary>
  );
};

export default ViewChannel;
