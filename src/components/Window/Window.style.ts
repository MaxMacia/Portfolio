import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { devices } from '../../utils/styles/devices';

export const Container = styled.div`
	border: 1px solid ${colors.black};
	width: 90%;
	height: 597px;
	@media ${devices.mobile} {
		height: 460px;
	}
	@media ${devices.mobileL} {
		height: 460px;
	}
`;

export const TopBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.primary};
	height: 24px;
	display: flex;
	justify-content: flex-start;
`;

export const CloseButton = styled.i`
	color: ${colors.white};
	padding-left: 1%;
	padding-top: 4px;
	cursor: pointer;
`;

export const TitleBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.grey};
	height: 30px;
`;

export const Path = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 18px;
	width: 50%;
	margin-top: 5px;
	margin-left: 10%;
	@media ${devices.mobile} {
		width: 95%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: 3%;
		height: 18px;
	}
	@media ${devices.mobileL} {
		width: 95%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: 3%;
		height: 18px;
	}
	@media ${devices.tablet} {
		width: 95%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-left: 3%;
		height: 18px;
	}
`;

export const Paragraphe = styled.div`
	margin: 0;
	padding-left: 1%;
	@media ${devices.mobile} {
		font-size: 0.8em;
		padding-top: 2px;
		width: 100%;
	}
	@media ${devices.mobileL} {
		font-size: 0.8em;
		padding-top: 2px;
		width: 100%;
	}
`;

export const WindowContent = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 537px;
	display: flex;
	flex-wrap: wrap;
	@media ${devices.mobile} {
		overflow: scroll;
		height: 400px;
	}
	@media ${devices.mobileL} {
		overflow: scroll;
		height: 400px;
	}
	@media ${devices.tablet} {
		overflow: scroll;
	}
`;

export const TxtFile = styled.figure<{ aboutMe: boolean }>`
	display: none;
	${(props) =>
		props.aboutMe &&
		`
        display: block;
        cursor: pointer;
		height: fit-content;
    `}
`;

export const TxtFileImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

export const FigCap = styled.figcaption`
	font-weight: bold;
`;

export const HtmlFile = styled.figure<{ cv: boolean; contact: boolean }>`
	display: none;
	${(props) =>
		props.cv &&
		`
        display: block;
        cursor: pointer;
    `}
	${(props) =>
		props.contact &&
		`
        display: block;
        cursor: pointer;
    `}
`;

export const HtmlFileImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

export const EmailFile = styled.figure<{ contact: boolean }>`
	display: none;
	${(props) =>
		props.contact &&
		`
        display: block;
        cursor: pointer;
    `}
`;

export const EmailFileImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

export const ClosedFolderWrapper = styled.div`
    display: flex;
	flex-wrap: wrap;
	@media ${devices.mobile} {
		width: 60%;
		flex-direction: row;
		justify-content: space-between;
	}
	@media ${devices.mobileL} {
		width: 60%;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ClosedFolder = styled.figure<{ projects: boolean }>`
	display: none;
	${(props) =>
		props.projects &&
		`
        display: block;
        height: fit-content;
        cursor: pointer;
    `}
`;

export const ClosedFolderImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
	@media ${devices.mobile} {
		height: 80px;
	}
	@media ${devices.mobileL} {
		height: 80px;
	}
`;
