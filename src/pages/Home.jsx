import React, { Component } from 'react';
import Header from '../components/Header';
import Result from '../components/Result';
import '../styles/Home.css';


export class Home extends Component {
    state= {
      clicks: 0,
      timer: 10,
      result: false,
    }

  cronometro = () => {
    this.setState({ timer: 10, clicks: 0 }, () => {
      const second = 1000;
      const idInterval = setInterval(() => {
        this.setState((prevState) => {
          return {
            result: false,
            timer: prevState.timer - 1,
          }
        }, () => {
          const  { timer } = this.state;
          if (timer === 0) {
            clearInterval(idInterval);
            this.setState({
              result: true,
            })
          }
        })
      }, second);
    })
  }

  componentDidMount = () => {
    this.cronometro();
  }
  
  handleBtn = () => {
    this.setState((prev) => ({ clicks: prev.clicks + 1 }))
  }

  render() {
    const { clicks, timer, result } = this.state;

    return (
      <div>
        <Header />
        {result ? <Result /> : (
          <>
        <p> { timer } </p>
        <p> { clicks }</p>
          <button
            type="button"
            onClick= { this.handleBtn }
          >
            <img 
              key='' 
              src='' 
              alt="cat" 
              className="cat-img"
            />
          </button>
       
          </>
)}
    <button onClick={this.cronometro}>Reiniciar</button>
      </div>
    )
  }
}

export default Home;
