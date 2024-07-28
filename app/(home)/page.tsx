'use client';

import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Home',
// };

export default function Page() {
  // data fetch
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    const response = await fetch(
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  // is loading...
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1>Home</h1>
      {isLoading ? 'Loading...' : JSON.stringify(movies)}
    </>
  );
}
