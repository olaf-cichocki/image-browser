import { observable, action } from 'mobx';
import { createModelSchema, primitive, identifier } from 'serializr';

export interface ImageData {
  publicId: string;
  width: number;
  height: number;
  title: string;
}

class PictureEntity {
  publicId: string = '';
  width: number = 0;
  height: number = 0;
  @observable title: string = '';

  @action.bound rename(newTitle: string) {
    this.title = newTitle;
  }
}

export const pictureSchema = createModelSchema(PictureEntity, {
  publicId: identifier(),
  width: primitive(),
  height: primitive(),
  title: primitive()
});

export default PictureEntity;
