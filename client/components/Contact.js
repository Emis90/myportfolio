import React from "react"
import {matching} from 'matchingev-one'
import Gelatofinder from "./projects/gelatofinder";




class Contact extends React.Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div className="contact">
      <h1>Enida Vezelaj</h1>
      <h3>Software engineer | NY</h3>

      <div id="icons">
      <a href='https://github.com/Emis90'>
      <img width="50" height="50" src="/images/github.png"/>
      </a>
      <a href="https://www.linkedin.com/in/enida-vezelaj/">
      <img width="50" height="50" src="/images/linked.png"/>
      </a>
      <a href="mailto:enida.vezelaj@gmail.com">
      <img width="50" height="50" src="/images/email-icon.png"/>
      </a>
      </div>
      </div>


    )
  }

}
export default Contact
