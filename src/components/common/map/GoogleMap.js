import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const GoogleMap = ({ children, ...props }) => (
	<Wrapper>
		<GoogleMapReact
			bootstrapURLKeys={{
				key: "AIzaSyA3lp_UtCAE2SFYcsW5QyqAcEiEdbvDEv8",
			}}
            // defaultZoom={11}
            // defaultCenter={{lat: 59.95, lng: 30.33}}
			// 			yesIWantToUseGoogleMapApiInternals
			{...props}
		>
			{children}
		</GoogleMapReact>
	</Wrapper>
);

GoogleMap.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
};

GoogleMap.defaultProps = {
	children: null,
};

export default GoogleMap;