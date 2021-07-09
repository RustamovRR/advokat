import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Header, SideBar } from "./components/shared";
import { Loading } from "./globalStyles/Icons";
import { Container, Flex, Opacity, Spacing } from "./globalStyles/wrappers";
import { routes } from "./routes";
function Main() {
  return (
    <Opacity>
      <Flex>
        <SideBar />
        <Container rigth>
          <Spacing margin="0 48px">
            <Header />
            <Suspense fallback={<Loading />}>
              <Switch>
                {routes.map(({ path, exact, component }, key) => (
                  <Route {...{ key, path, exact, component }} />
                ))}
              </Switch>
            </Suspense>
          </Spacing>
        </Container>
      </Flex>
    </Opacity>
  );
}

export default Main;
