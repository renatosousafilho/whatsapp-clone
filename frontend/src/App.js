import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './pages/Chat';

import { ChatScreenProvider } from './contexts/chat-screen';
import { ContactsDataProvider } from './contexts/contacts';

function App() {
  return (
    <ChatScreenProvider>
      <ContactsDataProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Chat} />
          </Switch>
        </Router>
      </ContactsDataProvider>
    </ChatScreenProvider>
  );
}
  
export default App;
  