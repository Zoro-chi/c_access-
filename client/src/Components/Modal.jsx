import "./modal.css";

const Modal = () => {
	return (
		<div className="modal-wrap">
			<div className="modal">
				<span> A password reset link have been sent to your email address </span>
				<div className="close-icon">X</div>
				<div className="modal-bg"></div>
			</div>
		</div>
	);
};

export default Modal;
