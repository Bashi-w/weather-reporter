interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const SearchBar = ({ query, setQuery, onSubmit }: SearchBarProps) => (
  <form onSubmit={onSubmit} className="search-bar">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Enter city name"
      required
    />
    <button type="submit">Search</button>
  </form>
);
