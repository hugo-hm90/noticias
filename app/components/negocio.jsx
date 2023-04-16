import {Link} from '@remix-run/react'



function Negocio({noticia}) {
    const  {name, image,url, _type, description , datePublished}= noticia;

    // const imagen = image.contentUrl;
    // console.log(imagen);
    // console.log(image?.thumbnail.contentUrl);
    var opciones = { year: 'numeric', month: 'short', day: 'numeric' };
    var fecha = new Date(datePublished)
      .toLocaleDateString('es',opciones)
      .replace(/ /g,'-')
      .replace(/-([a-z])/, function (x) {return '-' + x[1].toUpperCase()});
    
  return (
    <div className="negocio">
        
        <div className="contenido">
            <img src={image?.thumbnail.contentUrl} alt={`Imagen no disponible`} />
            <h3 className='titulo'>{name}</h3>
            <p className="descripcion">{description}</p>
            <Link className='enlace' to={url} target="_blank"> Ver más </Link>
            <p className="publicado">{fecha}</p>
            

        </div>

    </div>
  )
}

export default Negocio