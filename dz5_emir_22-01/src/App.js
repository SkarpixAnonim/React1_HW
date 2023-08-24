import React from 'react';

class PokemonName extends React.Component {
    state = {
        pokemon: [],
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(data => this.setState({state.pokemon: data}))
    }

    render() {
        return(
            <div>
                <h1>Pokemon List</h1>
                <ul>
                    {this.state.pokemon.map(pokemon => (
                        <li>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PokemonName


// class ExampleComponent extends React.Component {
//   state = {
//     data: [],
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

//   handleResize = () => {
//     console.log('Window resized');
//   }

//   render() {
//     return (
//       <div>
//         ...
//       </div>
//     );1
//   }
// }

// export default ExampleComponent




