import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import SearchPage from "./Pages/SearchPage";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;
