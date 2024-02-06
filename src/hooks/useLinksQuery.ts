import { useQuery } from "@tanstack/react-query";
import { getLinks } from "../utils/requests/url";
import { LinkModel } from "../utils/types/model/LinkModel";

export const useLinksQuery = (state: string = "") => {
  return useQuery<LinkModel[]>({
    queryFn: () => getLinks(state),
    queryKey: ["links", state],
    staleTime: 10000,
  });
};
