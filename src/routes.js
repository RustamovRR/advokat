import { lazy } from "react";

const UserManagePage = lazy(() =>
  import("./pages/UserManagement/UserManagePage")
);
const RegistryPage = lazy(() => import("./pages/Registry/RegistryPage"));
const RegisterStrPage = lazy(() =>
  import("./pages/RegisterStructure/RegisterStrPage")
);
const RequestPage = lazy(() => import("./pages/Request/RequestPage"));
const CalcPage = lazy(() => import("./pages/Calculation/CalcPage"));
const MonitoringPage = lazy(() => import("./pages/Monitoring/MonitoringPage"));
const DataManagePage = lazy(() =>
  import("./pages/DataManagement/DataManagePage")
);
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const HistoryPage = lazy(() => import("./pages/History/HistoryPage"));

export const routes = [
  {
    path: "/tab",
    exact: true,
    component: UserManagePage,
  },

  {
    path: "/tab/registry",
    component: RegistryPage,
    exact: true,
  },
  {
    path: "/tab/registerStr",
    component: RegisterStrPage,
    exact: true,
  },

  {
    path: "/tab/request",
    component: RequestPage,
    exact: true,
  },
  {
    path: "/tab/calc",
    component: CalcPage,
    exact: true,
  },
  {
    path: "/tab/monitoring",
    component: MonitoringPage,
    exact: true,
  },
  {
    path: "/tab/datamanage",
    component: DataManagePage,
    exact: true,
  },
  {
    path: "/tab/history",
    component: HistoryPage,
    exact: true,
  },
  {
    path: "*",
    component: NotFoundPage,
    exact: false,
  },
];
