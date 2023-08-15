export interface MetaCardOptionProps {
  dataTestId: string;
  iconType: 'building' | 'clock' | 'education' | 'calendar' | 'factory' | 'label' | 'marker' | 'briefcase' | 'salary' | string;
  fieldValue: string;
  svgProps?: object;
}
