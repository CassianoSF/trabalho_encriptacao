import React, { Component } from 'react';
import { Form, Input, Row, Col, Button, Card } from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;

var CryptoJS = require("crypto-js");

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      aes_input_encriptar: '',
      aes_output_encriptar: '',
      aes_input_decriptar: '',
      aes_output_decriptar: '',
      aes_chave: 'Chave123',
      aes_tempo_encriptar: 0,
      aes_tempo_decriptar: 0,

      des_input_encriptar: '',
      des_output_encriptar: '',
      des_input_decriptar: '',
      des_output_decriptar: '',
      des_chave: 'Chave123',
      des_tempo_encriptar: 0,
      des_tempo_decriptar: 0,
    }

    this.onChange = this.onChange.bind(this)
    this.onEncriptarAES = this.onEncriptarAES.bind(this)
    this.onDesencriptarAES = this.onDesencriptarAES.bind(this)
    this.onEncriptarDES = this.onEncriptarDES.bind(this)
    this.onDesencriptarDES = this.onDesencriptarDES.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onEncriptarAES(){
    let texto = this.state.aes_input_encriptar
    let chave = this.state.aes_chave;
    let start = window.performance.now()
    let aes_output_encriptar = CryptoJS.AES.encrypt(texto, chave).toString();
    let finish = window.performance.now()
    let aes_tempo_encriptar = finish - start
    this.setState({
      aes_output_encriptar: aes_output_encriptar,
      aes_tempo_encriptar: aes_tempo_encriptar,
    })
  }

  onDesencriptarAES(){
    let texto = this.state.aes_input_decriptar
    let chave = this.state.aes_chave;
    let start = window.performance.now()
    let bytes  = CryptoJS.AES.decrypt(texto, chave);
    let aes_output_decriptar = bytes.toString(CryptoJS.enc.Utf8);
    let finish = window.performance.now()
    let aes_tempo_decriptar = finish - start
    this.setState({
      aes_output_decriptar: aes_output_decriptar,
      aes_tempo_decriptar: aes_tempo_decriptar,
    })
  }


  onEncriptarDES(){
    let texto = this.state.des_input_encriptar
    let chave = this.state.des_chave;
    let start = window.performance.now()
    let des_output_encriptar = CryptoJS.DES.encrypt(texto, chave).toString();
    let finish = window.performance.now()
    let des_tempo_encriptar = finish - start
    this.setState({
      des_output_encriptar: des_output_encriptar,
      des_tempo_encriptar: des_tempo_encriptar
    })
  }

  onDesencriptarDES(){
    let texto = this.state.des_input_decriptar
    let chave = this.state.des_chave;
    let start = window.performance.now()
    let bytes  = CryptoJS.DES.decrypt(texto, chave);
    let des_output_decriptar = bytes.toString(CryptoJS.enc.Utf8);
    let finish = window.performance.now()
    let des_tempo_decriptar = finish - start
    this.setState({
      des_output_decriptar: des_output_decriptar,
      des_tempo_decriptar: des_tempo_decriptar

    })
  }

  render() {
    return (
      <div style={{backgroundImage: 'url(background.jpeg)'}}>
        <div style={{backgroundColor: "rgba(0,0,0,0.9)"}}>
          <h3 style={{marginLeft: '4vw', fontFamily: 'Courier New', color: "white"}}>Cassiano S Franco</h3>
          <h3 style={{marginLeft: '4vw', fontFamily: 'Courier New', color: "white"}}>Eduardo Ferrarezi</h3>
          <h3 style={{marginLeft: '4vw', fontFamily: 'Courier New', color: "white"}}>Fabio Jr Rossi</h3>
        </div>
        <div style={{paddingLeft: '2vw', paddingRight: '2vw', paddingBottom: '2vw'}}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
              <Card style={{margin: '2vw'}} title="AES">
                <Card style={{margin: '2vw'}}>
                  <Form>
                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '100%'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="aes_chave" 
                          id="aes_chave"
                          value={this.state.aes_chave}
                          placeholder="Chave" />
                      </InputGroup>
                    </FormItem>

                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '25vw, marginTop: 20'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="aes_input_encriptar" 
                          id="aes_input_encriptar" 
                          placeholder="Encriptar texto" />
                            <Button style={{marginTop: 20}} type='primary' onClick={this.onEncriptarAES}>Encriptar</Button>
                      </InputGroup>
                    </FormItem>

                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '25vw, marginTop: 20'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="aes_input_decriptar" 
                          id="aes_input_decriptar" 
                          placeholder="Desencriptar texto" />
                            <Button style={{marginTop: 20}} type='primary' onClick={this.onDesencriptarAES}>Desencriptar</Button>
                      </InputGroup>

                    </FormItem>
                  </Form>
                </Card>
                <Card style={{wordWrap: 'break-word', margin: '2vw'}} title={`Texto Encriptado - ${this.state.aes_tempo_encriptar.toFixed(5)}ms`}>
                  {this.state.aes_output_encriptar}
                </Card>
                <Card style={{wordWrap: 'break-word', margin: '2vw'}} title={`Texto Desencriptado - ${this.state.aes_tempo_decriptar.toFixed(5)}ms`}>
                  {this.state.aes_output_decriptar}
                </Card>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} >
              <Card style={{margin: '2vw'}} title="DES">
                <Card style={{margin: '2vw'}}>
                  <Form>
                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '100%'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="des_chave" 
                          id="des_chave"
                          value={this.state.des_chave}
                          placeholder="Chave" />
                      </InputGroup>
                    </FormItem>

                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '25vw, marginTop: 20'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="des_input_encriptar" 
                          id="des_input_encriptar" 
                          placeholder="Encriptar texto" />
                            <Button style={{marginTop: 20}} type='primary' onClick={this.onEncriptarDES}>Encriptar</Button>
                      </InputGroup>
                    </FormItem>

                    <FormItem>
                      <InputGroup>
                        <Input 
                          style={{width: '25vw, marginTop: 20'}} 
                          onChange={this.onChange} 
                          type="text" 
                          name="des_input_decriptar" 
                          id="des_input_decriptar" 
                          placeholder="Desencriptar texto" />
                            <Button style={{marginTop: 20}} type='primary' onClick={this.onDesencriptarDES}>Desencriptar</Button>
                      </InputGroup>

                    </FormItem>
                  </Form>
                </Card>
                <Card style={{wordWrap: 'break-word', margin: '2vw'}} title={`Texto Encriptado - ${this.state.des_tempo_encriptar.toFixed(5)}ms`}>
                  {this.state.des_output_encriptar}
                </Card>
                <Card style={{wordWrap: 'break-word', margin: '2vw'}} title={`Texto Desencriptado - ${this.state.des_tempo_decriptar.toFixed(5)}ms`}>
                  {this.state.des_output_decriptar}
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  } 
}

export default App;
