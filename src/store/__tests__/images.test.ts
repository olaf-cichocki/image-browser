const promiseFinally = require('promise.prototype.finally');
// Add `finally()` to `Promise.prototype`
promiseFinally.shim();

import { RootStore } from '../';
import ImagesStore, { storeModel } from '../images';
import { RAW } from '../../demo/api';
import { deserialize } from 'serializr';

class RootMock {}
const RootStoreMock = new RootMock() as RootStore;

let store: ImagesStore;

beforeEach(async () => {
  // No need to mock API for now, since it is fake anyway
  store = new ImagesStore(RootStoreMock);
  await store.fetchImages();
});

describe('ImageStore', () => {
  it('Is fetching and serializing data', () => {
    const values = deserialize(storeModel, store);

    expect(values).toEqual(RAW);
  });

  it('Gets items correctly by ID', () => {
    const item = store.getImageById('Krajobrazy/winter_is_coming');

    expect(item).toEqual({
      publicId: 'Krajobrazy/winter_is_coming',
      width: 900,
      height: 350,
      title: 'Winter is comming'
    });
  });

  it('Removes items properly', () => {
    const item = store.getImageById('Krajobrazy/winter_is_coming');
    store.removeImage(item!);
    const newQuery = store.getImageById('Krajobrazy/winter_is_coming');

    expect(newQuery).toBeUndefined();
  });
});
