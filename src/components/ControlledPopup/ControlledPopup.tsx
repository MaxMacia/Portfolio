import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import { devices } from "../../utils/styles/devices";

const ImgMin = styled.img`
    border: 1px solid ${colors.black};
    height: 100px;
    margin-top: 20px;
    cursor: pointer;
    @media ${devices.mobile} {
        height: 50px;
    }
    @media ${devices.mobileL} {
        height: 50px;
    }
`;

const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(0, 0, 0, 0.5);
    }
`;

const Img = styled.img`
    height: 500px;
    border: 1px solid ${colors.black};
    @media ${devices.mobile} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
    @media ${devices.mobileL} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
    @media ${devices.tablet} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
`;

type Props = {
    picture: string,
    alt: string
}

const ControlledPopup = ({ picture, alt }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const closeModal = () => setOpen(false)

    return (
        <div>
            <ImgMin
                src={picture}
                alt={alt}
                onClick={() => setOpen(o => !o)}
                />
            <StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
                <Img src={picture} alt={alt} />
            </StyledPopup>
        </div>
    );
};

export default ControlledPopup