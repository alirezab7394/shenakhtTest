import TasKProvider from "../Providers/TasksProvider";
import TaskContainer from "../TaskContainer";
import React from "react";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/:id?">
        <TasKProvider>
          <TaskContainer />
        </TasKProvider>
      </Route>
    </Switch>
  );
}
