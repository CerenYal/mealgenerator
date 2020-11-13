import React from "react";
import ReactPlayer from "react-player";
import Button from "./button";
import Header from "./header";


export default class FetchRandomUser extends React.Component{
  state= {
    loading: true,
    meal: null,
    tabType: 'general'
  };

  async componentDidMount(){


    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch (url);
    const data = await response.json();
    this.setState({meal: data.meals[0], loading: false})
    console.log(data.meals);
  }

  toggleMe=(value)=>{
    this.setState({
        tabType: value
    })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    
    }

    if (!this.state.meal) {
      return <div>no person :(</div>;
    }

    return (
      <div className="box1">
        <Header></Header>
        <Button ></Button>
        {/* <div style={{color: "white"}}>{this.state.person.name.first}</div> */}
        <div className="head1" >{this.state.meal.strMeal}</div>
        <img className="image" src={this.state.meal.strMealThumb}/>
        <br/>
        <button className="button2" onClick={()=>this.toggleMe('content')}>More</button>
        <div >
                {
                    this.state.tabType==='content' && 
                    <div className="content">
                        <br />
                        <h1>Instruction</h1>
                        {this.state.meal.strInstructions}
                        <br/>
                        <br/>
                        <br/>
                        <h2>See The Video:</h2>
                        <ReactPlayer url={this.state.meal.strYoutube} />
                    </div>
                }
            </div>
      </div>
    )
  }
}
