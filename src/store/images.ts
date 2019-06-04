import { RootStore } from './index';
import { observable, action, IObservableArray } from 'mobx';
import API, { Api } from '../demo/api';
import {
  createSimpleSchema,
  list,
  object,
  update as updateStore
} from 'serializr';
import PictureEntity, { ImageData } from '../entities/picture';

export class ImagesStore {
  root: RootStore;
  api: Api;
  @observable loading = true;
  @observable images: IObservableArray<PictureEntity> = observable([]);

  constructor(rootStore: RootStore, api = API) {
    this.root = rootStore;
    this.api = api;
    this.fetchImages(); // TODO: Change
  }

  public fetchImages() {
    return (
      this.api
        .fetchImages()
        .then(this.updateImagesList)
        // TODO: Proper error handling
        .catch(() => new Error('Something went wrong!'))
        .finally(() => this.handleLoading(false))
    );
  }

  public getImageById = (id: string) =>
    this.images.find(image => image.publicId === id);

  @action.bound public removeImage(image: PictureEntity) {
    this.images.remove(image);
  }

  @action.bound private handleLoading(state: boolean) {
    this.loading = state;
  }

  @action.bound private updateImagesList(json: { images: ImageData[] }) {
    updateStore(storeModel, this, json);
  }
}

export const storeModel = createSimpleSchema({
  images: list(object(PictureEntity))
});

export default ImagesStore;
