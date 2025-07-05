export default function ResultadoIMC({ resultado }) {
  return (
    <section id="resultado">
      <div className="resultado-container">
        <div className="resultado-imc">
          <h2>seu iMC é:</h2>
          <p id="imcValue">{resultado.mostrarResultado ? resultado.imc : "Seu IMC será exibido aqui."}</p>
        </div>
        <div className="resultado-explicacao">
          <p>
            Como chegamos ao número à esquerda: o índice de massa corporal de um adulto é o seu peso em quilos (por
            exemplo, 80 kg), dividido por sua altura ao quadrado (vamos imaginar, 1,80 m x 1,80 m).
          </p>
        </div>
      </div>
    </section>
  )
}