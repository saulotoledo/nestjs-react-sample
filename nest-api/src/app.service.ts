import { Injectable } from '@nestjs/common';

import { Route } from './types';

@Injectable()
export class AppService {
  getRoutes(): Route[] {
    return [
      {
        id: 1,
        title: 'Route 01',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.8274, lng: -47.9223 },
      },
      {
        id: 2,
        title: 'Route 02',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -11.8274, lng: -43.9223 },
      },
      {
        id: 3,
        title: 'Route 03',
        startPosition: { lat: -15.82594, lng: -47.92923 },
        endPosition: { lat: -15.82942, lng: -47.92765 },
      },
      {
        id: 4,
        title: 'Route 04',
        startPosition: { lat: -15.82449, lng: -47.92756 },
        endPosition: { lat: -15.8276, lng: -47.92621 },
      },
      {
        id: 5,
        title: 'Route 05',
        startPosition: { lat: -15.82331, lng: -47.92588 },
        endPosition: { lat: -15.82758, lng: -47.92532 },
      },
    ];
  }
}
