import { useEffect } from "react";
import { Router, Route, Switch, useLocation } from "wouter";
import LandingPage from "@/pages/LandingPage";
import IntakePage from "@/pages/IntakePage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/not-found";
import { trackPageView } from "@/lib/analytics";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function AnalyticsTracker() {
  const [location] = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location]);
  return null;
}

function App() {
  return (
    <Router base={base}>
      <AnalyticsTracker />
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
