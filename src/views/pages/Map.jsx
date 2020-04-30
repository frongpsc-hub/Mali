import React, { Component, Fragment} from "react";
import axios from "axios";
import { 
    Card,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap';

import {
    Circle,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    Map,
    Marker,
    Popup,
    Rectangle,
    TileLayer,
    WMSTileLayer,
} from 'react-leaflet';
import L from 'leaflet';

// Full Screen Control react-leaflet;
import 'react-leaflet-fullscreen/dist/styles.css'
import 'leaflet/dist/leaflet.css';


const { BaseLayer, Overlay } = LayersControl

const fieldData = [];
const center = [51.505, -0.09];
const rectangle = [[51.49, -0.08], [51.5, -0.06]];
const position = [15.156339, 105.195341];

// Google Key API
const key = 'AIzaSyAqj1_ZjNfTeX-eCGsgbngFeMxRUtNvdo8';
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const satellite = 'SATELLITE';

// -------------------------------------------- Variable for leaflet map -------------------------------------------
var legend1 = L.control({position: 'bottomright'});

// export icon
export const thongfahPoint = new L.Icon({
 
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 46]
})

export const cooperativeShopPoint = new L.Icon({
   
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40]
})

// const fieldData = [];
// const center = [51.505, -0.09];
// const rectangle = [[51.49, -0.08], [51.5, -0.06]];
// const position = [15.156339, 105.195341];

// // Google Key API
// const key = 'AIzaSyAqj1_ZjNfTeX-eCGsgbngFeMxRUtNvdo8';
// const terrain = 'TERRAIN';
// const road = 'ROADMAP';
// const satellite = 'SATELLITE';

// variable for map for global variable
var map=null;

