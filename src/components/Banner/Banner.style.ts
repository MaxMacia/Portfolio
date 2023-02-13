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
    padding-left: 10px;
`;

export const Img = styled.img`
    height: 30px;
    border-radius: 30px;
`;

export const Heading = styled.h1`
	font-size: 1em;
	padding-left: 5px;
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
`;

export const Percentage = styled.p`
	padding-right: 5px;
`;

export const IconBattery = styled.i`
	padding-right: 10px;
	font-size: 1.5em;
`;