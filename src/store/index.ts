import ImagesStore from './images';

export class RootStore {
  images: ImagesStore;

  constructor() {
    this.images = new ImagesStore(this);
  }
}

export default new RootStore();
