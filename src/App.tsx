import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";

import { Card, Classes } from "@blueprintjs/core";
import { UserList } from "./components/UserList";
import { useUsers } from "./hooks/useUsers";

const App = () => {
  const { data, isLoading } = useUsers();

  return (
    <div className={`App ${Classes.DARK}`}>
      <h1>UI Screening 01</h1>
      <Card>
        <UserList isLoading={isLoading} users={data} />
      </Card>
    </div>
  );
};

export default App;
