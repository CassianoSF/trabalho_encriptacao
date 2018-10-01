import React, { Component } from 'react';
import './App.css';
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
      <div>
        <Row>
          <Col span={12}>
            <Card title="AES">
              <Card style={{margin: 30}}>
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
                    <InputGroup compact>
                      <Input 
                        style={{width: '50%'}} 
                        onChange={this.onChange} 
                        type="text" 
                        name="aes_input_encriptar" 
                        id="aes_input_encriptar" 
                        placeholder="Encriptar texto" />
                          <Button onClick={this.onEncriptarAES}>Encriptar</Button>
                    </InputGroup>
                  </FormItem>

                  <FormItem>
                    <InputGroup compact>
                      <Input 
                        style={{width: '50%'}} 
                        onChange={this.onChange} 
                        type="text" 
                        name="aes_input_decriptar" 
                        id="aes_input_decriptar" 
                        placeholder="Desencriptar texto" />
                          <Button onClick={this.onDesencriptarAES}>Desencriptar</Button>
                    </InputGroup>

                  </FormItem>
                </Form>
              </Card>
              <Card style={{margin: 30}} title={`Texto Encriptado - ${this.state.aes_tempo_encriptar.toFixed(5)}ms`}>
                {this.state.aes_output_encriptar}
              </Card>
              <Card style={{margin: 30}} title={`Texto Desencriptado - ${this.state.aes_tempo_decriptar.toFixed(5)}ms`}>
                {this.state.aes_output_decriptar}
              </Card>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="DES">
              <Card style={{margin: 30}}>
                <Form>
                  <FormItem>
                    <InputGroup>
                      <Input 
                        style={{width: '100%'}} 
                        onChange={this.onChange} 
                        type="text" 
                        name="aes_chave" 
                        id="aes_chave"
                        value={this.state.des_chave}
                        placeholder="Chave" />
                    </InputGroup>
                  </FormItem>

                  <FormItem>
                    <InputGroup compact>
                      <Input 
                        style={{width: '50%'}} 
                        onChange={this.onChange} 
                        type="text" 
                        name="des_input_encriptar" 
                        id="des_input_encriptar" 
                        placeholder="Encriptar texto" />
                          <Button onClick={this.onEncriptarDES}>Encriptar</Button>
                    </InputGroup>
                  </FormItem>

                  <FormItem>
                    <InputGroup compact>
                      <Input 
                        style={{width: '50%'}} 
                        onChange={this.onChange} 
                        type="text" 
                        name="des_input_decriptar" 
                        id="des_input_decriptar" 
                        placeholder="Desencriptar texto" />
                          <Button onClick={this.onDesencriptarDES}>Desencriptar</Button>
                    </InputGroup>

                  </FormItem>
                </Form>
              </Card>
              <Card style={{margin: 30}} title={`Texto Encriptado - ${this.state.des_tempo_encriptar.toFixed(5)}ms`}>
                {this.state.des_output_encriptar}
              </Card>
              <Card style={{margin: 30}} title={`Texto Desencriptado - ${this.state.des_tempo_decriptar.toFixed(5)}ms`}>
                {this.state.des_output_decriptar}
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  } 
}

export default App;
