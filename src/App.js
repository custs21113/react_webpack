import AppContent  from '@/components/appContent'
import { BrowserRouter } from 'react-router-dom';
import '@/app.scss';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContent></AppContent>
      </div>
    </BrowserRouter>
  );
}

export default App;
