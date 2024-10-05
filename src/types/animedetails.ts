export type AnimeInfo = {
    type: string;
    title: string;
    images: string;
    descriptions: string;
    status: string;
    release: string;
    season: string;
    duration: string;
    quality: string;
    country?: string;
    adaptation: string;
    genre: string[];
    explicit?: string; 
    demography: string;
    themes: string[];
    studio: string;
    ratings: string;
    popularity: string;
    rating_policy: string;
    total_eps: string;
    credit: string;
    episode_list: Episode[];
    has_next: HasNext;
  };
  
  export type Episode = {
    episodeId: string;
    epsTitle: string;
  };
  
  export type HasNext = {
    has_next_link: string;
    has_next_page: boolean;
  };
  