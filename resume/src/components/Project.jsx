import React from 'react';
import './css/Project.css';
/**
 *
 * @return {Component}  card
 */
export default function Project() {
  return (
    <div className="CardContainer">
      <div className="Card">
        <a href={this.props.link}>
          <div className="CardDisplay">
            <i class={this.props.icon}></i>
            <h2>{this.props.title}</h2>
          </div>
          <div className="CardHover">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <h3>Click to see Project</h3>
          </div>
        </a>
        <div className="CardBorder"></div>
      </div>
    </div>
  );
}
