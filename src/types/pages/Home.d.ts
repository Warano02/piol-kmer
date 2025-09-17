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
  icon: string;
  price: number;
  images: Images[];
}
