import React from 'react';
import css from './Picture.module.scss';

interface ImageProps {
  width: number;
  height: number;
  placeholderColor?: string;
}

const Placeholder: React.FC<ImageProps> = ({
  width,
  height,
  placeholderColor = 'gray'
}) => (
  <svg className={css.image} width={width} viewBox={`0 0 ${width} ${height}`}>
    <rect width={width} height={height} fill={placeholderColor} />
  </svg>
);

export default Placeholder;
