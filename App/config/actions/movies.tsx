import Config from 'react-native-config';
import { Api } from '..';
import { ApiSuccessResponse } from '../Api';

type PagingReponse<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: T;
};

export type TVPopularType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
type TVPopularResponse = PagingReponse<TVPopularType[]>;

export async function getTVPopular(
  page: number,
): Promise<ApiSuccessResponse<TVPopularResponse>> {
  const response = await Api.get<TVPopularResponse>(
    Config.API_URL,
    `tv/popular?api_key=${Config.API_KEY}&page=${page}`,
  );
  return response;
}
