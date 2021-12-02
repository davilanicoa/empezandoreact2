import Item from '../Item/Item'


export function ItemListContainer(){
    return (
        <div>
            <Item name="NewYork" price="180000" imgUrl='https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg'/>
            <Item name="LA" price="175000" imgUrl='https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?itok=lst_2_5d'/>
            <Item name="MexicoDF" price="85000" imgUrl='https://s3.amazonaws.com/blog.avt.prd/uploads/2019/09/19190230/portada3-880x580.jpg'/>
            <Item name="Orlando" price="150000" imgUrl='https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/433/433/75/vision-dam/digital/parks-platform/parks-global-assets/disney-world/0526ZP_1270MS_xak_R2-1x1.jpg?2021-08-05T12:44:38+00:00'/>
            <Item name="Miami" price="120000" imgUrl='https://cdn2.civitatis.com/estados-unidos/miami/guia/downtown-grid-m.jpg'/>
            <Item name="Cancun" price="100000" imgUrl='https://exp.cdn-hotels.com/hotels/1000000/430000/428600/428589/20aa3e91_z.jpg?impolicy=fcrop&w=500&h=333&q=medium'/>
            <Item name="LaHabana" price="75000" imgUrl='https://elviajero.elpais.com/elviajero/imagenes/2018/02/14/actualidad/1518611203_387380_1518620022_sumario_grande.jpg'/>
        </div>
    )

}


export default ItemListContainer;