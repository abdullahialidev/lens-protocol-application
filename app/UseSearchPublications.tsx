import { useSearchProfiles } from '@lens-protocol/react-web';
import { ChangeEvent, useState } from 'react';

type SearchResultsProps = {
  query: string;
};

function SearchResults({ query }: SearchResultsProps) {
  const { data, loading, hasMore, next } = useSearchProfiles({ query });

  if (loading) return <Loading />;

  if (data.length === 0) {
    return <p>No profiles found</p>;
  }

  return (
    <div>
      {data.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
      {hasMore && <p onClick={next}>Load more</p>}
    </div>
  );
}

export function UseSearchProfiles() {
  const [inputValue, setInputValue] = useState('');
  const [selectedQuery, setSelectedQuery] = useState<string>();

  const handleSubmit = () => {
    setSelectedQuery(inputValue);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>
        <code>Search Profiles</code>
      </h1>
      <div>
        <input type="search" onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {selectedQuery && <SearchResults query={selectedQuery} />}
    </div>
  );
}