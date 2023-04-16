import {useLoaderData} from '@remix-run/react';
import {getNegocios} from '~/models/negocios.server';
import Negocio from '~/components/negocio';
import styles from '~/styles/noticias.css';

export function links() {
  return[
    {
      rel:'stylesheet',
      href: styles

    }
  ]
}


export async function loader(){  
  const negocios = await getNegocios();
  return negocios;

}

function Negocios() {
  const negocios = useLoaderData();
  // console.log(negocios);
  return (
    <main className='contenedor'>
      <h2 className='heading'> Negocios </h2> 
      {negocios?.length && (
       <div className='negocios-grid'>
          {negocios.map( negocio => (
            <Negocio
              key= {negocio?.url}
              noticia= {negocio}
            />
              
            
          )
          
          )}
       </div> 
      )}
    </main>
  )
}

export default Negocios