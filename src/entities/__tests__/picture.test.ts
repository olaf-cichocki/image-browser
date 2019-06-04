import PictureEntity, { pictureSchema } from '../picture';
import { serialize, deserialize } from 'serializr';
import { RAW } from '../../demo/api';

describe('Picture', () => {
  it('serialisation works', () => {
    const image = deserialize(PictureEntity, RAW.images[0]);
    const serialisedImage = serialize(pictureSchema, image);
    expect(image).toEqual(serialisedImage);
  });

  it('rename works', () => {
    const image = deserialize(PictureEntity, RAW.images[0]);
    expect(image.title).toBe('Winter Scouts');

    image.rename('Awesome Scouts!');
    expect(image.title).toBe('Awesome Scouts!');
  });
});
