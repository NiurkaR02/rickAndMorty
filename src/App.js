import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import Skeleton from './components/Skeleton/skeleton'
const getCharacters = gql`
query getCharacters {
  characters {
    results {
      id
      name
      status
      image
    }
  }
}
`

function App() {
  const { loading, data, error } = useQuery(getCharacters, { fetchPolicy: "network-only" })
  if (loading) return (<Skeleton />)
  if (error) return `Error: ${error}`

  return (
    <div className="App container">
      {data.characters.results.map(post => (
        <div className="row justify-content-center mt-5" key={post.id}>
          <div className="card">
            <div className="content">
              <img src={post.image} alt={`Imagen de ${post.name}`}/>
              <Link to={`character/${post.id}`}>
                <h1 className="m-2">{post.name}</h1>
              </Link>
              <p>{post.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
