import { AuthService } from './auth.service';
import { Place } from './place.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private postedPlaces = new BehaviorSubject<Place[]>([
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
      new Date('2020-12-31'),
      'user@1'
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
      new Date('2020-08-01'),
      new Date('2022-12-31'),
      'user@1'
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
      new Date('2020-06-01'),
      new Date('2021-12-31'),
      'user@2'
    ),
    new Place(
      'place4',
      'The Beach Paradise',
      'Beach view with amazing services.',
      '3rd Main road, Karwar, Karnataka',
      'https://pix10.agoda.net/hotelImages/305/305776/305776_15072214520032783841.jpg',
      2355,
      4.2,
      ['Balcony with Beach View', '50 meters from the Waters', 'Room Service'],
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user@2'
    ),
    new Place(
      'place5',
      'The Hill Top Sangtum',
      'A house on the rocks, Feels like Heaven on Earth.',
      '4th Main, Coorg, Karnataka',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Triund_Trek_stay.jpg/640px-Triund_Trek_stay.jpg',
      1980,
      4,
      ['On the Hill top', 'Campfire place', 'Trek Package'],
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user@1'
    ),
    new Place(
      'place6',
      'The Cabin in the Woods',
      'A cabin in the middle of the forest, For an alone time with the nature.',
      '8th Main, 4th Cross, Barnerghatta main Road, Karnataka',
      'https://soultravelblog.com/wp-content/uploads/2019/12/Naturehouse-Sweden-1.jpeg',
      5500,
      4.5,
      ['In the Middle of the woods', 'Authentic Experience', 'Essential goods available'],
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'user@2'
    ),
  ]);

  constructor(private authService: AuthService) { }

  get getPlaces() {
    return this.postedPlaces.asObservable();
  }

  getOnePlace(id: string) {

    return this.postedPlaces.pipe(
      take(1),
      map(place => {
        return { ...place.find(p => p.id === id) };
      })
    )
  }

  addNewPlacePost(placeName: string, description: string, address: string, price: number, availableFrom: Date, availableTo: Date) {
    const newPlacePost = new Place(
      'place' + Math.floor(Math.random() * 100).toString(),
      placeName,
      description,
      address,
      'https://pix10.agoda.net/hotelImages/305/305776/305776_15072214520032783841.jpg',
      price,
      4.2,
      ['New crazy', 'Homely', 'Fantastic'],
      availableFrom,
      availableTo,
      this.authService.getUserId
    );

    return this.getPlaces.pipe(take(1), delay(1000), tap(places => {
      this.postedPlaces.next(places.concat(newPlacePost));
    }));
  }

  updatePlacePost(placeId: string, placeName: string, description: string, address: string, price: number, availableFrom: Date, availableTo: Date) {
    return this.getPlaces.pipe(take(1),
      delay(1000),
      tap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const notUpdatedPlace = updatedPlaces[updatedPlaceIndex];

        updatedPlaces[updatedPlaceIndex] = new Place(
          notUpdatedPlace.id,
          placeName,
          description,
          address,
          notUpdatedPlace.imageUrl,
          price,
          notUpdatedPlace.rating,
          notUpdatedPlace.features,
          availableFrom,
          availableTo, notUpdatedPlace.userId
        );
        this.postedPlaces.next(updatedPlaces);
      })
    )
  }
}
