import React, { useEffect } from "react";

import store from "./src/context/store";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";

import { scheduleDailyNotification } from "./src/utils/notifications";

export default function App() {
  useEffect(() => {

    scheduleDailyNotification();
  }, []);

  return (

    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
