import "./App.css";
import { AssessmentProvider } from "contexts/assessment";
import { Navigation } from "navigation/navigation";

function App() {
  return (
    <AssessmentProvider>
      <Navigation />
    </AssessmentProvider>
  );
}

export default App;
