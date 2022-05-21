import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Banner.css";
import "../styles/Row.css";
import "../styles/Thumbnail.css";
import "../styles/Login.css";
import { AuthProvider } from "../hooks/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
