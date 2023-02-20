import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { devices } from '../../utils/styles/devices';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${colors.grey};
    height: 40px;
	@media ${devices.mobile} {
		width: 100%;
	}
	@media ${devices.mobileL} {
		width: 100%;
	}
	@media ${devices.tablet} {
		width: 100%;
	}
`;

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.8%;
	@media ${devices.mobile} {
		padding-left: 2%;
	}
	@media ${devices.mobileL} {
		padding-left: 2%;
	}
	@media ${devices.tablet} {
		padding-left: 2%;
	}
`;

export const Img = styled.img`
    height: 30px;
    border-radius: 30px;
`;

export const Heading = styled.h1`
	font-size: 1em;
	padding-left: 1.7%;
	width: 270px;
	@media ${devices.mobile} {
		width: 130px;
		font-size: 0.8em;
		padding-left: 10%;
	}
	@media ${devices.mobileL} {
		width: 130px;
		font-size: 0.8em;
		padding-left: 10%;
	}
	@media ${devices.tablet} {
		width: 270px;
		font-size: 1em;
	}
`;

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 8%;
	@media ${devices.mobile} {
		width: 30%;
	}
	@media ${devices.mobileL} {
		width: 30%;
	}
	@media ${devices.tablet} {
		width: 15%;
	}
`;

export const IconWiFi = styled.i`
	font-size: 1.1em;
`;

export const BatteryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 63%;
`;

export const Percentage = styled.p`
	padding-right: 6.7%;
`;

export const IconBattery = styled.i`
	margin-right: 14%;
	font-size: 1.5em;
`;