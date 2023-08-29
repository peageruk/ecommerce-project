/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */

import { Route } from "react-router-dom";
import { useStore } from "zustand";


export default function PrivateRoute({ children, ...rest }) {
  //const { currentUser } = useAuth();
  const currentUser = useStore(state => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
