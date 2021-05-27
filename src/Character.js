import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import Skeleton from './components/Skeleton/skeleton'

const getCharacter = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      image
    }
  }
`

export default function Character() {
  const { id } = useParams()
  const { loading, data, error } = useQuery(getCharacter, { variables: { id }} )
  if (loading) return (<Skeleton/>)
  if (error) return `Error: ${error}`
  
  return (
    <div className="App container mt-5">
        <div className="row justify-content-center">
            <div className="card">
                <div className="content">
                    <img src={data.character.image} alt={`Imagen de ${data.character.name}`}/>
                    <h1>{data.character.name}</h1>
                    <p>{data.character.status}</p>
                </div>
            </div>    
        </div>
    </div>
  )
}