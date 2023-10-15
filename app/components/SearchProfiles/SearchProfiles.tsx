import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { useSearchProfiles, Profile } from '@lens-protocol/react-web';

export function SearchProfiles() {
  const [inputValue, setInputValue] = useState('');
  const [selectedQuery, setSelectedQuery] = useState<string>();

  const [data, setData] = useState<Profile[] | undefined>(undefined); // change null to undefined
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { data } = await useSearchProfiles({
      query: inputValue,
      limit: 20,
    });
    setData(data);
    setLoading(false);
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
      {loading && <p>Loading...</p>}
      {data !== undefined && ( // add a check for undefined
        <SearchResults query={inputValue} profiles={data} />
      )}
    </div>
  );
}

export default SearchProfiles;