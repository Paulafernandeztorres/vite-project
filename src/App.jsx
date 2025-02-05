
import './App.css'
import Producto from './components/Producto'
import Productos from './components/Productos'

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
      <h2>Let s get started</h2>
      <p>It is working</p>
      <Productos productos={productos} />
    </>
  )
}

export default App
