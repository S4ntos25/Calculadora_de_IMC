import { useState } from "react"
import SeletorOpcoes from "./Selector"

export default function FormularioIMC({ onCalcular }) {
  const [idade, setIdade] = useState("adulto")
  const [sexo, setSexo] = useState("homem")
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")

  const opcoesIdade = [
    { valor: "adulto", label: "Adulto" },
    { valor: "crianca", label: "Criança" },
  ]

  const opcoesSexo =
    idade === "crianca"
      ? [
          { valor: "menino", label: "Menino" },
          { valor: "menina", label: "Menina" },
        ]
      : [
          { valor: "homem", label: "Homem" },
          { valor: "mulher", label: "Mulher" },
        ]

  const handleIdadeChange = (novaIdade) => {
    setIdade(novaIdade)
    if (novaIdade === "crianca") {
      setSexo("menino") 
    } else {
      setSexo("homem")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onCalcular(peso, altura, idade, sexo)
  }

  return (
    <main>
      <div className="container">
        <div className="form-group">
          <SeletorOpcoes
            titulo="Selecione"
            opcoes={opcoesIdade}
            valorSelecionado={idade}
            onChange={handleIdadeChange}
            name="idade"
          />

          <SeletorOpcoes titulo="Sexo" opcoes={opcoesSexo} valorSelecionado={sexo} onChange={setSexo} name="sexo" />
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            type="number"
            id="peso"
            required
            placeholder="Digite o peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <label htmlFor="altura">Altura (m):</label>
          <input
            type="number"
            step="0.01"
            id="altura"
            required
            placeholder="Digite a altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <button type="submit" className="imc-button">
            Calcular IMC
          </button>
        </form>
      </div>
    </main>
  )
}