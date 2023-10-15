import React from 'react';
import { Profile } from '@lens-protocol/react-web';

interface Props {
  query: string;
  profiles: Profile[];
}

export default function SearchResults({ query, profiles }: Props) {
  const filteredProfiles = profiles.filter((profile) =>
    profile.name && profile.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results</h2>
      {filteredProfiles.length === 0 ? (
        <p>No results found for "{query}"</p>
      ) : (
        <ul>
          {filteredProfiles.map((profile) => (
            <li key={profile.id}>
              <h3>{profile.name}</h3>
              <p>{profile.bio}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}