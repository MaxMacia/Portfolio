import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const ImgMin = styled.img`
    border: 1px solid ${colors.black};
    height: 100px;
    margin-top: 20px;
    cursor: pointer;
`;

const Img = styled.img`
    height: 500px;
`;

const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(0, 0, 0, 0.5);
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