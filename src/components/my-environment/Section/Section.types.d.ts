export type SectionTypes = {
  id: string;
  children?: React.ReactNode;
  title: string | React.ReactNode;
  titleLink?: string;
  description?: string | React.ReactNode;
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleAddItem?: () => void;
  label?: string | React.ReactNode;
  divider?: boolean;
  actionHeaderStyles?: string;
};
