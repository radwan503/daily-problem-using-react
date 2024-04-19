import { useState, useEffect } from "react";
import { Modal, Button } from "antd";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    localStorage.setItem("modalShown", "true");
    setIsModalOpen(false);
  };

  const clearLocal = () => {
    localStorage.removeItem("modalShown");
  }
  useEffect(() => {
    const isModalShown = localStorage.getItem("modalShown");
    if (!isModalShown) {
      showModal();
    }
  }, []);
  return (
    <>
      <p>
        Problem:
        <br />
        Implement a popup modal that appears the first time a user visits a
        website? After the user closes the modal, it should not reappear upon
        page refresh, but it should reappear when the browser tab is closed and
        revisited
      </p>
      <p>
        Solution Approch:
        <br />
        utilize the browser's local storage or session storage to store
        a flag indicating whether the modal has been shown before
      </p>
      <ul>
        <li>
          Create a Modal Component: Create a modal component using Ant Design
          Modal. This component will be responsible for displaying the modal
          content.
        </li>
        <li>
          Use Local Storage: Check whether a flag exists in the local storage
          indicating whether the modal has been shown before.
        </li>
        <li>
          Display Modal Conditionally: Based on the flag in the local storage,
          decide whether to display the modal or not.
        </li>
        <li>
          Set Flag in Local Storage: When the user closes the modal, set a flag
          in the local storage to indicate that the modal has been shown.
        </li>
        <li>
          Handle Page Refresh: Ensure that the modal is not shown again on page
          refresh by checking the flag in the local storage.
        </li>
        <li>
          Handle Tab Close and Revisit: Since local storage persists even when
          the browser tab is closed and reopened, the modal won't show again
          unless the user clears their browser storage.
        </li>
      </ul>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="https://img.freepik.com/premium-vector/new-arrival-label-with-megaphone-modern-red-banner-white-background-new-collection-label-your-online-offline-shop-new-arrival-product-concept-vector-illustration_476325-1630.jpg"
          alt="banner"
        />
      </Modal>
      <Button type="primary" style={{ marginLeft: "5px" }} onClick={clearLocal}>CLear LocalHost</Button>
    </>
  );
}

export default App;
