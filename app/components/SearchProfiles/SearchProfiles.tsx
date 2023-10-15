import React, { useState } from 'react';
import { useSearchProfiles } from '@lens-protocol/react-web';
import SearchResults from './SearchResults';

function SearchProfiles() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const { data } = useSearchProfiles({
    query: inputValue,
    limit: 20,
  });

  const handleSubmit = async () => {
    setLoading(true);
    // Remove the useSearchProfiles hook from here
    // const { data } = await useSearchProfiles({
    //   query: inputValue,
    //   limit: 20,
    // });
    setLoading(false);
  };

  return (
    <div>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleSubmit}>Search</button>
      {loading && <div>Loading...</div>}
      {data && (
        <SearchResults query={inputValue} profiles={data} />
      )}
    </div>
  );
}

export default SearchProfiles;