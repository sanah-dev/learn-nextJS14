import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideo(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
};

export default MovieDetail;
