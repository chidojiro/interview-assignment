export interface BreadcrumbLink {
  breadcrumbTitle: string;
  breadcrumbUrl?: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbLink[];
}
