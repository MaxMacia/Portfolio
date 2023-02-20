import { useState } from 'react';
import { ImgMin, StyledPopup, Img } from './ControlledPopup.style';

type Props = {
	picture: string;
	alt: string;
};

const ControlledPopup = ({ picture, alt }: Props) => {
	const [open, setOpen] = useState<boolean>(false);
	const closeModal = () => setOpen(false);

	return (
		<div>
			<ImgMin src={picture} alt={alt} onClick={() => setOpen((o) => !o)} />
			<StyledPopup open={open} closeOnDocumentClick onClose={closeModal}>
				<Img src={picture} alt={alt} />
			</StyledPopup>
		</div>
	);
};

export default ControlledPopup;
