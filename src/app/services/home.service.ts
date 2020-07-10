import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private postedPlaces: Place[] = [
    new Place(
      'place1',
      'The Beach House',
      'Beach view with amazing services.',
      '3rd Main road, Karwar, Karnataka',
      'https://pix10.agoda.net/hotelImages/305/305776/305776_15072214520032783841.jpg',
      2355,
      4.2,
      ['Balcony with Beach View', '50 meters from the Waters', 'Room Service'],
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'place2',
      'The Hill View',
      'A house on the rocks, Feels like Heaven on Earth.',
      '4th Main, Coorg, Karnataka',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Triund_Trek_stay.jpg/640px-Triund_Trek_stay.jpg',
      1980,
      4,
      ['On the Hill top', 'Campfire place', 'Trek Package'],
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'place3',
      'The Cabin',
      'A cabin in the middle of the forest, For an alone time with the nature.',
      '8th Main, 4th Cross, Barnerghatta main Road, Karnataka',
      'https://soultravelblog.com/wp-content/uploads/2019/12/Naturehouse-Sweden-1.jpeg',
      5500,
      4.5,
      ['In the Middle of the woods', 'Authentic Experience', 'Essential goods available'],
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
  ]

  constructor() { }

  postedPlacesGet() {
    return [...this.postedPlaces];
  }

  getOnePlace(id: string) {
    return { ...this.postedPlaces.find(p => p.id === id) };
  }
}
