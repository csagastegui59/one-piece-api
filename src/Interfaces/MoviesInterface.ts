export interface Results {
  pagination: Pagination;
  data: MovieData[];
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface MovieData {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  titles: Title[];
  title: string;
  episodes: number;
  status: string;
  airing: boolean;
  duration: string;
  score: number;
  rank: number;
  rating: string;
  popularity: number;
  scored_by: number;
  members: number;
  synopsis: string;
}

export interface Images {
  jpg: JPG;
}

interface JPG {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: VideoImages;
}

interface VideoImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

export interface Title {
  type: string;
  title: string;
}

interface VideoImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}