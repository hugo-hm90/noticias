import {useLoaderData} from '@remix-run/react';
import {getEntretenimiento} from '~/models/negocios.server';
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
  const entretenimiento = await getEntretenimiento();
  return entretenimiento;

}


function Entretenimiento() {
  const entretenimientos = useLoaderData();
  // console.log(negocios);
  return (
    <main className='contenedor'>
      <h2 className='heading'> Entretenimiento </h2> 
      {entretenimientos?.length && (
       <div className='negocios-grid'>
          {entretenimientos.map( entretenimiento => (
            <Negocio
              key= {entretenimiento?.url}
              noticia= {entretenimiento}
            />
              
            
          )
          
          )}
       </div> 
      )}
    </main>
  )
}

export default Entretenimiento