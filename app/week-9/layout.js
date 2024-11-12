// app/week-9/layout.js
import { AuthContextProvider } from "./shopping-list/_utils/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
