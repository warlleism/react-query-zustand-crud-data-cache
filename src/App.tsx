
import { QueryClientProvider, QueryClient } from "react-query"
import { MyRoutes } from "./routes/Routes";

const client = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={client}>
      <MyRoutes />
    </QueryClientProvider>
  )
}

export default App
