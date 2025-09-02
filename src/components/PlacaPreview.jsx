import { jsPDF } from 'jspdf'
import './PlacaPreview.css'
import logoPng from '../assets/logo.png'

const PlacaPreview = ({ data }) => {
  const gerarPDF = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [140, 100]
    })
    
    // Definir cores
    const cores = {
      vermelha: [196, 30, 58],
      verde: [34, 139, 34],
      azul: [30, 58, 138]
    }
    
    // Remover borda externa - comentado
    // doc.setLineWidth(1)
    // doc.rect(2, 2, 136, 96)
    
    // Lado esquerdo colorido
    doc.setFillColor(...cores[data.cor])
    doc.rect(0, 0, 50, 100, 'F')
    
    // Texto lado esquerdo - centralizado com fontes aumentadas
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont(undefined, 'bold')
    doc.text(data.codigoPlaca, 25, 20, { align: 'center' })
    
    doc.setFontSize(20)
    doc.text(data.ctr, 25, 38, { align: 'center' })
    
    doc.setFontSize(12)
    doc.setFont(undefined, 'normal')
    doc.text(data.regiao, 25, 48, { align: 'center' })
    
    // Logo PNG - aumentado e centralizado
    try {
      doc.addImage(logoPng, 'PNG', 8, 58, 34, 34)
    } catch (error) {
      // Fallback se não conseguir carregar a imagem
      doc.setFillColor(255, 255, 255)
      doc.circle(25, 75, 12, 'F')
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(6)
      doc.text('CPOEA-CE', 25, 79, { align: 'center' })
    }
    
    // Lado direito
    doc.setTextColor(0, 0, 0)
    
    // Frequências - tamanho aumentado
    doc.setFontSize(24)
    doc.setFont(undefined, 'bold')
    const corFreq = cores[data.cor]
    doc.setTextColor(...corFreq)
    doc.text(data.freq1, 90, 30, { align: 'center' })
    doc.text(data.freq2, 90, 45, { align: 'center' })
    
    // Tabela
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(8)
    doc.setFont(undefined, 'bold')
    
    // Cabeçalho da tabela - cor dinâmica e expandido para 3 colunas
    doc.setFillColor(...corFreq)
    doc.setDrawColor(...corFreq)
    doc.setLineWidth(0.8)
    doc.rect(58, 60, 62, 8, 'FD')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text('SEM ASS', 82.5, 65, { align: 'center' })
    doc.text('COM ASS', 107.5, 65, { align: 'center' })
    
    // Linhas da tabela - bordas e texto com cor da placa
    doc.setTextColor(...corFreq)
    doc.setDrawColor(...corFreq)
    doc.setLineWidth(0.8)
    
    // Linha NREF
    doc.rect(58, 68, 12, 8, 'D')
    doc.rect(70, 68, 25, 8, 'D')
    doc.rect(95, 68, 25, 8, 'D')
    
    doc.setFontSize(10)
    doc.setFont(undefined, 'bold')
    doc.text('NREF', 64, 73, { align: 'center' })
    doc.setFont(undefined, 'normal')
    doc.text(data.nrefSemAss, 82.5, 73, { align: 'center' })
    doc.text(data.nrefComAss, 107.5, 73, { align: 'center' })
    
    // Linha NPICO
    doc.rect(58, 76, 12, 8, 'D')
    doc.rect(70, 76, 25, 8, 'D')
    doc.rect(95, 76, 25, 8, 'D')
    
    doc.setFont(undefined, 'bold')
    doc.text('NPICO', 64, 81, { align: 'center' })
    doc.setFont(undefined, 'normal')
    doc.text(data.npicoSemAss, 82.5, 81, { align: 'center' })
    doc.text(data.npicoComAss, 107.5, 81, { align: 'center' })
    
    // Salvar PDF
    doc.save(`placa-${data.codigoPlaca.replace('-', '')}.pdf`)
  }

  return (
    <div className="placa-preview-container">
      <div className="preview-header">
        <h2>Preview da Placa</h2>
        <button className="btn-gerar-pdf" onClick={gerarPDF}>
          Gerar PDF
        </button>
      </div>
      
      <div className={`placa-preview cor-${data.cor}`}>
        <div className="lado-esquerdo">
          <div className="info-placa">
            <div className="codigo-placa">{data.codigoPlaca}</div>
            <div className="ctr">{data.ctr}</div>
            <div className="regiao">{data.regiao}</div>
          </div>
          <div className="logo-placeholder">
            <img src={logoPng} alt="CPOEA-CE Logo" className="logo-image" />
          </div>
        </div>
        
        <div className="lado-direito">
          <div className="frequencias">
            <div className="freq">{data.freq1}</div>
            <div className="freq">{data.freq2}</div>
          </div>
          
          <table className="tabela">
            <thead>
              <tr>
                <th colSpan="3" className="header-expandido">
                  <div className="header-content">
                    <span>SEM ASS</span>
                    <span>COM ASS</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="label-row">NREF</td>
                <td>{data.nrefSemAss}</td>
                <td>{data.nrefComAss}</td>
              </tr>
              <tr>
                <td className="label-row">NPICO</td>
                <td>{data.npicoSemAss}</td>
                <td>{data.npicoComAss}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PlacaPreview