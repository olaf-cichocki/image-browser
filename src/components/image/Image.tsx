import React from 'react';
import css from './Image.module.scss';
import classNames from 'classnames';

interface ImageProps {
  src: string;
  placeholderColor?: string;
  width: number;
  height: number;
}

interface ImageState {
  loaded: boolean;
}

class Image extends React.Component<ImageProps, ImageState> {
  state = {
    loaded: false
  };

  image = React.createRef<HTMLImageElement>();

  componentDidUpdate(prevProps: ImageProps) {
    const isSameImage = this.props.src === prevProps.src;
    const isAlreadyLoaded = this.image.current!.complete;

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
    const { loaded } = this.state;

    return (
      <figure className={css.imageContainer}>
        {!loaded && (
          <svg
            className={css.image}
            width={width}
            viewBox={`0 0 ${width} ${height}`}
          >
            <rect width={width} height={height} fill={placeholderColor} />
          </svg>
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
