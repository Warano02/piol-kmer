export type Images = {
  name: string;
  urls: string[];
};
type Amentie = {
  name: string;
  icon: string;
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
  images: Images[];
}
