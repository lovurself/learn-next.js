import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";
import { API_URL, getMovies } from "../../../(home)/page";

import type { Metadata } from 'next'
 
type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`${API_URL}/${id}`).then((res) => res.json());
 
  return {
    title: product.title
  }
}

export default async function MovieDetail({params: {id}} : {params: {id: string}}) {
  return <>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading movie video</h1>}>
      <MovieVideos id={id}/>
    </Suspense>
  </>
}

