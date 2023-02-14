import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login/Login";
import ReleaseNotesPage from "../components/ReleaseNotes/ReleaseNotesPage";
import Assessmentpage from "../pages/Assessments/Assessmentpage";
import PrivateRoute from "./PrivateRoute";

// const EmailTemplates = lazy(() =>
//   import("../pages/EmailTemplatesPage/EmailTemplatesContainer")
// );

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/">
        <ReleaseNotesPage />
      </PrivateRoute>
      <PrivateRoute path="/assessments/:id">
        <Assessmentpage />
      </PrivateRoute>
    </Switch>
  );
};

export default AppRouter;
