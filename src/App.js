// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/auth/login";
import { LandingPage } from "./pages/home";
import { RegisterTalent } from "./pages/auth/registertalent";
import { OptionLogin } from "./pages/optionlogin";
import { OptionRegister } from "./pages/optionregister";
import { RegisterRecruiter } from "./pages/auth/registerrecruiter";
import { HomeLogged } from "./pages/homeLogged";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { ProfileTalent } from "./pages/profiletalent";
import { Hire } from "./pages/hire";
import { Chat } from "./pages/chat";
import { ProfileRecruiter } from "./pages/profileRecruiter";
import { EditProfileTalent } from "./pages/editProfileTalent";
import { EditProfileRecruiter } from "./pages/editProfileRecruiter";

function App() {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/optionlogin" element={<OptionLogin />} />
            <Route path="/optionregister" element={<OptionRegister />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register/talent" element={<RegisterTalent />} />
            <Route
              path="/auth/register/recruiter"
              element={<RegisterRecruiter />}
            />
            <Route path="/home" element={<HomeLogged />} />
            <Route path="/profile/talent/:userId" element={<ProfileTalent />} />
            <Route path="/profile/talent/hire/:userId" element={<Hire />} />
            <Route
              path="/profile/recruiter/:userId"
              element={<ProfileRecruiter />}
            />
            <Route
              path="/profile/talent/edit/:userId"
              element={<EditProfileTalent />}
            />
            <Route
              path="/profile/recruiter/edit/:userId"
              element={<EditProfileRecruiter />}
            />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
