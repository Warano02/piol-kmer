export type Images = {
  name: string;
  urls: string[];
};
type Amentie = {
  name: string;
  icon: string;
};
type review = {
  name: string;
  date: string;
  comment: string;
  rating: number;
};

export interface Houses {
  _id: string;
  neighborhood: string;
  title: string;
  about: string;
  imagesStyleView?: "pages" | "carrousel";
  isFavorite: boolean;
  guestFavorite: boolean;
  rating: number;
  icon: string;
  price: number;
  amenities: Amentie[];
  capacity: {
    bedrooms: number;
    bed: number;
    person_capacity: number;
    pets_capacity: number;
  };
  reviews: review[];
  images: Images[];
}
