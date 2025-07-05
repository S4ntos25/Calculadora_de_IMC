import SilhuetaIMC from "./imageIMC"

export default function ClassificacaoIMC({ resultado }) {
  return (
    <section className="classificacaoSection">
      <div className="imcClass">
        <h2>Entenda o seu resultado:</h2>

        {resultado.mostrarResultado ? (
          <SilhuetaIMC
            imc={resultado.imc}
            classificacao={resultado.titulo}
            idade={resultado.idade}
            sexo={resultado.sexo}
          />
        ) : (
          <h3 id="classificacao">Calcule seu IMC para ver a classificação</h3>
        )}
      </div>
    </section>
  )
}