import React from 'react';

export default function SearchProfiles({ client }) {
  const { profiles } = client.useSearchProfiles({
    query: '', // add a query parameter here
    limit: 30,
  });

  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </li>
      ))}
    </ul>
  );
}