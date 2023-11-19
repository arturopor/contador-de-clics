import "../hojas-de-estilo/Boton.css";

function Boton({texto, esDeClic, clicHandler}) {

  return (
    <button className={esDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={clicHandler}>
      {texto}
    </button>
  )
}

export default Boton;