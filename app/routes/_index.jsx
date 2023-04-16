import {useLoaderData} from '@remix-run/react';
import { getEconomiaDigital } from '~/models/negocios.server';
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
  const economiaDigital = await getEconomiaDigital();
  return economiaDigital;

}

function Index() {
  const economiaDigitales = useLoaderData();
  // console.log(negocios);
  return (
    <main className='contenedor'>
      <h2 className='heading'> Economia Digital </h2> 
      {economiaDigitales?.length && (
       <div className='negocios-grid'>
          {economiaDigitales.map( economiaDigital => (
            <Negocio
              key= {economiaDigital?.url}
              noticia= {economiaDigital}
            />
              
            
          )
          
          )}
       </div> 
      )}
    </main>
  )
}

export default Index