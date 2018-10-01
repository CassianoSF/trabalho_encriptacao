import React, { Component } from 'react';
import './App.css';
import { Form, Input, Row, Col, Button, Card } from 'antd';

const FormItem = Form.Item;
const InputGroup = Input.Group;

var aesjs = require('aes-js');

var key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      encriptar: '',
      desencriptar: '',
      
      textoEncriptado: '',
      textoDesencriptado: '',
      
      bytesEncriptados: undefined,
      bytesDesencriptados: undefined,
    }

    this.onChange = this.onChange.bind(this)
    this.onEncriptar = this.onEncriptar.bind(this)
    this.onDesencriptar = this.onDesencriptar.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onEncriptar(){
    let text = this.state.encriptar
    let textBytes = aesjs.utils.utf8.toBytes(text);
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let encryptedBytes = aesCtr.encrypt(textBytes);
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    this.setState({
      bytesEncriptados: encryptedBytes,
      textoEncriptado: encryptedHex,
    })
  }

  onDesencriptar(){
    let text = this.state.desencriptar
    let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    let decryptedBytes = aesCtr.decrypt(this.state.bytesEncriptados);
    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    this.setState({
      textoDesencriptado: decryptedText,
      bytesDesencriptados: decryptedBytes,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card style={{margin: 30}}>
              <Form>
                <FormItem>
                  <InputGroup compact>
                    <Input 
                      style={{width: '60%'}} 
                      onChange={this.onChange} 
                      type="text" 
                      name="encriptar" 
                      id="encriptar" 
                      placeholder="Encriptar texto" />
                        <Button onClick={this.onEncriptar}>Encriptar</Button>
                  </InputGroup>

                </FormItem>
                <FormItem>
                  <InputGroup compact>
                    <Input 
                      style={{width: '60%'}} 
                      onChange={this.onChange} 
                      type="text" 
                      name="desencriptar" 
                      id="desencriptar" 
                      placeholder="Desencriptar texto" />
                        <Button onClick={this.onDesencriptar}>Desencriptar</Button>
                  </InputGroup>

                </FormItem>
              </Form>
            </Card>
            <Card style={{margin: 30}} title="Texto Encriptado">
              {this.state.textoEncriptado}
            </Card>
            <Card style={{margin: 30}} title="Texto Desencriptado">
              {this.state.textoDesencriptado}
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{margin: 30}}>
              <Form>
                <FormItem>
                  <InputGroup compact>
                    <Input 
                      style={{width: '60%'}} 
                      onChange={this.onChange} 
                      type="text" 
                      name="encriptar" 
                      id="encriptar" 
                      placeholder="Encriptar texto" />
                        <Button onClick={this.onEncriptar}>Encriptar</Button>
                  </InputGroup>

                </FormItem>
                <FormItem>
                  <InputGroup compact>
                    <Input 
                      style={{width: '60%'}} 
                      onChange={this.onChange} 
                      type="text" 
                      name="desencriptar" 
                      id="desencriptar" 
                      placeholder="Desencriptar texto" />
                        <Button onClick={this.onDesencriptar}>Desencriptar</Button>
                  </InputGroup>

                </FormItem>
              </Form>
            </Card>
            <Card style={{margin: 30}} title="Texto Encriptado">
              {this.state.textoEncriptado}
            </Card>
            <Card style={{margin: 30}} title="Texto Desencriptado">
              {this.state.textoDesencriptado}
            </Card>
          </Col>
        </Row>
      </div>
    );
  } 
}

export default App;
