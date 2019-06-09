import React, { RefObject } from 'react';
import { RouteProps, Redirect } from 'react-router';
import { observer } from 'mobx-react';
import Store from '../store';
import Picture from '../components/picture/Picture';
import PictureEntity from '../entities/picture';

interface DetailRouteProps extends RouteProps { }
interface DetailRouteState {
  isEditing: boolean;
}

class DetailRoute extends React.Component<DetailRouteProps, DetailRouteState> {
  state: DetailRouteState = {
    isEditing: false
  };

  input: RefObject<HTMLInputElement> = React.createRef();

  private removeItem = (image: PictureEntity) =>
    Store.images.removeImage(image);
  private editItem = () => this.setState({ isEditing: true });
  private closeEdit = () => this.setState({ isEditing: false });
  private saveChanges = (image: PictureEntity) => {
    image.rename(this.input.current!.value);
    this.closeEdit();
  };
  private handleKeyDown =
    (event: React.KeyboardEvent<HTMLInputElement>, image: PictureEntity) => {
      if (event.key === 'Enter') {
        return this.saveChanges(image);
      }
      if (event.key === 'Escape' || event.key === 'Esc') {
        return this.closeEdit();
      }
    }

  render() {
    const { loading, getImageById } = Store.images;
    const { isEditing } = this.state;
    const id = this.props.location!.pathname.replace('/details/', '');
    const image = getImageById(id);

    if (!image && !loading) {
      return <Redirect to="/" />;
    }

    if (!image) {
      return null;
    }

    const { width, height, title } = image;

    return (
      <section className="App">
        <main>
          <section className="container-fluid">
            <div className="jumbotron">
              <header>
                <h1 className="text-center text-primary mb-4">{title}</h1>
              </header>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <div style={{ maxWidth: width }}>
                    <Picture
                      image={image}
                    />
                  </div>
                </div>
                <div className="col-12 text-center mb-2">
                  {width.toString()} x {height.toString()}
                </div>
                {isEditing && (
                  <div className="col-12 d-flex justify-content-center mb-3">
                    <input
                      ref={this.input}
                      defaultValue={title}
                      onKeyDown={(event) => this.handleKeyDown(event, image)}
                    />
                  </div>
                )}
                <div className="col-12 d-flex justify-content-around">
                  {!isEditing && (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={this.editItem}
                      >
                        Rename
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.removeItem(image)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                  {isEditing && (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.saveChanges(image)}
                      >
                        Confirm
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={this.closeEdit}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    );
  }
}

export default observer(DetailRoute);
