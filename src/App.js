import './App.css';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
