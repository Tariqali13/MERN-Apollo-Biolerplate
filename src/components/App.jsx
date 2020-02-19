import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { SampleComponent } from "./index";
const App = ({ history }) => {
  const subDomain = localStorage.getItem("sub_domain");
  return (
    // <ScrollToTop>
    <Switch>
      <Route path="/" exact component={SampleComponent} />
    </Switch>
    // </ScrollToTop>
  );
};

export default withRouter(App);
