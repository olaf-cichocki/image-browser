import React from 'react';
import Picture from '../components/picture/Picture';
import { RouteProps, Redirect } from 'react-router';
import { observer } from 'mobx-react-lite';
import Store from '../store';

interface DetailRouteProps extends RouteProps {}

const DetailRoute: React.FC<RouteProps> = ({ location }) => {
  const id = location!.pathname.replace('/details/', '');
  const { loading, getImageById } = Store.images;
  const image = getImageById(id);

  if (!image && !loading) {
    return <Redirect to="/" />;
  }

  if (!image) {
    return null;
  }

  const { publicId, width, height, title } = image;

  return (
    <section className="App">
      <main>
        <section className="container">
          <div className="jumbotron">
            <header>
              <h1 className="text-center text-primary mb-4">{title}</h1>
            </header>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <div style={{ maxWidth: width }}>
                  <Picture publicId={publicId} width={width} height={height} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default observer(DetailRoute);
