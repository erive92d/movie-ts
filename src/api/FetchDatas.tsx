import { useQuery } from "@tanstack/react-query"
import { resultProps } from "../props/props"
import { fetchFeatures } from "./api"

export default function FetchDatas(fetchName:string) {

    const {data } = useQuery<resultProps[]>(
        {
            queryKey:["fetch", fetchName],
            queryFn: () => fetchFeatures(fetchName, 1)
        }
    )

    return data
}
