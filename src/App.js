import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "./globalStyles/wrappers";
import { Loading } from "./globalStyles/Icons";
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const CreatePage = lazy(() =>
  import("./pages/RegisterStructure/CreatePage/CreatePage")
);
const Main = lazy(() => import("./main"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));

function App() {
  return (
    <Container fluid>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/create" component={CreatePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/tab" component={Main} />
          <Route path="/notfound" component={NotFoundPage} />
          <Route path="/" exact>
            <Redirect to="/tab" />
          </Route>
          <Route path="*" exact>
            <Redirect to="/notfound" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
