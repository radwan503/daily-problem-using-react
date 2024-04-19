Problem:
Implement a popup modal that appears the first time a user visits a website? After the user closes the modal, it should not reappear upon page refresh, but it should reappear when the browser tab is closed and revisited

Solution Approch:
utilize the browser's local storage or session storage to store a flag indicating whether the modal has been shown before

Create a Modal Component: Create a modal component using Ant Design Modal. This component will be responsible for displaying the modal content.
Use Local Storage: Check whether a flag exists in the local storage indicating whether the modal has been shown before.
Display Modal Conditionally: Based on the flag in the local storage, decide whether to display the modal or not.
Set Flag in Local Storage: When the user closes the modal, set a flag in the local storage to indicate that the modal has been shown.
Handle Page Refresh: Ensure that the modal is not shown again on page refresh by checking the flag in the local storage.
Handle Tab Close and Revisit: Since local storage persists even when the browser tab is closed and reopened, the modal won't show again unless the user clears their browser storage.