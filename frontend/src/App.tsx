import "./App.css";
import { AssessmentProvider } from "contexts/assessment";
import { Navigation } from "navigation/navigation";
import { AuthProvider } from "contexts/auth";
import { NotificationsProvider } from "contexts/notifications";
import { ModalsProvider } from "contexts/modals";

function App() {
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
}

export default App;