// Base Map
const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
const googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
const googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var baseMaps = {
    "แผนที่ดาวเทียม": googleSat,
    "แผนที่จราจร": googleStreets,
    "Hybrid": googleHybrid,
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

class Fields extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            zoom: 6,
            fields: [],
            positions: [],
            markers: [
                { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
                { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
                { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
            ],
            field_status: [],

            // lands
           // lands: [],
            // latlngs: [],

            // loading spinner
            loading: true,
            isloading: true,

            // state set overlaymap
            stateSetOverlayMap: false
        };
    }

    // Do something before render components
    componentDidMount() {
        this.getAllLands();
   
    }

    componentDidUpdate() {
        // console.log("fields: " + JSON.stringify(this.state.fields))
        // console.log("user_tractor: " + JSON.stringify(this.state.user_tractor))

        if(this.state.lands !== undefined && this.state.stateSetOverlayMap === false && this.state.lands1 !== undefined
        ) {
            // console.log("request all information are success")
            
      
            this._setMap();
        }
    }

    // -------------------------------------------- Setup Map function -------------------------------------------
    _setMap = () => {
        let lands = this.state.lands;
        let lands1 =this.state.lands1;
        // let polygon_lands = L.markerClusterGroup();
     
        let OverlayLand = [];
        let OverlayLand1 = [];

        let popupContent;
        let geojsonFeature;
      
        map = L.map('map', {
            center: [13.736717, 100.523186], 
            zoom: 6,
            layers: [googleStreets, googleHybrid, googleSat],
            fullscreenControl: true,
            fullscreenControlOptions: {
              position: 'topleft'
            },
           
        });
        console.log("aa")
        console.log(map); // should output the object that represents instance of Leaflet
/*if (map !== undefined && map !== null) {
    map.remove(); // should remove the map from UI and clean the inner children of DOM element
  console.log(map); // nothing should actually happen to the value of mymap
}*/
        // set marker leaflet
        lands.map((item, key) => {
            popupContent = `
            
            
            <div>
            <h5>ข้อมูลแปลง</h5>
            <b>ชื่อเจ้าของแปลง</b><br />
            ${item.fname} ${item.lname}<br />
            <b>เลขที่เอกสารสิทธิ์/เลขทะเบียนเกษตกร</b><br />
            ${item.field_no}<br />
            <b>ที่อยู่</b><br />
            ต.${item.tambon_t} อ.${item.amphoe_t} จ.${item.province_t}
            
            </div>
            `

            // Polygon
            if(item.geojson.type.toString() === "Polygon" || item.geojson.type.toString() === "MultiPolygon") {
                // console.log("log: " + item.geojson.type.toString())
                // console.log("log: " + JSON.stringify(item.geojson))
                geojsonFeature = {
                    "type": "Feature",
                    "properties": {
                        "name": "Coors Field",
                        "amenity": "Baseball Stadium",
                        "popupContent": popupContent,
                    },
                    "geometry": item.geojson
                    
                }

                let polygon = L.geoJSON(geojsonFeature, {
                    onEachFeature: onEachFeature,
                    valueProperty: 'incidents',
                    style: {
                        color: '#00FF51', // border color
                        weight: 2,
                        fillOpacity: 0.3
                    },
                })

                // fitBound
                polygon.on("click", function (event) {
                    // Assuming the clicked feature is a shape, not a point marker.
                    map.fitBounds(event.layer.getBounds());
                });

                OverlayLand.push(polygon)
            } 
        })
        
        lands1.map((item, key) => {
            popupContent = `
            <div>
            <h5>ข้อมูลแปลง<mark>การแจ้งรายงาน</mark></h5>
            <b>ชื่อเจ้าของแปลง</b><br />
            ${item.fname} ${item.lname}<br />
            <b>เลขที่เอกสารสิทธิ์/เลขทะเบียนเกษตกร</b><br />
            ${item.field_no}<br />
            <b>ที่อยู่</b><br />
            ต.${item.tambon_t} อ.${item.amphoe_t} จ.${item.province_t}
            
            </div>`;

            // Polygon
            if(item.geojson.type.toString() === "Polygon" || item.geojson.type.toString() === "MultiPolygon") {
                // console.log("log: " + item.geojson.type.toString())
                // console.log("log: " + JSON.stringify(item.geojson))
                geojsonFeature = {
                    "type": "Feature",
                    "properties": {
                        "name": "Coors Field",
                        "amenity": "Baseball Stadium",
                        "popupContent": popupContent,
                    },
                    "geometry": item.geojson
                    
                }

                let polygon = L.geoJSON(geojsonFeature, {
                    onEachFeature: onEachFeature,
                    valueProperty: 'incidents',
                    style: {
                        color: '#FF0000', // border color
                        weight: 2,
                        fillOpacity: 0.3
                    },
                })

                // fitBound
                polygon.on("click", function (event) {
                    // Assuming the clicked feature is a shape, not a point marker.
                    map.fitBounds(event.layer.getBounds());
                });

                OverlayLand1.push(polygon)
            } 
        })
        

        var list_lands = L.layerGroup(OverlayLand);
        var list_lands1 = L.layerGroup(OverlayLand1);
        var overlayMaps = {
            "แปลงนาที่ไม่เสียหาย": list_lands,
            "แปลงนาที่เสียหาย": list_lands1,
            
        };
    
        L.control.layers(baseMaps, overlayMaps).addTo(map);

        /*legend1.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info_legend legend'),
                grades = [0, 0, 0],
                labels = ['ปัญหาด้านราคา', 'ปัญหาด้านปริมาณ', 'ปัญหาด้านราคา และ ปริมาณ'];
            
                div.innerHTML += `<img  alt="Logo" width="30" height="35" />
                                  <span class="PromptFont"> - ร้านธงฟ้าประชารัฐ</span>
                                  <br>
                                  <img  alt="Logo" width="30" height="30" />
                                  <span class="PromptFont"> - ร้านค้าสหกรณ์</span>
                                  <br>
                                  <span class="PromptFont" style="font-size: 10px;"> 
                                    แหล่งที่มา: กรมการค้าภายใน กระทรวงพานิชย์ 2560/61 
                                  </span><br>`;

            return div;
        };
        legend1.addTo(map);*/

        this.setState({ stateSetOverlayMap: true });
    }

    // --------------------------------- Retrieve function ------------------------------------------
    //
    //
    getAllLands = () => {
        axios.get(`http://localhost:3001/api/v1/map`,)
        
      .then(res => {
        let lands = [];
        let lands1 =[];
        console.log(JSON.parse(res.data.Data[0].geojson).coordinates[0])
        res.data.Data.map((item, key) => {
            if(item.havewarranty=='0'){
                lands.push({
                    geojson: JSON.parse(item.geojson),
                    field_id:item.field_id,
                    field_no:item.field_no,
                    fname:item.fname,
                    lname:item.lname,
                    field_name:item.field_name,
                    tambon_t:item.tambon_t,
                    amphoe_t:item.amphoe_t,
                    province_t:item.province_t,
    
                })
            }
            else if
            (item.havewarranty=='1'){
                lands1.push({
                    geojson: JSON.parse(item.geojson),
                    field_id:item.field_id,
                    field_no:item.field_no,
                    fname:item.fname,
                    lname:item.lname,
                    field_name:item.field_name,
                    tambon_t:item.tambon_t,
                    amphoe_t:item.amphoe_t,
                    province_t:item.province_t,
    
                })
            }
            
            
            
        })
        this.setState({ lands: lands });
        this.setState({ lands1: lands1 });
        console.log(this.state.lands);
    }
      )}
    
       /* fetch(request)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("response lands: " + JSON.stringify(responseJson))

                let response = responseJson.data;
                let lands = [];
                // let latlngs = [];

                response.map((item, key) => {
                    lands.push({
                        land_id: item.land_id,
                        geojson: JSON.parse(item.geojson),
                        add_time: item.add_time,
                        rai: item.rai,
                        ngan: item.ngan,
                        wa: item.wa,
                        firstname: item.fname,
                        lastname: item.lname,
                        prov_name: item.prov_namt,
                        amp_name: item.amp_namt,
                        tam_name: item.tam_namt,
                    })
                })

                this.setState({ lands: lands });
                // console.log("lands: " + JSON.stringify(lands));
        })
        .catch(function (err) {
            // console.log(err);
        })
    }*/

    getAllLands_EachRegion_1 = () => {
        
    }

    //  ------------------------------------------------ Shop place -----------------------------------------
    //
    // ร้านธงฟ้าประชารัฐ
   

    render() {
        let { lands } = this.state;

        return (
            <div className="content" style={{padding: '0px', marginTop: '62px'}}>
                <div id="map" style={{height: 'calc(100vh - 62px)' ,color:"#d55"}} />
             </div>
             
        );
    }
}

export default Fields;

