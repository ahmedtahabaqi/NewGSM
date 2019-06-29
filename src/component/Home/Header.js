import React from 'react';
import { InputGroup } from 'react-bootstrap';
import Context from '../Context';
import axios from 'axios';
import host from '../Host';
import ContentHome from './content';
import FooterHome from './Footer';
import NavbarAllPage from '../common/navbarAllPage';
import Autosuggest from 'react-autosuggest';


var languages = [];


  // Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : languages.filter(lang =>
      lang.title.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.title;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.title}
    </div>
  );
  


class HeaderHome extends React.Component {
    constructor() {
        super()
        this.state = {
            rating: 3.5,
            category: [],
            value: '',
            suggestions: []
        }

    }
    componentDidMount() {

        axios.get(host + `api/course/Category`, { headers: {} })
            .then(response => { 
                this.setState({ category: response.data }) 
            })
            .catch((error) => { console.log('error ' + error) })


            axios.get(host + `api/course`, { headers: {} })
            .then(response => {
                console.log(response.data)
                languages=response.data
            //   this.setState({
            //     course: response.data
            //   })
    
    
            })
            .catch((error) => { console.log('error ' + error) })


    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });

        
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
onEnter(){
  var input = document.getElementById("SearchInputGroup");
input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {
   
    event.preventDefault();
   
    document.getElementById("imgSearchIcon").click();
  }
});
}
    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
         
          value,
          onChange: this.onChange,
          id:'searchHome1',
          placeholder:'Search',
          
        };
        
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div >
                            <NavbarAllPage />
                            <div id='continer_header'>
                                <img id='homeImage' src={require('../../assets/homeimage.jpg')} alt="img" />
                                <div id='searchHome'>
                                    <InputGroup id="SearchInputGroup" onChange={()=>this.onEnter()}>
                                      <div style={{backgroundColor:'#fff',position:'absolute',zIndex:18,paddingLeft:30}}>
                                    <Autosuggest 
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    getSuggestionValue={getSuggestionValue}
                                    renderSuggestion={renderSuggestion}
                                    inputProps={inputProps}
                                />
                                </div>
                                       {/* <FormControl id='searchHome1' placeholder='Search' aria-describedby="basic-addon1" /> */}
                                       <img height="25" style={{marginLeft:170,zIndex:19,marginTop:3,cursor:'pointer'}} src={require('../../assets/search.png')} alt="img" id='imgSearchIcon'  onClick={()=>{
                                           window.location.href=`/allcourses?category=all&name=${this.state.value}`
                                       }}/>
                                    </InputGroup>

                                </div>
                                <div id='gifHomePageCOntiner'>
                                <img id='gifhomeImage' src={require('../../assets/gif done.gif')} alt="img" />
                                </div>

                            </div>


                            <ContentHome />
                            <FooterHome />

                        </div>
                    )
                }}
            </Context.Consumer>
        );
    }
}

export default HeaderHome;
