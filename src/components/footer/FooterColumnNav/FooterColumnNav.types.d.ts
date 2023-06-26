export interface FooterColumnNavProps {
  columns: ColumnChildren[];
}

export interface ColumnChildren {
  title: string;
  url: string;
  children: ColumnChildren[] | [];
}
