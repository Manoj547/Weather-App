import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar'
import Display from './components/display'
class App extends Component{
	constructor(){
		super()
		this.state={
			tempMax:0,
			tempMin:0,
			humidity:0,
			weather:'',
			description:'',
			icon:'',
			date:'',
			display:false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	async handleSubmit(e){
		e.preventDefault();
		console.log(e)

		let city = e.target.city.value
		console.log(city)



		const data = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=e3d263690d982d00b5b19b7f95d42c06`
		  ).then(res => res.json())
		  
		  
		  console.log(data)
		  
		  if (data.cod === '200') {
			  let d = new Date()
			this.setState({
				tempMin : data.list[0].main.temp_min,
				tempMax : data.list[0].main.temp_max,
				humidity : data.list[0].main.humidity,
				weather : data.list[1].weather[0].main,
				description : data.list[1].weather[0].description,
				icon : data.list[1].weather[0].icon,
				date : d,
				display:true
			})
			
		  }
		  else{
			  this.setState({
				  display:false
			  })
		  }

	}



	render(){
		if(this.state.display){
			return(
				<div>
					<NavBar handleSubmit={this.handleSubmit} />
					<Display tempMax={this.state.tempMax} tempMin={this.state.tempMin} humidity={this.state.humidity} weather={this.state.weather} description={this.state.description} icon={this.state.icon} date={this.state.date}/>
				</div>
				)	
		}
		else
			return(<NavBar handleSubmit={this.handleSubmit}/>) 
	}
}

export default App