import { ImageSizeClasses } from '../ImageSizeClasses.types';

type UserImageBlockProps = {
  size: keyof ImageSizeClasses;
  picture?: {
    filename: string;
    url?: string;
  };
  initials: string;
};
