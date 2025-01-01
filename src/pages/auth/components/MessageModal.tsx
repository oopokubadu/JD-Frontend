import { Modal } from "../../../components/Modal";

const MessageModal = ({ open, onClose, messageContent }) => {
  return (
    <>
      <Modal
        modalSize="sm:max-w-md lg:max-w-xl"
        isOpen={open}
        onClose={onClose}
        title={messageContent}
      ></Modal>
    </>
  );
};

export default MessageModal;
