import React, { useState } from "react";
import "./Desafio.css";

export default function DesafioDiaENoite() {
  const total = 5;

  // Respostas corretas
  const corretas = ["b", "b", "a", "a", "a"];

  const [pontuacao, setPontuacao] = useState(0);
  const [respondidas, setRespondidas] = useState(Array(total).fill(false));
  const [feedbacks, setFeedbacks] = useState(Array(total).fill(""));
  const [valores, setValores] = useState(Array(total).fill(""));

  const atualizarPlacar = () => `Pontuação: ${pontuacao} / ${total}`;

  const verificar = (num, alternativa) => {
    if (respondidas[num]) return;

    const novasRespondidas = [...respondidas];
    const novosFeedbacks = [...feedbacks];
    const novosValores = [...valores];

    novosValores[num] = alternativa;

    if (alternativa === corretas[num]) {
      novosFeedbacks[num] = "Correto!";
      setPontuacao((prev) => prev + 1);
    } else {
      novosFeedbacks[num] = "Resposta incorreta. (sem nova tentativa)";
    }

    novasRespondidas[num] = true;
    setValores(novosValores);
    setFeedbacks(novosFeedbacks);
    setRespondidas(novasRespondidas);
  };

  const verificarFim = respondidas.every((r) => r);
  const porcentagem = Math.round((pontuacao / total) * 100);
  let msg = "Precisa praticar mais...";
  if (porcentagem >= 85) msg = "Excelente!";
  else if (porcentagem >= 60) msg = "Bom trabalho!";

  // Lista de desafios
  const desafios = [
    {
      titulo: "Saudação do Dia",
      codigo: `Qual função retorna "Bom dia!" se a hora for menor que 12, e "Boa noite!" caso contrário?`,
      alternativas: {
        a: `def saudacao():
    if hora < 12:
        return "Boa noite!"
    else:
        return "Bom dia!"`,
        b: `def saudacao(hora):
    if hora < 12:
        return "Bom dia!"
    else:
        return "Boa noite!"`,
        c: `def saudacao():
    print("Bom dia!")`,
        d: `saudacao(hora):
    return "Bom dia!"`,
      },
    },
    {
      titulo: "Verificar se é Dia",
      codigo: `Qual função retorna True se for dia (entre 6h e 18h) e False se for noite?`,
      alternativas: {
        a: `def eh_dia(hora):
    return hora < 6`,
        b: `def eh_dia(hora):
    return hora >= 6 and hora < 18`,
        c: `def eh_dia(hora):
    print("Dia" if hora < 18)`,
        d: `def eh_dia():
    return hora >= 6`,
      },
    },
    {
      titulo: "Nascer do Sol",
      codigo: `O que será impresso ao executar o código abaixo?

def nascer_do_sol():
    return "O sol está nascendo!"

mensagem = nascer_do_sol()
print(mensagem)`,
      alternativas: {
        a: `O sol está nascendo!`,
        b: `mensagem`,
        c: `None`,
        d: `Erro: falta argumento`,
      },
    },
    {
      titulo: "Função com parâmetro",
      codigo: `Qual função imprime "É dia claro!" se for antes das 18h, e "Boa noite!" caso contrário?`,
      alternativas: {
        a: `def tempo(hora):
    if hora < 18:
        print("É dia claro!")
    else:
        print("Boa noite!")`,
        b: `def tempo():
    if hora < 18:
        return "É dia claro!"`,
        c: `tempo(hora):
    print("É dia claro!")`,
        d: `def tempo(hora):
    print("Boa tarde!")`,
      },
    },
    {
      titulo: "Função sem retorno",
      codigo: `O que acontece com o código abaixo?

def boa_noite():
    print("Boa noite!")

resultado = boa_noite()
print(resultado)`,
      alternativas: {
        a: `Boa noite!
None`,
        b: `None`,
        c: `Boa noite!
Boa noite!`,
        d: `Erro: função sem retorno`,
      },
    },
  ];

  return (
    <div className="pagina-desafios">
      <div className="scoreboard">{atualizarPlacar()}</div>

      <h1>Desafios — Funções: Dia e Noite</h1>
      <p className="subtitle">Escolha a alternativa correta! (Apenas uma tentativa)</p>

      {desafios.map((d, i) => (
        <div key={i} className="challenge-container">
          <h2>{`Desafio ${i + 1} — ${d.titulo}`}</h2>
          <pre>{d.codigo}</pre>

          <div className="alternativas">
            {Object.entries(d.alternativas).map(([letra, texto]) => (
              <button
                key={letra}
                className={`alternativa-btn ${
                  valores[i] === letra ? "selecionada" : ""
                } ${respondidas[i] ? "bloqueada" : ""}`}
                onClick={() => verificar(i, letra)}
                disabled={respondidas[i]}
              >
                <strong>{letra.toUpperCase()}.</strong>
                <pre>{texto}</pre>
              </button>
            ))}
          </div>

          <div
            className={`feedback ${
              feedbacks[i].includes("Correto") ? "correct" : "incorrect"
            }`}
          >
            {feedbacks[i]}
          </div>
        </div>
      ))}

      {verificarFim && (
        <div className="final-score">
          {msg} Sua nota final é {pontuacao}/{total} ({porcentagem}%).
        </div>
      )}
    </div>
  );
}
