import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Importe os componentes
import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'; // <-- ADICIONE ESTA LINHA
import Cadastro from './pages/Cadastro/Cadastro';
// import Footer from './components/Footer'; 

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Fundamentos de Algoritmos e Programação
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Algoritmo</h2>
        <p className="mb-2">
          Um algoritmo é uma maneira de resolver problemas ou realizar tarefas por meio
          de uma sequência de passos lógicos e organizados. Ele mostra o que deve ser
          feito para alcançar um resultado.
        </p>
        <pre className="bg-white p-3 rounded-lg shadow">
          Pegue dois números (A e B).
          {"\n"}Some os dois números.
          {"\n"}Mostre o resultado.
        </pre>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`A = 5
B = 3
soma = A + B
print(soma)`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Variáveis</h2>
        <p>
          Uma variável é um “espaço” na memória do computador onde você pode armazenar
          dados, como números ou textos. O valor pode mudar ao longo do tempo.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`nome = "João"
idade = 25`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Tipos de Dados</h2>
        <ul className="list-disc pl-6">
          <li>Inteiros: <code>10, -3, 0</code></li>
          <li>Pontos flutuantes: <code>3.14, -1.0</code></li>
          <li>Strings: <code>"Olá, Mundo!"</code></li>
          <li>Booleanos: <code>True, False</code></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Operadores</h2>
        <p>
          Operadores são símbolos usados para realizar ações com os dados, como cálculos
          e comparações.
        </p>
        <ul className="list-disc pl-6">
          <li>Aritméticos: +, -, *, /, //, %</li>
          <li>Comparação: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li>Lógicos: and, or, not</li>
        </ul>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`a = 10
b = 5
c = a + b  # c agora é 15`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Condicionais</h2>
        <p>
          Permitem que o computador tome decisões. Se uma condição for verdadeira, um
          bloco de código é executado.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`idade = 18
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Laços de Repetição (Loops)</h2>
        <p>
          Permitem repetir uma parte do código várias vezes.
        </p>
        <p><strong>For:</strong> usado quando se sabe quantas vezes repetir.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`for i in range(5):
    print(i)`}
        </pre>
        <p className="mt-2"><strong>While:</strong> usado quando a repetição depende de uma condição.</p>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`contador = 0
while contador < 5:
    print(contador)
    contador += 1`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Funções</h2>
        <p>
          São blocos de código criados para realizar uma tarefa específica, facilitando a
          reutilização.
        </p>
        <pre className="bg-gray-900 text-white p-3 rounded-lg shadow mt-2">
          {`def saudacao(nome):
    print(f"Olá, {nome}!")

saudacao("João")`}
        </pre>
      </section>
    </div>
  );
}
