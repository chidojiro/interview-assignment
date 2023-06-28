export type SectionTypes = {
  id: string;
  children?: React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  handleEdit?: () => void;
  handleAddItem?: () => void;
  label?: string | React.ReactNode;
  divider?: boolean;
};
