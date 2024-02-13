import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ChannelViewTemplate from "./_templates/ChannelViewTemplate";
import { fetchChannelServerSide } from "@/api/Channels/useGetChannel";
import {prefetchJoinedChannelsServerSide} from "@/api/Channels/useJoinedChannels";

const ViewChannel = async (props: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await fetchChannelServerSide(props.params.id, queryClient);
  //[Todo]: move this prefetch to some other componnent
  await prefetchJoinedChannelsServerSide(queryClient);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ChannelViewTemplate channelId={props.params.id} />
    </HydrationBoundary>
  );
};

export default ViewChannel;
