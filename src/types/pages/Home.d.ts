type Images = {
  name: string;
  urls: string[];
};

export interface Houses {
  _id: string;
  neighborhood: string;
  title: string;
  about: string;
  isFavorite: boolean;
  guestFavorite: boolean;
  rating: number;
  images: Images[];
}
