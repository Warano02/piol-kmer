import type { Houses, Images } from "./Home";

interface ImagesViewerProps {
  setShowHouseImages: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  selectedImage: string | null;
  setHider: React.Dispatch<React.SetStateAction<boolean>>;

  isSaved: boolean;
}

export interface RoomsContentProps {
  House: Houses;
  setHider: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RoomImagesPreviewProps {
  images: string[];
  setShowHouseImages: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ImagePreviewPageProps {
  data: Images[];
  setShowNewPage: React.Dispatch<React.SetStateAction<boolean>>;
  setHider: React.Dispatch<React.SetStateAction<boolean>>;
  isSaved:boolean
}
