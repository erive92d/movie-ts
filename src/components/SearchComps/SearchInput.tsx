import Dropdown from "./Dropdown";

type SearchInputProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleFormat: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder: string;
  formatSearch: string;
  input: string;
};

export default function SearchInput({
  handleChange,
  handleFormat,
  placeholder,
  formatSearch,
  input,
}: SearchInputProps) {
  const options = ["movie", "tv", "person"];

  return (
    <div className="flex  gap-4">
      <div className="flex p-2 lg:w-full">
        <Dropdown
          options={options}
          handleFormat={handleFormat}
          selectedFormat={formatSearch}
        />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={placeholder}
          className="lg:w-full input input-ghost rounded-none 
        "
        />
      </div>
    </div>
  );
}
