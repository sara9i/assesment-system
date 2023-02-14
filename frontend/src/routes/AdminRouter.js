import { Route, Switch } from "react-router-dom";

import React from "react";
import Login from "../components/Login/Login";
import ReleaseNotesPage from "../components/ReleaseNotes/ReleaseNotesPage";
import AssessmentPage from "../pages/Assessments/AssessmentPage";
import AssessmentsPage from "../pages/Assessments/AssessmentsPage";
import PrivateRoute from "./PrivateRoute";

// const EmailTemplates = lazy(() =>
//   import("../pages/EmailTemplatesPage/EmailTemplatesContainer")
// );

const AdminRouter = () => (
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
    <PrivateRoute exact path="/">
      <ReleaseNotesPage />
    </PrivateRoute>
    <PrivateRoute exact path="/assessments">
      <AssessmentsPage />
    </PrivateRoute>
    <PrivateRoute path="/assessments/:id">
      <AssessmentPage />
    </PrivateRoute>
  </Switch>
);

export default AdminRouter;
