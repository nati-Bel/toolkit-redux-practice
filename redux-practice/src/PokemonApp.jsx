import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  // const {isLoading} = useSelector(state=>state.pokemons)
  // const {pokemons} = useSelector(state=>state.pokemons)
  // const {page} = useSelector(state=> state.pokemons)
  const {isLoading, pokemons, page} = useSelector(state => state.pokemons)

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading == true ? "True" : "False"}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
}
