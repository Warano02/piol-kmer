import type { Houses } from "./Home";

interface ImagesViewerProps {
  setShowHouseImages: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  selectedImage: string | null;
  isSaved: boolean;
}

export interface RoomsContentProps {
  House: Houses;
}

export interface RoomImagesPreviewProps {
  images: string[];
  setShowHouseImages: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}
