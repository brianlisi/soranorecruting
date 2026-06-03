import { Router, Route, Switch } from "wouter";
import LandingPage from "@/pages/LandingPage";
import IntakePage from "@/pages/IntakePage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/not-found";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <Router base={base}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/intake" component={IntakePage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
