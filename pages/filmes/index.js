import Pagina from '@/componentes/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'

const index = (props) => {



    return (
        <>
            <Pagina titulo="filmes">
            {props.filmes.map(item => (
                <p>{item.title}</p>
        ))}



            </Pagina>
        </>
    )
}

export default index


export async function getServerSideProps(context) {


    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results

    return {
        props: { filmes }, // will be passed to the page component as props
    }
}