import {useState, useEffect} from "react"


export default function UseDebounce(value:string, delay: number) {
    const [loading, setLoading] = useState<boolean>(false)
    const [debouncedValue, setDebouncedValue] = useState<string>(value)

    useEffect(() => {
        setLoading(true)
        const handler = setTimeout(() => {
            setDebouncedValue(value)
            setLoading(false)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    },[value, delay])

    return { debouncedValue, loading}
}
