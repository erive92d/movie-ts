import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchSearch } from "../api/api";
import PlaceHolder from "../components/SearchComps/Placeholder";
import SearchResult from "../components/SearchComps/SearchResult";
import UseDebounce from "../helpers/UseDebounce";
import { resultProps, PersonProps } from "../props/props";
import SearchInput from "../components/SearchComps/SearchInput";

type SearchProps = resultProps & PersonProps;

export default function Search() {
  const [input, setInput] = useState<string>("");
  const [formatSearch, setFormat] = useState("movie");
  const { debouncedValue } = UseDebounce(input, 500);

  const { data } = useQuery<SearchProps[] | undefined>({
    queryKey: ["static", debouncedValue, formatSearch],
    queryFn: () =>
      debouncedValue
        ? fetchSearch(debouncedValue, formatSearch)
        : Promise.resolve([]),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.currentTarget.value);
  };

  const handleFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setFormat(event.currentTarget.value);
  };
  const { placeholder } = PlaceHolder(formatSearch);

  return (
    <div className="min-h-screen  gap-8 flex flex-col items-center">
      <SearchInput
        handleChange={handleChange}
        handleFormat={handleFormat}
        placeholder={placeholder}
        formatSearch={formatSearch}
        input={input}
      />
      <SearchResult result={data || []} format={formatSearch} />{" "}
    </div>
  );
}
