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
  // 1. Hook de Estado para controlar a ampliação
    const [isAmpliada, setIsAmpliada] = useState(false);

    // 2. Função para alternar o estado ao clicar
    const handleClick = () => {
        setIsAmpliada(!isAmpliada);
    };

    // 3. Aplica a classe 'ampliada' se o estado for true
    const imageClasses = `flowchart-image ${isAmpliada ? 'ampliada' : ''}`;
 
    
   
  return (
    <div className="algoritmo">
      <h1 className="ritmo">O que é um Algoritmo?</h1>
      
      {/* Container Principal do Conceito e Propriedades (Similar ao 'pense' mas com ajustes de estilo) */}
      <div className="pode"> 
        
        {/* Descrição Principal do Algoritmo */}
        <p>
          Um algoritmo é uma <strong>sequência finita de ações executáveis</strong> que visam obter uma solução para um determinado tipo de problema.
        </p>

        {/* --- Blocos de Propriedades (Lógico, Finitivo, Eficiência) --- */}
        <div className="properties-container">
          
          <div className="property-box">
          < img  src="/lampada.png"  className="property-icon"></img> {/* Icone de Lógico */}
            <h3 className="property-title">Lógico</h3>
            <p className="property-description">Os passos são lógicos e fazem sentido sequencialmente.</p>
          </div>

          <div className="property-box">
           < img  src="/ampulheta.png"  className="property-icon"></img>{/* Icone de Finitivo */}
            <h3 className="property-title">Finitivo</h3>
            <p className="property-description">O algoritmo deve sempre terminar após um número finito de passos.</p>
          </div>

          <div className="property-box">
           < img  src="/luz.png"  className="property-icon"></img>{/* Icone de Finitivo */}

            <h3 className="property-title">Eficiência</h3>
            <p className="property-description">Resolver o problema usando a menor quantidade de recursos possível.</p>
          </div>
        </div>

        <h2 className="secao-titulo">Visualizando o Fluxo</h2>

        <p>
          Um fluxograma representa visualmente os passos de um algoritmo. Ajuda a entender a lógica e o fluxo de controle de um processo.
        </p>

        <div className="flowchart-image-container">
            <img
                src="/fluxograma.png" 
                alt="Fluxograma do algoritmo de soma"
                // Aplica classes dinâmicas e o evento de clique
                className={imageClasses} 
                onClick={handleClick} 
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

