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
