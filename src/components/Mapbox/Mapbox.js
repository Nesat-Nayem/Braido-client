import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

// mapboxgl.accessToken = 'pk.eyJ1IjoicHJvZ3JhbW1pbmdoZXJvIiwiYSI6ImNrdXc3OG04MzFsbHgzM255ZnU0NDRtbmsifQ.sEGTkRu5uz5PBIoho1An0w';

mapboxgl.accessToken = 'pk.eyJ1IjoibmVzYXQ1MzIzNCIsImEiOiJja3hiaDNhYTgyYmI2MnBvNWd6andwYmp2In0.x8Us5hfPG4T53mb4lxQTxg';


const Mapbox = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default Mapbox;