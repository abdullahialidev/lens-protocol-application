import { useSearchProfiles } from '@lens-protocol/react-web';
import Link from 'next/link';
import { formatPicture } from '../utils';
import { SearchProfiles } from './components/SearchProfiles/SearchProfiles';

// Import client from ./client.ts
import { client } from './client';

export default function Home() {
  const options = {
    query: '', // add a query parameter here
    limit: 30,
    client, // pass the client to useSearchProfiles
  };

  const { data } = useSearchProfiles(options);

  return (
    <div className='p-20'>
      <h1>My Lens App</h1>
      <SearchProfiles />
      {data?.map((profile, index) => (
        <Link href={`/profile/${profile.handle}`} key={index}>
          <div className='my-14'>
            {profile.picture && profile.picture.__typename === 'MediaSet' ? (
              <img
                src={formatPicture(profile.picture)}
                width="120"
                height="120"
                alt={profile.handle}
              />
            ) : (
              <div className="w-14 h-14 bg-slate-500  " />
            )}
            <h3 className="text-3xl my-4">{profile.handle}</h3>
            <p className="text-xl">{profile.bio}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}