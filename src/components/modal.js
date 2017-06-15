import React, { Component } from 'react';
import {Button, Modal} from 'react-materialize';

export default class MaterializeModal extends Component {
  constructor(props) {
    super(props)
  }

  openModal() {
    $('#modal1').modal({
      dismissible: false
    });
    $('#modal1').modal('open');
  }

  render() {
    return (
      <div>
        <Modal
          header='Game Over'
          fixedFooter
          id='modal1'>
          <div className="center-align">
            <h4>Score: {this.props.score}</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field inline col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Username</label>
                    <button type="submit" className="waves-effect waves-light btn">Save</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
