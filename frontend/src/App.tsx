import "./App.css";
import { AssessmentProvider } from "contexts/assessment";
import { Navigation } from "navigation/navigation";
import { AuthProvider } from "contexts/auth";
import { NotificationsProvider } from "contexts/notifications";
import { ModalsProvider } from "contexts/modals";
import { memo } from "react";

const App = memo(() => {
  return (
    <NotificationsProvider>
      <ModalsProvider>
        <AuthProvider>
          <AssessmentProvider>
            <Navigation />
          </AssessmentProvider>
        </AuthProvider>
      </ModalsProvider>
    </NotificationsProvider>
  );
});

export default App;
