export interface MyRandstadProps {
  show?: boolean;
  loginUrl: string;
  label: string;
}
declare const MyRandstad: ({ show, loginUrl, label }: MyRandstadProps) => JSX.Element | null;
export default MyRandstad;
