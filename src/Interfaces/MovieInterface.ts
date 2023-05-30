import { Images, Title, Trailer } from "./MoviesInterface";

export interface FullMovieData {
  data: FullMovieDataI
}

interface FullMovieDataI {
  mal_id:          number;
  url:             string;
  images:          Images;
  trailer:         Trailer;
  approved:        boolean;
  titles:          Title[];
  title:           string;
  title_english:   string;
  title_japanese:  string;
  type:            string;
  episodes:        number;
  status:          string;
  airing:          boolean;
  aired:           Aired;
  duration:        string;
  rating:          string;
  score:           number;
  scored_by:       number;
  rank:            number;
  popularity:      number;
  members:         number;
  favorites:       number;
  synopsis:        string;
  studios:         Studio[];
  genres:          Genre[];
  demographics:    Demographic[];
  relations:       Relation[];
  theme:           Theme[];
}

interface Aired {
  string: string;
}

interface Studio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Demographic {
  mal_id: number;
  type:   string;
  name:   string;
  url:    string;
}

interface Entry {
  mal_id: number;
  type:   string;
  name:   string;
  url:    string;
}

interface Relation {
  relation: string;
  entry:    Entry[];
}

interface Theme {
  openings: string[];
  endings: string[];
}
