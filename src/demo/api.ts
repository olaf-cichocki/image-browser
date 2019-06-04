import { ImageData } from '../entities/picture';

export const fetchImages = async (): Promise<{
  images: Array<ImageData>;
}> =>
  Promise.resolve({
    images: [
      {
        publicId: 'Krajobrazy/winter_scouts',
        width: 1024,
        height: 559,
        title: 'Winter Scouts'
      },
      {
        publicId: 'Krajobrazy/sci_fi_city',
        width: 3731,
        height: 1600,
        title: 'City'
      },
      {
        publicId: 'Krajobrazy/winter_is_coming',
        width: 900,
        height: 350,
        title: 'Winter is comming'
      },
      {
        publicId: 'Krajobrazy/sky_city',
        width: 1200,
        height: 358,
        title: 'Sky City'
      },
      {
        publicId: 'Krajobrazy/wanderer',
        width: 1024,
        height: 585,
        title: 'Wanderer'
      },
      {
        publicId: 'Krajobrazy/underworld',
        width: 600,
        height: 910,
        title: 'Underworld'
      },
      {
        publicId: 'Krajobrazy/triton',
        width: 1500,
        height: 707,
        title: 'Triton'
      },
      {
        publicId: 'Krajobrazy/underground_city',
        width: 1280,
        height: 630,
        title: 'Underground city'
      },
      {
        publicId: 'Krajobrazy/The_Hangar',
        width: 1300,
        height: 592,
        title: 'The Hangar'
      },
      {
        publicId: 'Krajobrazy/town',
        width: 900,
        height: 426,
        title: 'Town'
      },
      {
        publicId: 'Krajobrazy/the_sanctuary',
        width: 1280,
        height: 705,
        title: 'The sanctuary'
      },
      {
        publicId: 'Krajobrazy/the_hives',
        width: 900,
        height: 372,
        title: 'The Hive'
      },
      {
        publicId: 'Krajobrazy/sci_fi_city_downtown',
        width: 1150,
        height: 606,
        title: 'Downtown'
      },
      {
        publicId: 'Krajobrazy/the_elf',
        width: 900,
        height: 455,
        title: 'Underworld'
      }
    ]
  });
