import renderPage from "../../../pages/renderPage";

function handleLinkClick(accountNumber) {
  return (e) => {
    e.preventDefault();
    history.pushState(null, "", `/account/${accountNumber}/history`);
    renderPage();
  };
}

export default handleLinkClick;
