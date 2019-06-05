import React from 'react';
import { observer } from 'mobx-react';
import Store from '../../store';
import Column from './Column';

const MainRoute: React.FC = () => {
  const { loading, images } = Store.images;

  const pictureBucketA = images.filter((_, index) => index % 3 === 0);
  const pictureBucketB = images.filter((_, index) => index % 3 === 1);
  const pictureBucketC = images.filter((_, index) => index % 3 === 2);

  return (
    <section className="App">
      <main>
        <section className="container-fluid">
          <div className="jumbotron">
            <header>
              <h1 className="text-center text-primary mb-4">
                {loading ? 'Loading...' : 'Images'}
              </h1>
            </header>
            <div className="row">
              <Column images={pictureBucketA} />
              <Column images={pictureBucketB} />
              <Column images={pictureBucketC} />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default observer(MainRoute);
