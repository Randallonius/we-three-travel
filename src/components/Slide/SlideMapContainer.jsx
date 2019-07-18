import React, { Component } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow'
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow'

am4core.useTheme(am4themes_animated);


class SlideMapContainer extends Component {
  componentDidMount() {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    /**
     * Series for the World map
     * It will use `chart.geodata`
     */
    let worldSeries = map.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;
    map.series.push(worldSeries);

    let worldTemplate = worldSeries.mapPolygons.template;
    worldTemplate.tooltipText = "{name}";
    worldTemplate.fill = am4core.color("#595C62");

    /**
     * Series for the U.S. map
     * It will use its own `geodata`
     */
    let usaSeries = map.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;
    map.series.push(usaSeries);


    let usaTemplate = usaSeries.mapPolygons.template;
    usaTemplate.tooltipText = "{name}";
    usaTemplate.fill = am4core.color("#595C62");

    let lineSeries = map.series.push(new am4maps.MapLineSeries());
    lineSeries.data = [{
      "multiGeoLine": [
        [
          { "latitude": 45.512794, "longitude": -122.679565 },
          { "latitude": 44.446037, "longitude": -110.587349 },
          { "latitude": 43.073051, "longitude": -89.401230 },
          { "latitude": 42.963795, "longitude": -85.670006}
        ]
      ]
    }];

    // Create image series
    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#B27799");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";

    imageSeries.data = [{
      "latitude": 45.512794,
      "longitude": -122.679565,
      "title": "Portland"
    }, {
      "latitude": 44.446037,
      "longitude": -110.587349,
      "title": "Yellowstone National Park"
    }, {
      "latitude": 43.073051,
      "longitude": -89.401230,
      "title": "Madison"
    }, {
      "latitude": 42.963795,
      "longitude": -85.670006,
      "title": "Grand Rapids"
    }];

    map.zoomControl = new am4maps.ZoomControl();

    map.smallMap = new am4maps.SmallMap();
    map.smallMap.series.push(worldSeries);

  }

    // ... chart code goes here ...

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
          <div id="chartdiv" style={{ width: "90%", height: "300px", margin: "20px auto", border: "1px solid black" }}></div>
        );
  }
}

export default SlideMapContainer