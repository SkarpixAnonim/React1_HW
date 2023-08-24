import React, { useState } from "react";
import "./index.css"

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      surname: "",
      phoneNumber: "",
      birthday: {
        year: "",
        month: "",
        day: "",
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    if (name === "year" || name === "month" || name === "day") {
      this.setState({ 
        birthday: { ...this.state.birthday, [name]: value }
      })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleSubmit(event) {
    alert(`Здраствуйте ${this.state.name} ${this.state.surname} спосибо что за регистрировались и оставили свой номер(${this.state.phoneNumber}), ваша дата рождения ${this.state.birthday.day}/${this.state.birthday.month}/${this.state.birthday.year}`)
    console.log(`Здраствуйте ${this.state.name} ${this.state.surname} спосибо что за регистрировались и оставили свой номер(${this.state.phoneNumber}), ваша дата рождения ${this.state.birthday.day}/${this.state.birthday.month}/${this.state.birthday.year}`);
    event.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <label>
            Регистрация:
            <input 
              type="text" 
              placeholder="name" 
              value={this.state.value} 
              name="name" 
              onChange={this.handleChange}/>
            <input 
              type="text" 
              placeholder="surname" 
              value={this.state.value} 
              name="surname" 
              onChange={this.handleChange}/>
            <input 
              type="number" 
              placeholder="phoneNumber" 
              value={this.state.value} 
              name="phoneNumber" 
              onChange={this.handleChange}/>
          </label>          
          <div>
            <label>
              Дата рождения:
              <input 
                type="number" 
                placeholder="day" 
                value={this.state.value} 
                name="day" 
                onChange={this.handleChange}/>
              <input 
                type="text"
                placeholder="month" 
                value={this.state.value} 
                name="month" 
                onChange={this.handleChange}/>
              <input 
                type="number" 
                placeholder="year" 
                value={this.state.value} 
                name="year" 
                onChange={this.handleChange}/>
            </label>
          </div>
          <input type="submit" value="Отправить"/>
        </form>
      </div>
    )
  }
}


export default RegisterForm