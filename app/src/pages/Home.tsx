import React from 'react';
import { getHeatmapService, provinceGeoIds } from '~data/services';
import { IHeatmapData } from '~data/interfaces';
import { ColorGrade, ColorGradeDef } from '~assets/styles/colorsLib';

interface IProps {

}

interface IState {

}

class Home extends React.Component<IProps, IState> {
  map: google.maps.Map;
  data: IHeatmapData[];
  
  componentWillMount() {
    // renderChoropleth
    // this.fetchData();
  }

  componentDidMount() {
    if (window.google === undefined) {
      (window as any).mapLoaded = this.loadMap;
      return;
    }
    this.loadMap();
  }

  loadMap = () => {
    const point = new google.maps.LatLng(-2.6000285, 118.015776);
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: point,
      zoom: 5
    });

    // renderMarkers
    // renderHeatMap 
    this.fetchData();

    // renderChoropleth
    // this.map.data.setStyle(this.styleFeature);
    // this.getBoundaries();
  }

  fetchData = () => {
    getHeatmapService(
      '2019-12-20', 
      '2019-12-20',
      []
    ).subscribe(
      res => {
        // renderChoropleth
        // this.data = res.data.details;

        // this.renderMarkers(res.data.details);
        this.renderHeatmap(res.data.details);
      }
    );
  }

  getBoundaries = () => {
    provinceGeoIds.forEach(geoid => {
      this.map.data.loadGeoJson(
        `/public/boundaries/${geoid}.json`, 
        { idPropertyName: 'GEOID' }, 
        (features) => {
          features.forEach(f => {
            let value: number = this.data
              .filter(item => item.geoIdRegion == f.getProperty('GEOID'))
              .map(item => item.totalNetSales)
              .reduce((acc, cur) => acc + cur);

            f.setProperty('value', value);
          });
        }
      );
    });
  }

  renderMarkers = (data: IHeatmapData[]) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const property = data[i];
      const coordinate = new google.maps.LatLng(property.coordinate.latitude, property.coordinate.longitude);
      new google.maps.Marker({
        position: coordinate,
        map: this.map
      })
    }
  }

  renderHeatmap = (data: IHeatmapData[]) => {
    let weightedLocations: google.maps.visualization.WeightedLocation[] = [];
    for (let i = 0; i < data.length; i++) {
      const property = data[i];
      const coordinate = new google.maps.LatLng(property.coordinate.latitude, property.coordinate.longitude);
      const weightData: google.maps.visualization.WeightedLocation = {
        location: coordinate,
        weight: property.totalRoomNights
      }
      weightedLocations.push(weightData);
    }

    new google.maps.visualization.HeatmapLayer({
      data: weightedLocations,
      dissipating: false,
      radius: 1,
      map: this.map,
    });
  }

  styleFeature = (feature: google.maps.Data.Feature) => {
    console.log(1);
    const outlineWeight = 0.5,
      zIndex = 1;
    let color = '#FFFFFFFF';
    let index: number = feature.getProperty('value');

    color = this.getColor10(index);
    return {
      strokeWeight: outlineWeight,
      strokeColor: '#fff',
      zIndex: zIndex,
      fillColor: color,
      fillOpacity: 0.75
    };
  }

  getColor10 = (x: number): string => {
    return x >= 50000000
      ? ColorGrade.Grade9.hex
      : x >= 25000000
      ? ColorGrade.Grade8.hex
      : x >= 10000000
      ? ColorGrade.Grade7.hex
      : x >= 1000000
      ? ColorGrade.Grade6.hex
      : x >= 0
      ? ColorGrade.Grade5.hex
      : ColorGradeDef;
  };

  render() {
    return (
      <div>
        <div 
          id="map" 
          style={{height: '100vh'}}
        ></div>
      </div>
    );
  }
}

export default Home;
