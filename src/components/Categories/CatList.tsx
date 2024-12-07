import { useQuery } from "@tanstack/react-query"
import { fetchCategories } from "../../api/api"

type CatProps = {
    name: string
    id: number
}

type FormatProps = {
    format?: string
    handleCategories: React.MouseEventHandler<HTMLButtonElement>
}


export default function CatList({ format, handleCategories }: FormatProps) {

    const { data } = useQuery<CatProps[]>({
        queryKey: ["cat", format],
        queryFn: () => fetchCategories(format)
    })


    return (
        <div className="">
            <div className="flex items-center overflow-x-auto gap-2 p-2">
                {data && data.map((cat, index) => (
                    <div key={index}>
                        <button value={cat.name} onClick={handleCategories} className="btn btn-sm">{cat.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}