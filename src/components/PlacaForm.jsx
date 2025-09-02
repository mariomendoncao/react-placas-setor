import { useState } from 'react'
import './PlacaForm.css'

const PlacaForm = ({ data, onChange }) => {
  const handleInputChange = (field, value) => {
    onChange({
      ...data,
      [field]: value
    })
  }

  return (
    <div className="placa-form">
      <h2>Dados da Placa</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="codigoPlaca">Código da Placa:</label>
          <input
            type="text"
            id="codigoPlaca"
            value={data.codigoPlaca}
            onChange={(e) => handleInputChange('codigoPlaca', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cor">Cor da Placa:</label>
          <select
            id="cor"
            value={data.cor}
            onChange={(e) => handleInputChange('cor', e.target.value)}
            required
          >
            <option value="vermelha">Vermelha</option>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
          </select>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="ctr">CTR:</label>
          <input
            type="text"
            id="ctr"
            value={data.ctr}
            onChange={(e) => handleInputChange('ctr', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="regiao">Região:</label>
          <select
            id="regiao"
            value={data.regiao}
            onChange={(e) => handleInputChange('regiao', e.target.value)}
            required
          >
            <option value="REGIÃO LESTE">REGIÃO LESTE</option>
            <option value="REGIÃO NORTE">REGIÃO NORTE</option>
            <option value="REGIÃO SUL">REGIÃO SUL</option>
            <option value="REGIÃO OESTE">REGIÃO OESTE</option>
          </select>
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="freq1">Frequência 1:</label>
          <input
            type="text"
            id="freq1"
            value={data.freq1}
            onChange={(e) => handleInputChange('freq1', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="freq2">Frequência 2:</label>
          <input
            type="text"
            id="freq2"
            value={data.freq2}
            onChange={(e) => handleInputChange('freq2', e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nrefSemAss">NREF SEM ASS:</label>
          <input
            type="text"
            id="nrefSemAss"
            value={data.nrefSemAss}
            onChange={(e) => handleInputChange('nrefSemAss', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="nrefComAss">NREF COM ASS:</label>
          <input
            type="text"
            id="nrefComAss"
            value={data.nrefComAss}
            onChange={(e) => handleInputChange('nrefComAss', e.target.value)}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="npicoSemAss">NPICO SEM ASS:</label>
          <input
            type="text"
            id="npicoSemAss"
            value={data.npicoSemAss}
            onChange={(e) => handleInputChange('npicoSemAss', e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="npicoComAss">NPICO COM ASS:</label>
          <input
            type="text"
            id="npicoComAss"
            value={data.npicoComAss}
            onChange={(e) => handleInputChange('npicoComAss', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  )
}

export default PlacaForm