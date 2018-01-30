import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import {Geolocation} from "@ionic-native/geolocation";

/**
 * See : http://gowriter.blogspot.fr/2017/03/integrating-mapbox-gl-js-map-into-ionic.html
 * Mapbox : https://www.mapbox.com/install/js/bundler-install/
 * J'ai mis mon code API en attendant.
 */

@Component({
  selector: 'page-territoires',
  templateUrl: 'territoires.html',
})
export class TerritoiresPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation) {
  }

  Coordinates: any;
  watch:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerritoiresPage');
  }

  ionViewDidEnter() {

    // -- Initialiser la Géolocalisation
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options)
    .subscribe((position) => {
      console.log(position);
      this.Coordinates = position.coords;
      this.executemap()
    });
  }

  executemap(){

    // -- Affichage de la Map
    mapboxgl.accessToken = 'pk.eyJ1IjoiYml5bm1lZGlhIiwiYSI6ImNqNGxqYTI5bTE4Z3AycXNlZHFocWR3ZncifQ.L-omVbSDGIObgDoQA35GAA\n';
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v9',
      center: [this.Coordinates.longitude, this.Coordinates.latitude],
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });

    // -- Pour ajouter la 3D :

    // map.on('load', function() {
    //   map.addLayer({
    //     'id': '3d-buildings',
    //     'source': 'composite',
    //     'source-layer': 'building',
    //     'filter': ['==', 'extrude', 'true'],
    //     'type': 'fill-extrusion',
    //     'minzoom': 15,
    //     'paint': {
    //       'fill-extrusion-color': '#aaa',
    //       'fill-extrusion-height': {
    //         'type': 'identity',
    //         'property': 'height'
    //       },
    //       'fill-extrusion-base': {
    //         'type': 'identity',
    //         'property': 'min_height'
    //       },
    //       'fill-extrusion-opacity': .6
    //     }
    //   });
    // });
  }

}
