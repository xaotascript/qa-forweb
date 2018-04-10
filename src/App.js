import React, { Component } from 'react';
import './App.css';
import data from './qa.json';
import Article from './Article';
import Filter from './Filter';

class App extends Component {
  state = {
    filter: '',
  }

  onFilterChange(newValue) {
    this.setState({filter: newValue});
  }

  getFilteredData() {
    if (!this.state.filter) {
      return data;
    }

    if (this.state.filter.length < 2) {
      return data;
    }

    return data.filter(x => x.question.toString().includes(this.state.filter) || x.answer.toString().includes(this.state.filter));
  }

  render() {
    const data = this.getFilteredData();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Что было бы, если бы <a href="//t.me/forwebchat">Чат For Web</a> имел свой QA?</h1>
        </header>
        <Filter onChange={this.onFilterChange.bind(this)}/>
        <section>
          {data.map(({question, answer}) => <Article key={answer+question} question={question} answer={answer} />)}
        </section>
      </div>
    );
  }
}

export default App;
