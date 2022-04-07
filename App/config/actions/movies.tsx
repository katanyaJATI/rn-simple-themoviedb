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

export type TVSeasonType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

export type TVDetailsType = {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: true;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: TVSeasonType[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
type TVDetailsResponse = TVDetailsType;
export async function getTVDetails(
  id: number,
): Promise<ApiSuccessResponse<TVDetailsResponse>> {
  const response = await Api.get<TVDetailsResponse>(
    Config.API_URL,
    `tv/${id}?api_key=${Config.API_KEY}`,
  );
  return response;
}
