import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Display extends Component{
    render(){
        return(
            <div>
                <form class="form-horizontal">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="time">Time</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.date} disabled/>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="control-label col-sm-2" for="temp_min">Min Temp</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.tempMin} disabled/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="temp_max">Max Temp</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.tempMax} disabled/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="humidity">Humidity</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.humidity} disabled/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="weather">Weather</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.weather} disabled/>
                    </div>
                </div>

                <div class="form-group">
                    <label class="control-label col-sm-2" for="description">description</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value={this.props.description} disabled/>
                    </div>
                </div>

            </form>
            </div>
        )
    }
}

export default Display