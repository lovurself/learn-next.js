// 오직 영화 정보만을 렌더링하는 UI의 component
import { API_URL } from "../app/(home)/page";

async function getMovie(id:string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
  const info = await getMovie(id)
  return <h6>{JSON.stringify(info)}</h6>
}