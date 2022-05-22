import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Banner.css";
import "../styles/Row.css";
import "../styles/Thumbnail.css";
import "../styles/Login.css";
import "../styles/Modal.css";
import { AuthProvider } from "../hooks/useAuth";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
