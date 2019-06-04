import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../components/picture/Picture';
import PictureEntity from '../../entities/picture';
import css from './Column.module.scss';

interface ColumnProps {
  images: PictureEntity[];
}

const Column: React.FC<ColumnProps> = ({ images }) => (
  <div className="col-12 col-xl-4">
    {images.map(({ width, height, title, publicId }) => (
      <Link key={publicId} to={`/details/${publicId}`} className={css.link}>
        <div className="card mb-4">
          <Picture
            className="card-img-top"
            width={width}
            height={height}
            publicId={publicId}
          />
          <div className="card-body">
            <h5 className="card-title nav-link">{title}</h5>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default Column;
