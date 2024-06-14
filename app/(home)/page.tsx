// "use client"

import Link from "next/link";

// import { useEffect, useState } from "react"

export const metadata = {
  title: 'HOME'
}
// client component에는 metadata를 사용할 수 없음!

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
  const response = await fetch(API_URL)
  const data = await response.json();
  return data;
}

// await를 사용하기 위해 async function 사용!
export default async function HomePage () {
  // 아래 코드는 client side에서 API를 가져오는 방법!
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  //   const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
  //   const data = await response.json();
  //   setMovies(data);
  //   setIsLoading(false);
  // }
  // useEffect(() => {
  //   getMovies();
  // }, []);

  const movies = await getMovies();
  return (
    <>
      {/* <h1>{isLoading ? "Loading..." : JSON.stringify(movies)}</h1> */}
      <h1>{movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}</h1>
    </>
  )
}