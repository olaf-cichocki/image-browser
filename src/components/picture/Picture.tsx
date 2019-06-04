import React from 'react';
import classNames from 'classnames';
import { Image as CloudImage, Transformation } from 'cloudinary-react';
import { ImageData } from '../../entities/picture';
import Placeholder from './Placeholder';
import css from './Picture.module.scss';

interface ImageProps extends Partial<ImageData> {
  width: number;
  height: number;
  className?: string;
  placeholderColor?: string;
  [x: string]: any; // TODO: Add types to cloudinary-react and extend that instead
}

interface ImageState {
  loaded: boolean;
  error: boolean;
}

class Image extends React.Component<ImageProps, ImageState> {
  state: ImageState = {
    loaded: false,
    error: false
  };

  image = React.createRef<HTMLImageElement>();

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidUpdate(prevProps: ImageProps) {
    const isSameImage = this.props.publicId === prevProps.publicId;
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

  render() {
    const {
      width,
      height,
      publicId,
      className,
      placeholderColor = 'gray',
      ...imageProps
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
        <CloudImage
          responsive
          ref={this.image}
          quality="auto"
          fetchFormat="auto"
          placeholder="blank"
          className={classNames(css.image, {
            className,
            [css.isLoading]: !loaded
          })}
          onLoad={this.setLoaded}
          publicId={publicId}
          {...imageProps}
        >
          <Transformation width="auto" dpr="auto" crop="scale" />
        </CloudImage>
      </figure>
    );
  }
}

export default Image;
