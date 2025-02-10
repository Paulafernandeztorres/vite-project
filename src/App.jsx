
import './App.css'
import Productos from './components/Productos/Productos'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import NuevoProducto from './components/Productos/NuevoProducto.jsx'

function App() {

  const productos = [
    {
      id: Math.random().toString(),
      nombre: 'Pantalla táctil',
      precio: 34.7,
      fecha: new Date()
    },
    {
      id: Math.random().toString(),
      nombre: 'Ratón inalámbrico',
      precio: 34.8,
      fecha: new Date()
    },
    {
      id: Math.random().toString(),
      nombre: 'Teclado',
      precio: 22.6,
      fecha: new Date()
    },
    {
      id: Math.random().toString(),
      nombre: 'Pantalla 2',
      precio: 56.6,
      fecha: new Date()
    },
  ]

  return (
    <>
      <Header />
      <NuevoProducto />
      <Productos productos={productos} />
      <Footer />
    </>
  )
}

export default App
