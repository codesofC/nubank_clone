export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export interface OperationsHomeProps {
  title: string;
  icon: React.JSX.Element;
  extra?: string;
}

export interface MoreInfosProps {
  image: string;
  title: string,
  description: string;
  action: string;
  route?: string;
}
