
import './App.css'
import Productos from './components/productos/Productos'
import Header from './components/ui/header';
import Footer from './components/ui/footer';

function App() {

  const productos = [
    {
      nombre: 'Pantalla táctil',
      precio: 34.7,
      fecha: new Date()
    },
    {
      nombre: 'Ratón inalámbrico',
      precio: 34.8,
      fecha: new Date()
    },
    {
      nombre: 'Teclado',
      precio: 22.6,
      fecha: new Date()
    }
  ]

  return (
    <>
      <Header />
      <h2>Let's get started</h2>
      <p>It is working</p>
      <Productos productos={productos} />
      <Footer />
    </>
  );
}

export default App;
