import AppRoutes from "./routes/AppRoutes";
import PageTransition from "./components/ui/PageTransition";

function App() {
  return (
    <PageTransition>
      <AppRoutes />
    </PageTransition>
  );
}

export default App;