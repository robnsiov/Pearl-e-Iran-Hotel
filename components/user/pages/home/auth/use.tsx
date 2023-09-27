import { useEffect, useState } from "react";

const useAuth = () => {
  const [showModal, setShowModal] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (showModal) {
      timeOut = setTimeout(() => {
        setShowForm(true);
      }, 100);
    }
    () => clearTimeout(timeOut);
  }, [showModal]);

  let modalTimeout: NodeJS.Timeout;
  const closeModal = () => {
    clearTimeout(modalTimeout);
    setShowForm(false);
    modalTimeout = setTimeout(() => {
      setShowModal(false);
    }, 100);
  };

  return { closeModal, showModal, showForm };
};

export default useAuth;
