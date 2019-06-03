import React from 'react';
import css from './Image.module.scss';

interface ImageProps {
  src: string;
}

class Image extends React.Component<ImageProps> {
  render() {
    const { src } = this.props;

    return <img src={src} />;
  }
}

export default Image;
