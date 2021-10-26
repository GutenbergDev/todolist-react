import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 400px;
  height: auto;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
`;

const Div2 = styled.div`
    width: 300px;
`;

const Button = styled.button`
    height: 35px;
`;

const Remover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    margin-left: auto;
    background-color: red;
    color: #fff;
`;

function Box(props) { 
  const [texto, setTexto] = React.useState();
  const [tasks, setTasks] = React.useState([]);

  function handleSubmite(e) {
    e.preventDefault();
    setTasks([
      ...tasks, 
      texto,
    ]);
    setTexto('');
  }

  return (
    <Div>
      <form onSubmit={handleSubmite}>
        <Input 
          type='text'
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <Button>Adicionar</Button>
      </form>
      <Div2>
        <ul>
          {tasks.map((task, index) => 
          <li key={task}>{task}
            <Remover onClick={() => {
              setTasks(tasks.filter((t, taskIndex) => taskIndex !== index ));
            }}>X</Remover>
          </li>)}
        </ul>
      </Div2>
    </Div>
  )
}

export default Box;
