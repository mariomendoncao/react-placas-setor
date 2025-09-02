import { useState } from 'react'
import PlacaForm from './components/PlacaForm'
import PlacaPreview from './components/PlacaPreview'
import './App.css'

function App() {
  const [placaData, setPlacaData] = useState({
    codigoPlaca: 'T-08',
    cor: 'vermelha',
    ctr: 'CTR - 03',
    regiao: 'REGIÃO LESTE',
    freq1: '119.375',
    freq2: '134.650',
    nrefSemAss: '5',
    nrefComAss: '6',
    npicoSemAss: '6',
    npicoComAss: '8'
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gerador de Placas de Setor</h1>
      </header>
      
      <div className="app-content">
        <div className="form-section">
          <PlacaForm 
            data={placaData} 
            onChange={setPlacaData} 
          />
        </div>
        
        <div className="preview-section">
          <PlacaPreview data={placaData} />
        </div>
      </div>
    </div>
  )
}

export default App
