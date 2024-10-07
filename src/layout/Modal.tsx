import React from "react";
import { Modal } from "antd";

interface ShowPopUpProps {
  success?: boolean;
  error?: string;
  visible: boolean; // Pass visible state from parent
  onClose: () => void; // Function to close the modal
}

const ShowPopUp: React.FC<ShowPopUpProps> = ({
  success,
  error,
  visible,
  onClose,
}) => {
  return (
    <Modal
      title={success ? "Success" : "Error"}
      open={visible} // Control visibility through the visible prop
      onOk={onClose} // Trigger onClose when user clicks "Ok"
      onCancel={onClose} // Trigger onClose when user clicks "Cancel"
    >
      {success && (
        <p className="text-green-500">User registered successfully</p>
      )}
      {error && (
        <p className="text-red-500">Error registering user. Error: {error}</p>
      )}
    </Modal>
  );
};

export default ShowPopUp;
