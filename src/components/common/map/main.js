import React, { Component } from "react";
import isEmpty from "lodash.isempty";

// components:
import Marker from "./Marker";

// examples:
import GoogleMap from "./GoogleMap";

// consts
//import LOS_ANGELES_CENTER from "../const/la_center";

//const LOS_ANGELES_CENTER = [34.1820765, -118.3602306];
//center: {lat: 59.95, lng: 30.33},

// Return map bounds based on list of places
const getMapBounds = (map, maps, data) => {
	const bounds = new maps.LatLngBounds();
   	data.forEach((place) => {
		bounds.extend(new maps.LatLng(
			place.location.coordinates[1],
			place.location.coordinates[0],
		));
	});
	return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
	maps.event.addDomListenerOnce(map, "idle", () => {
		maps.event.addDomListener(window, "resize", () => {
			map.fitBounds(bounds);
		});
	});
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, data) => {
	// Get bounds by our places
	const bounds = getMapBounds(map, maps, data);
	// Fit map to bounds
	map.fitBounds(bounds);
	// Bind the resize listener
	bindResizeListener(map, maps, bounds);
};

class Main extends Component {
	// constructor(props) {
	// 	super(props);

	// }

	componentDidMount() {
		fetch("places.json")
			.then((response) => response.json())
			.then((data) => this.setState({ places: data.results }));
	}

	render() {
		//const { places } = this.state;
		const {data} = this.props;
		console.log("map", data);
		return (
			<>
				{!isEmpty(data) && (
					<GoogleMap
						defaultZoom={11}
						defaultCenter={{lat: 59.95, lng: 30.33}}
						yesIWantToUseGoogleMapApiInternals
						onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, data)}
					>
						{data.map((place) => {
							console.log(place);
							return	<Marker
								key={place._id}
								text={place.title}
								lat={place.location.coordinates[1]}
								lng={place.location.coordinates[0]}
							/>;
						}
							
						)}
					</GoogleMap>
				)}
			</>
		);
	}
}

export default Main;