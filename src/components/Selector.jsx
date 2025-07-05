export default function SeletorOpcoes({ titulo, opcoes, valorSelecionado, onChange, name }) {
    return (
        <div className="select-group">
            <p>
                <strong>{titulo}:</strong>
            </p>
            <div className="form-flex">
                {opcoes.map((opcao) => (
                    <label key={opcao.valor}>
                        <input
                            type="radio"
                            name={name}
                            value={opcao.valor}
                            checked={valorSelecionado === opcao.valor}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        <span className={valorSelecionado === opcao.valor ? "checked" : "unchecked"}>{opcao.label}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}