export default function SilhuetaIMC({ imc, classificacao, idade, sexo }) {
    const getImagemSilhueta = () => {
        const imcNum = Number.parseFloat(imc)

        if (idade === "crianca") {
            if (imcNum < 18.5) {
                return sexo === "menino" ? "/images/crianca-menino-abaixo.png" : "/images/crianca-menina-abaixo.png"
            } else if (imcNum >= 18.6 && imcNum <= 24.9) {
                return sexo === "menino" ? "/images/crianca-menino-normal.png" : "/images/crianca-menina-normal.png"
            } else if (imcNum >= 25 && imcNum <= 29.9) {
                return sexo === "menino" ? "/images/crianca-menino-sobrepeso.png" : "/images/crianca-menina-sobrepeso.png"
            } else if (imcNum >= 30.0 && imcNum <= 34.9) {
                return sexo === "menino" ? "/images/crianca-menino-obesidade1.png" : "/images/crianca-menina-obesidade1.png"
            } else if (imcNum >= 35 && imcNum <= 39.9) {
                return sexo === "menino" ? "/images/crianca-menino-obesidade2.png" : "/images/crianca-menina-obesidade2.png"
            } else {
                return sexo === "menino" ? "/images/crianca-menino-obesidade3.png" : "/images/crianca-menina-obesidade3.png"
            }
        }

        if (imcNum < 18.5) {
            return sexo === "homem" ? "/images/adulto-homem-abaixo.png" : "/images/adulto-mulher-abaixo.png"
        } else if (imcNum >= 18.6 && imcNum <= 24.9) {
            return sexo === "homem" ? "/images/adulto-homem-normal.png" : "/images/adulto-mulher-normal.png"
        } else if (imcNum >= 25 && imcNum <= 29.9) {
            return sexo === "homem" ? "/images/adulto-homem-sobrepeso.png" : "/images/adulto-mulher-sobrepeso.png"
        } else if (imcNum >= 30.0 && imcNum <= 34.9) {
            return sexo === "homem" ? "/images/adulto-homem-obesidade1.png" : "/images/adulto-mulher-obesidade1.png"
        } else if (imcNum >= 35 && imcNum <= 39.9) {
            return sexo === "homem" ? "/images/adulto-homem-obesidade2.png" : "/images/adulto-mulher-obesidade2.png"
        } else {
            return sexo === "homem" ? "/images/adulto-homem-obesidade3.png" : "/images/adulto-mulher-obesidade3.png"
        }
    }

    const getFaixaIMC = () => {
        const imcNum = Number.parseFloat(imc)

        if (imcNum < 18.5) {
            return "Abaixo de 18,5"
        } else if (imcNum >= 18.6 && imcNum <= 24.9) {
            return "Entre 18,6 e 24,9"
        } else if (imcNum >= 25 && imcNum <= 29.9) {
            return "Entre 25,0 e 29,9"
        } else if (imcNum >= 30.0 && imcNum <= 34.9) {
            return "Entre 30,0 e 34,9"
        } else if (imcNum >= 35 && imcNum <= 39.9) {
            return "Entre 35,0 e 39,9"
        } else {
            return "Acima de 40,0"
        }
    }

    const getDescricao = () => {
        const imcNum = Number.parseFloat(imc)

        if (idade === "crianca") {
            if (imcNum < 18.5) {
                return "É importante consultar um pediatra para avaliar o desenvolvimento da criança e orientar sobre alimentação adequada."
            } else if (imcNum >= 18.6 && imcNum <= 24.9) {
                return "Parabéns! A criança está com peso adequado para a idade. Continue incentivando hábitos saudáveis."
            } else if (imcNum >= 25 && imcNum <= 29.9) {
                return "Atenção ao peso da criança. Consulte um pediatra para orientações sobre alimentação e atividades físicas."
            } else if (imcNum >= 30.0 && imcNum <= 34.9) {
                return "É importante buscar acompanhamento médico especializado para cuidar da saúde da criança."
            } else if (imcNum >= 35 && imcNum <= 39.9) {
                return "Procure urgentemente um pediatra para acompanhamento e orientação adequada."
            } else {
                return "É fundamental buscar acompanhamento médico imediato para cuidar da saúde da criança."
            }
        }

        if (imcNum < 18.5) {
            return "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. É preciso avaliar."
        } else if (imcNum >= 18.6 && imcNum <= 24.9) {
            return "Que bom que você está com o peso normal! É o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
        } else if (imcNum >= 25 && imcNum <= 29.9) {
            return "Fique atento à alimentação e pratique atividades físicas regularmente para manter a saúde."
        } else if (imcNum >= 30.0 && imcNum <= 34.9) {
            return "É importante buscar orientação médica para evitar complicações e melhorar a qualidade de vida."
        } else if (imcNum >= 35 && imcNum <= 39.9) {
            return "Redobre os cuidados com a alimentação e a saúde. Consulte um especialista para orientação adequada."
        } else {
            return "Procure um profissional de saúde para um acompanhamento adequado e personalizado."
        }
    }

    if (!imc) return null

    return (
        <div className="silhueta-container">
            <div className="silhueta-visual">
                <img
                    src={getImagemSilhueta()}
                    
                />
            </div>

            <div >
                <p>{getFaixaIMC()}</p>
                <h3>{classificacao}</h3>
                <p>{getDescricao()}</p>
            </div>
        </div>
    )
}