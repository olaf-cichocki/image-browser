import { observable, action } from 'mobx';
import { createModelSchema, primitive, identifier } from 'serializr';

export interface ImageData {
  publicId: string;
  width: number;
  height: number;
  title: string;
}

class PictureEntity {
  readonly publicId: string = '';
  readonly width: number = 0;
  readonly height: number = 0;
  @observable title: string = 'Untitled';

  @action.bound rename(newTitle: string) {
    this.title = newTitle || 'Untitled';
  }
}

export const pictureSchema = createModelSchema(PictureEntity, {
  publicId: identifier(),
  width: primitive(),
  height: primitive(),
  title: primitive()
});

export default PictureEntity;
