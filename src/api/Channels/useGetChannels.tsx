"use client";
import { graphql } from "@/core/lib/react-query-graphql";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useGraphQLRequestHandlerProtected } from "@/core/lib/auth-helpers";
import { useState } from "react";
import { channelKeys } from "./query-keys";

const GET_CHANNELS_ADMIN_QUERY = graphql(`
  #graphql
  query getAllChannelsWithPagination($input: ListChannelsInput!) {
    getChannels(input: $input) {
      limit
      offset
      totalRows
      results {
        id
        backgroundImage
        image
        price
        rules
        status
        title
        about
        isPaid
        members {
          id
          paidStatus
          roleChannel
        }
      }
    }
  }
`);

interface Props {
  limit: number;
  joined: boolean;
}
const useGetChannels = (
  props: Props | undefined = { limit: 100, joined: false },
) => {
  const [paginationParams, setPaginationParams] = useState({
    limit: props.limit,
    offset: 0,
  });
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  // Getting Graphql request handler with Auth headers
  const protectedRequestHandler = useGraphQLRequestHandlerProtected();

  const response = useQuery({
    // Following two lines are for pagination
    placeholderData: keepPreviousData,
    queryKey: channelKeys.listJoined({
      ...paginationParams,
      filter: { search: searchQuery },
      joined: props.joined,
    }),
    queryFn: ({ queryKey }) => {
      return protectedRequestHandler(GET_CHANNELS_ADMIN_QUERY, {
        // Following params are important for pagination
        input: {
          limit: queryKey[2].limit,
          offset: queryKey[2].offset,
          filter: {
            search: queryKey[2].filter?.search,
          },
          joined: queryKey[2].joined,
        },
      });
    },
  });

  const paginationParamsExtended = {
    ...paginationParams,
    totalRows: response.data?.getChannels.totalRows ?? 0,
  };

  return {
    ...response,
    // Following is conversion to pages format from API response of offset and limit, and back.
    pageParams: {
      page:
        paginationParamsExtended.offset / paginationParamsExtended.limit + 1,
      pageSize: paginationParamsExtended.limit,
      totalRows: paginationParamsExtended.totalRows,
      setPage: (page: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }

        const maxPages = Math.max(
          paginationParamsExtended.limit
            ? Math.ceil(
                paginationParamsExtended.totalRows /
                  paginationParamsExtended.limit,
              )
            : 0,
          1,
        );
        const newPage = Math.min(Math.max(page, 1), maxPages);
        const newOffset = (newPage - 1) * paginationParamsExtended.limit;
        setPaginationParams({
          limit: paginationParamsExtended.limit,
          offset: newOffset,
        });
      },
      setPageSize: (pageSize: number) => {
        const lastPage = response.data;
        if (response.isPlaceholderData || !lastPage) {
          return;
        }
        const latestTotalRows = paginationParamsExtended.totalRows;
        const maxPages = Math.max(
          pageSize ? Math.ceil(latestTotalRows / pageSize) : 0,
          1,
        );
        // Possible page change due to pageSize change
        const newPage = Math.min(
          Math.max(paginationParams.offset / pageSize + 1, 1),
          maxPages,
        );
        const newOffset = (newPage - 1) * pageSize;
        setPaginationParams({
          limit: pageSize,
          offset: newOffset,
        });
      },
    },
    filters: {
      searchQuery,
      setSearchQuery: (q?: string) => {
        setSearchQuery(q);
        setPaginationParams({
          limit: paginationParamsExtended.limit,
          offset: 0,
        });
      },
    },
  };
};

export default useGetChannels;
export type APIGetChannelsData = ReturnType<typeof useGetChannels>["data"];
