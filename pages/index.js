import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>

        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>)
}

export default Home;


/* import {useState} from 'react';

function Home() {
  return (
    <div>
      <h3>Contador</h3>
      <Contador />
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
} */