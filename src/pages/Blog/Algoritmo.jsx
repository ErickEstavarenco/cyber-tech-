import React, { useState } from "react";
import "./Algoritmo.css";

const Algoritmo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    // Usando Number() garante que a soma será matemática, e não concatenação de strings.
    setResultado(Number(a) + Number(b));
  };

  return (
    <div className="algoritmo">
      <h1 className="ritmo">O que é um Algoritmo?</h1>
      
      {/* Container Principal do Conceito e Propriedades (Similar ao 'pense' mas com ajustes de estilo) */}
      <div className="pode"> 
        
        {/* Descrição Principal do Algoritmo */}
        <p>
          Um algoritmo é uma **sequência finita de ações executáveis** que visam obter uma solução para um determinado tipo de problema.
        </p>

        {/* --- Blocos de Propriedades (Lógico, Finitivo, Eficiência) --- */}
        <div className="properties-container">
          
          <div className="property-box">
            <div className="property-icon">💡</div> {/* Icone de Lógico */}
            <h3 className="property-title">Lógico</h3>
            <p className="property-description">Os passos são lógicos e fazem sentido sequencialmente.</p>
          </div>

          <div className="property-box">
            <div className="property-icon">⏳</div> {/* Icone de Finitivo */}
            <h3 className="property-title">Finitivo</h3>
            <p className="property-description">O algoritmo deve sempre terminar após um número finito de passos.</p>
          </div>

          <div className="property-box">
            <div className="property-icon">⚡</div> {/* Icone de Eficiência */}
            <h3 className="property-title">Eficiência</h3>
            <p className="property-description">Resolver o problema usando a menor quantidade de recursos possível.</p>
          </div>
        </div>

        <h2 className="secao-titulo">Visualizando o Fluxo</h2>

        <p>
          Um fluxograma representa visualmente os passos de um algoritmo. Ajuda a entender a lógica e o fluxo de controle de um processo.
        </p>

        {/* Fluxograma (A imagem na imagem é o fluxo de soma) */}
        <div className="flowchart-image-container">
          {/* O fluxograma do "início, ler A, ler B, Soma=A+B, Escrever Soma" na imagem screen.png é o que está aqui */}
          {/* Como você não forneceu a imagem real, o nome é uma suposição. */}
          <img
            src="/fluxograma.png" 
            alt="Fluxograma do algoritmo de soma"
            className="flowchart-image"
          />
          
        </div>
        
        <h2 className="section-title">Exemplo em Python</h2>
        
        {/* Container para o código Python - Importante para a estilização do bloco de código */}
        <div className="code-example-container">
            {/* O código real será estilizado pelo CSS para ter o fundo escuro e o botão 'Copiar' */}
            <pre className="python-code-block">
{`def somar_numeros(a, b):
    # Esta função recebe dois números e retorna sua soma
    return a + b

# Exemplos de uso do algoritmo
numero1 = 5
numero2 = 10
soma = somar_numeros(numero1, numero2)
# print(f"A soma é: {soma}")`}
            </pre>
           
        </div>
        
        {/* --- Teste Você Mesmo (Formulário) --- */}
        <h2 className="section-title">Teste Você Mesmo</h2>
        
        <div className="test-form-container">
            <div className="input-group">
                <label>
                    Valor A
                    <input
                        type="number"
                        placeholder="Digite um número"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                </label>
                <label>
                    Valor B
                    <input
                        type="number"
                        placeholder="Digite outro número"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                </label>
            </div>
            
            <button onClick={somar} className="sum-button">Somar</button>

            <div className="result-box">
                <p>Resultado:</p>
                {resultado !== null && (
                    <span className="result-value">
                        {resultado}
                    </span>
                )}
            </div>
        </div>
        
        {/* Links de navegação (Opcional, se você quiser manter) */}
        <div className="navigation-links">
            <a href="/blog" className="back-link">
                ← Voltar
            </a>
            <a href="/variavel" className="back-link">
                Próximo →
            </a>
        </div>
      </div>
    </div>
  );
};

// Se você estiver usando TypeScript ou precisar que a função esteja disponível fora, mantenha esta linha:
// export default Algoritmo;

export default Algoritmo;

