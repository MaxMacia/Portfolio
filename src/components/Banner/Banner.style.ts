import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${colors.grey};
    height: 40px;
`;

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.8%;
`;

export const Img = styled.img`
    height: 30px;
    border-radius: 30px;
`;

export const Heading = styled.h1`
	font-size: 1em;
	padding-left: 1.7%;
	width: 270px;
`;

export const IconsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 8%;
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