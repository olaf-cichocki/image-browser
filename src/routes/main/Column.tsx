import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../components/picture/Picture';
import PictureEntity from '../../entities/picture';
import css from './Column.module.scss';
import { observer } from 'mobx-react';

interface ColumnProps {
  images: PictureEntity[];
}

const Column: React.FC<ColumnProps> = ({ images }) => (
  <div className="col-12 col-xl-4">
    {images.map((image) => (
      <Link key={image.publicId} to={`/details/${image.publicId}`} className={css.link}>
        <div className="card mb-4">
          <Picture
            className="card-img-top"
            image={image}
          />
          <div className="card-body">
            <h5 className="card-title nav-link">{image.title}</h5>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default observer(Column);
