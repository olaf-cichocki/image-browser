import React from 'react';
import classNames from 'classnames';
import PictureEntity from '../../entities/picture';
import { IMAGES_ENDPOINT } from '../../constants/api';
import Placeholder from './Placeholder';
import css from './Picture.module.scss';
import { observer } from 'mobx-react';

interface ImageProps {
  image: PictureEntity;
  sizes?: string;
  className?: string;
  placeholderColor?: string;
}

interface ImageState {
  loaded: boolean;
  error: boolean;
}

@observer
class Image extends React.Component<ImageProps, ImageState> {
  static endpointUrl = IMAGES_ENDPOINT;
  static endpointSettings = 'f_auto,q_auto/';
  static breakPoints = [320, 576, 768, 1024, 1200, 1600, 2048, 2560, 3200, 3840];
  static getReponsiveUrl(breakpoint: number, id: PictureEntity['publicId']) {
    return `${Image.endpointUrl}w_${breakpoint},${Image.endpointSettings}${id}`
  }

  state: ImageState = {
    loaded: false,
    error: false
  };

  image = React.createRef<HTMLImageElement>();

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidUpdate(prevProps: ImageProps) {
    const isSameImage = this.props.image.publicId === prevProps.image.publicId;
    const isAlreadyLoaded = this.image.current!.complete;

    if (this.state.error && !isSameImage) {
      this.setState({ error: false });
      return;
    }

    if (isSameImage || (isAlreadyLoaded && this.state.loaded === true)) {
      return;
    }

    if (isAlreadyLoaded && this.state.loaded === false) {
      this.setState({ loaded: true });
      return;
    }

    this.setState({ loaded: false });
  }

  private setLoaded = () => {
    this.setState({ loaded: true });
  };

  private getSrcSet = (): string => {
    const { width: imageWidth, publicId } = this.props.image;
    const srcSet = Image.breakPoints
      .filter(breakpoint => breakpoint <= imageWidth)
      .map(breakpoint =>
        `${Image.getReponsiveUrl(breakpoint, publicId)} ${breakpoint}w`
      )
      .join(',');
    return srcSet;
  }

  render() {
    const {
      image: {
        width,
        height,
        publicId,
        title,
      },
      sizes,
      className,
      placeholderColor = 'gray',
    } = this.props;
    const { loaded, error } = this.state;

    if (error) {
      return (
        <figure className={css.imageContainer}>
          <Placeholder width={width} height={height} placeholderColor="red" />
        </figure>
      );
    }

    return (
      <figure className={css.imageContainer}>
        {!loaded && (
          <Placeholder
            width={width}
            height={height}
            placeholderColor={placeholderColor}
          />
        )}
        <img
          ref={this.image}
          alt={title}
          src={Image.endpointUrl + Image.endpointSettings + publicId}
          srcSet={this.getSrcSet()}
          sizes={sizes}
          className={classNames(css.image, {
            className,
            [css.isLoading]: !loaded
          })}
          onLoad={this.setLoaded}
        />
      </figure>
    );
  }
}

export default Image;
