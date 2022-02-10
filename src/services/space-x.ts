// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SpaceLaunches } from "../types/launches";

/**
 * Define space-x service using a base URL and expected endpoints
 */
export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4/" }),
  endpoints: (build) => ({
    getSpaceXLaunches: build.query<SpaceLaunches[], void>({
      query: () => `launches`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetSpaceXLaunchesQuery } = spacexApi;
