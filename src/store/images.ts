import { RootStore } from './index';
import { observable, action, IObservableArray } from 'mobx';
import { fetchImages } from '../demo/api';
import {
  createSimpleSchema,
  list,
  object,
  update as updateStore
} from 'serializr';
import PictureEntity, { ImageData } from '../entities/picture';

export class ImagesStore {
  root: RootStore;
  @observable loading = true;
  @observable images: IObservableArray<PictureEntity> = observable([]);

  constructor(rootStore: RootStore) {
    this.root = rootStore;
    this.fetchImages(); // TODO: Change
  }

  public fetchImages() {
    fetchImages()
      .then(this.updateImagesList)
      // TODO: Proper error handling
      .catch(() => new Error('Something went wrong!'))
      .finally(() => this.handleLoading(false));
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

const storeModel = createSimpleSchema({
  images: list(object(PictureEntity))
});

export default ImagesStore;
