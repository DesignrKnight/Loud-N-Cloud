import React, { useState } from "react";
import { DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import RenderMap from "./../maps/vaccineMap";
import "./../../assets/css/literacyMap.css";

const initialState = { currentState: {} };
class Dashboard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.BUTTONS = [
      { type: "success", label: "Vaccine Priority" },
      { type: "danger", label: "States" },

    ];
    this.handleClick = this.handleClick.bind(this);
    this.renderDropdownButton = this.renderDropdownButton.bind(this);
  }
  handleClick(d) {
    this.state = initialState;
    this.forceUpdate();
    let allNodes = d.target.parentElement.parentElement.parentElement.querySelectorAll(
      "a"
    );
    allNodes.forEach((y, index) => {
      y.classList.remove("active");
    });
    let allNodesInDropdown = d.target.parentElement.parentElement.querySelectorAll(
      "a"
    );
    allNodesInDropdown.forEach((y) => {
      y.classList.remove("active");
    });
    if (d.target.id == "Population") {
      if (d.target.textContent.toLowerCase() == "medium") {
        let currentState = this.state;
        delete currentState.population;
        this.setState(currentState);
      } else {
        this.setState({
          currentState: { population: d.target.textContent.toLowerCase() },
        });
      }
      d.target.classList.add("active");
    }

    if (d.target.id == "States") {
      if (d.target.textContent.toLowerCase() == "medium") {
        let currentState = this.state;
        delete currentState.active;
        this.setState(currentState);
      } else {
        let currentState = this.state;
        currentState.currentState.state=d.target.textContent.toLowerCase()
        this.setState(currentState);
      }
      d.target.classList.add("active");
    }

    if (d.target.id == "Vaccine Priority") {
      if (d.target.textContent.toLowerCase() == "medium") {
        let currentState = this.state;
        delete currentState.vaccine;
        this.setState(currentState);
      } else {
        let currentState = this.state;
        currentState.currentState.vaccine=d.target.textContent.toLowerCase(); 
      }
      d.target.classList.add("active");
    }
  }
  renderDropdownButton(title, i) {
    return (
      <DropdownButton
        as={ButtonGroup}
        variant={i}
        title={title}
        key={i}
        id={`dropdowna`}
      >
        <Dropdown.Item
          eventKey="2"
          id={title}
          onClick={this.handleClick}
          active
        >
          Default
        </Dropdown.Item>
        <Dropdown.Item eventKey="1" id={title} onClick={this.handleClick}>
          High
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" id={title} onClick={this.handleClick}>
          Low
        </Dropdown.Item>
      </DropdownButton>
    );
  }
  renderDropdownButton2(title, i) {
       
    return (
      <DropdownButton
        as={ButtonGroup}
        variant={i}
        title={title}
        key={i}
        id={`dropdowna`}
      >
                        <Dropdown.Item
          eventKey="1"id={title}
          onClick={this.handleClick}
          active
        >All States</Dropdown.Item>
                <Dropdown.Item
          eventKey="2"id={title}
          onClick={this.handleClick}
           
        >andhra pradesh</Dropdown.Item>
        <Dropdown.Item
          eventKey="3"id={title}
          onClick={this.handleClick}
           
        >arunachal pradesh</Dropdown.Item>
        <Dropdown.Item
          eventKey="4"id={title}
          onClick={this.handleClick}
           
        >assam</Dropdown.Item>
        <Dropdown.Item
          eventKey="5"id={title}
          onClick={this.handleClick}
           
        >bihar</Dropdown.Item>
        <Dropdown.Item
          eventKey="6"id={title}
          onClick={this.handleClick}
           
        >chandigarh</Dropdown.Item>
        <Dropdown.Item
          eventKey="7"id={title}
          onClick={this.handleClick}
           
        >chhattisgarh</Dropdown.Item>
        <Dropdown.Item
          eventKey="8"id={title}
          onClick={this.handleClick}
           
        >delhi</Dropdown.Item>
        <Dropdown.Item
          eventKey="9"id={title}
          onClick={this.handleClick}
           
        >goa</Dropdown.Item>
                <Dropdown.Item
          eventKey="10"id={title}
          onClick={this.handleClick}
           
        >gujarat</Dropdown.Item>
        <Dropdown.Item
          eventKey="11"id={title}
          onClick={this.handleClick}
           
        >haryana</Dropdown.Item>
        <Dropdown.Item
          eventKey="12"id={title}
          onClick={this.handleClick}
           
        >himachal pradesh</Dropdown.Item>
        <Dropdown.Item
          eventKey="13"id={title}
          onClick={this.handleClick}
           
        >jammu and kashmir</Dropdown.Item>
        <Dropdown.Item
          eventKey="14"id={title}
          onClick={this.handleClick}
           
        >jharkhand</Dropdown.Item>
        <Dropdown.Item
          eventKey="15"id={title}
          onClick={this.handleClick}
           
        >karnataka</Dropdown.Item>
        <Dropdown.Item
          eventKey="16"id={title}
          onClick={this.handleClick}
           
        >kerala</Dropdown.Item>
        <Dropdown.Item
          eventKey="17"id={title}
          onClick={this.handleClick}
           
        >ladakh</Dropdown.Item>
        <Dropdown.Item
          eventKey="18"id={title}
          onClick={this.handleClick}
           
        >madhya pradesh</Dropdown.Item>
        <Dropdown.Item
          eventKey="19"id={title}
          onClick={this.handleClick}
           
        >maharashtra</Dropdown.Item>
        <Dropdown.Item
          eventKey="20"id={title}
          onClick={this.handleClick}
           
        >manipur</Dropdown.Item>
        <Dropdown.Item
          eventKey="21"id={title}
          onClick={this.handleClick}
           
        >meghalaya</Dropdown.Item>
        <Dropdown.Item
          eventKey="22"id={title}
          onClick={this.handleClick}
           
        >nagaland</Dropdown.Item>
        <Dropdown.Item
          eventKey="23"id={title}
          onClick={this.handleClick}
           
        >odisha</Dropdown.Item>
        <Dropdown.Item
          eventKey="24"id={title}
          onClick={this.handleClick}
           
        >puducherry</Dropdown.Item>
        <Dropdown.Item
          eventKey="25"id={title}
          onClick={this.handleClick}
           
        >punjab</Dropdown.Item>
        <Dropdown.Item
          eventKey="26"id={title}
          onClick={this.handleClick}
           
        >rajasthan</Dropdown.Item>
        <Dropdown.Item
          eventKey="27"id={title}
          onClick={this.handleClick}
           
        >sikkim</Dropdown.Item>
        <Dropdown.Item
          eventKey="28"id={title}
          onClick={this.handleClick}
           
        >tamil nadu</Dropdown.Item>
        <Dropdown.Item
          eventKey="29"id={title}
          onClick={this.handleClick}
           
        >telangana</Dropdown.Item>
        <Dropdown.Item
          eventKey="30"id={title}
          onClick={this.handleClick}
           
        >tripura</Dropdown.Item>
        <Dropdown.Item
          eventKey="31"id={title}
          onClick={this.handleClick}
           
        >uttar pradesh</Dropdown.Item>
        <Dropdown.Item
          eventKey="32"id={title}
          onClick={this.handleClick}
           
        >uttarakhand</Dropdown.Item>
        <Dropdown.Item
          eventKey="33"id={title}
          onClick={this.handleClick}
           
        >west bengal</Dropdown.Item>
      </DropdownButton>
    );
  }
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <RenderMap state={this.state} />
            </div>
            <div className="col-md-4">
              {
                this.renderDropdownButton("Vaccine Priority", "success")}
                              {
                this.renderDropdownButton2("States", "danger")}
            </div>
            {/* <div className="col-md-8">
            <SalesChart />
          </div> */}
          </div>
          {/* <div className="row">
          <div className="col-md-6">
            <UserBehaviorChart />
          </div>
          <div className="col-md-6">
            <Tasks />
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}
export default Dashboard2;
