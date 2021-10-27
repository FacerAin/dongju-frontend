import { FC } from "react";
import TextsPage from "pages/TextsPage";
import TextContentPage from "pages/TextContentPage";
import TextInputFormPage from "pages/TextInputFormPage";
import TextUpdateFormPage from "pages/TextUpdateFormPage";
import TextsCheckPage from "pages/TextsCheckPage"
import { Route } from "react-router-dom";
import "antd/dist/antd.css";

const App: FC = () => {
  return (
    <>
      <Route path="/" exact component={TextsPage} />
      <Route path="/text/:id" component={TextContentPage} />
      <Route path="/updatetext/:id" component={TextUpdateFormPage} />
      <Route path="/newtext" component={TextInputFormPage} />
	  <Route path="/check" component={TextsCheckPage} />
    </>
  );
};

export default App;
