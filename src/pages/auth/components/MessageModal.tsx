import { Modal } from "../../../components/Modal";

const MessageModal = ({ open, onClose, messageContent }) => {
  return (
    <>
      <Modal isOpen={open} onClose={onClose} title={messageContent}></Modal>
    </>
  );
};

export default MessageModal;
