import React, { useState } from 'react';
import axios from 'axios';

interface Dados {
    ID: string;
    DOC: string;
    ID_COR: string;
    SITUACAO: string;
}


const PesquisaCPF: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [dados, setDados] = useState<Dados[]>([]);
  const [erro, setErro] = useState<string | null>(null);


  const buscarDados = async () => {
    try {
      //const response = await axios.get(`http://localhost:3000/user/${cpf}`);
      ///idcorreios-cpf
      ///userID-CPF/
      //const response = await axios.get('http://localhost:3000/userID-CPF/');
      const response = await axios.get(`http://localhost:3000/userID-CPF/${cpf}`);
      //const response = await axios.get(`http://localhost:5173/idbusca/userID-CPF/${cpf}`);
      setDados(response.data);
      setErro(null);
      console.log(cpf)

    } catch (error) {
      setErro('Erro ao buscar dados. Verifique o CPF e tente novamente.');
      //setDados();
    }
  };

  return (
    <div>
      <h1>Buscar Dados por CPF</h1>
      <input
        type="text"
        name="name"
        id="send"
        value= {cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
      />

      <button onClick={buscarDados}>Buscar</button>

      {/*<label>{cpf}</label>}*/}
      
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {dados.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DOC</th>
              <th>ID_COR</th>
              <th>SITUAÇÃO</th>
             
            </tr>
          </thead>
          <tbody>
            {dados.map((dado) => (
              <tr key={dado.ID}>
                <td>{dado.ID}</td>
                <td>{dado.DOC}</td>
                <td>{dado.ID_COR}</td>
                <td>{dado.SITUACAO}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum dado encontrado.</p>
      )}
    </div>
  );
};


export default PesquisaCPF;




//import React, { useEffect, useState } from 'react';

/*
function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000/idcorreios-buscadados')
      .then(response => response.json())
      //.then(data => setMessage(data.message))
      .then(data => setMessage("Conectado ao servidor com sucesso"))
      .catch(error => console.error('Erro de conexão com Base de Dados:', error));
  }, []);
*/
/*
interface Data {
    ID: string;
    DOC: string;
    ID_COR: string;
    SITUACAO: string;
}

const MyComponent: React.FC = () => {
  const [id, setId] = useState<Data[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect para realizar a chamada quando o componente é montado
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000//idcorreios-buscaId/:id'); 
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Dados da Base de Dados ID Busca</h1>

      <form onSubmit={MyComponent}>
          <label htmlFor="id">Digite o CPF:</label>
          <input
            type="text"
            id=""
            value={id}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>

      <ul>
        {data.map((item) => (
          <li key={item.ID}>{item.DOC} - {item.ID_COR} - {item.SITUACAO}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
*/