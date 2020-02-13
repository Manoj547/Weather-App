import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
class Navbar extends Component{
    render(){

        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
                <form class="form-inline my-12 my-lg-0" onSubmit={(e)=>this.props.handleSubmit(e)}>
                    <input class="form-control mr-sm-2" type="search" id="city" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

export default Navbar