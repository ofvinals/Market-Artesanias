import './App.css';
import Categorias from './components/Categorias';
import Descuentos from './components/Descuentos';

function App() {
  return (
    <>
      <div className='px-4 md:px-24'>
        <Categorias />
        <Descuentos />
      </div>
    </>
  );
}

export default App;
