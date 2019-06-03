import React from 'react';
import css from './Image.module.scss';
import classNames from 'classnames';
import Placeholder from './Placeholder';

interface ImageProps {
  src: string;
  width: number;
  height: number;
  placeholderColor?: string;
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
    const isSameImage = this.props.src === prevProps.src;
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
    const { src, width, height, placeholderColor = 'gray' } = this.props;
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
          className={classNames(css.image, {
            [css.isLoading]: !loaded
          })}
          onLoad={this.setLoaded}
          src={src}
        />
      </figure>
    );
  }
}

export default Image;
