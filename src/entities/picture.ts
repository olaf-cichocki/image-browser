import { observable, action } from 'mobx';
import { createModelSchema, primitive, identifier } from 'serializr';

export interface ImageData {
  publicId: string;
  width: number;
  height: number;
  title: string;
}

class Picture {
  publicId: string = '';
  width: number = 0;
  height: number = 0;
  @observable title: string = '';

  @action.bound rename(newTitle: string) {
    this.title = newTitle;
  }
}

createModelSchema(Picture, {
  publicId: identifier(),
  width: primitive(),
  height: primitive(),
  title: primitive()
});

export default Picture;
