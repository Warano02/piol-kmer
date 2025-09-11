export type SingleHome = {
  src: string;
  price: number;
  title: string;
  id: string;
  favName?: string; // Is useFull if Home is favorite
};

export type CarrouselImagesProps = {
  title: string;
  link: string;
  data: SingleHome[] | undefined;
};

export type CustomImageProps = {
  imageSrc: string;
  alt: string;
  className?: string;
  effect?: "zoom";
};
