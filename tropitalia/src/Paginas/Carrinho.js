import React, { Component } from "react";
import axios from "axios"; // Importe o Axios corretamente
import carrinho from "../Img/shopping_cart_FILL0_wght400_GRAD0_opsz24 (1).png";
import logo from "../Img/pizzaria-tropitallia.png";
import { render } from "@testing-library/react";

class Carrinho extends Component {
    state = {
        cliente: "",
        pedido: "",
        obs: "",
        endereco: "",
        preco: "",
    };

    handleEnviarPedido = () => {
        const link = "https://pizzaria-a48d3-default-rtdb.firebaseio.com/pedidos.json";

        const dados = {
            cliente: this.state.cliente,
            pedido: this.state.pedido,
            obs: this.state.obs,
            endereco: this.state.endereco,
            preco: this.state.preco,
        };

        axios
            .post(link, dados)
            .then((response) => {
                console.log(response);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <>
                <header>
                    <img src={logo} className="logo" alt="Logo da Pizzaria" />
                    <div id="aa">
                        <nav>
                            <a href="">
                                <p>INICIO</p>
                            </a>
                            <a href="">
                                <p>CONTATOS</p>
                            </a>
                            <a href="">
                                <p>SOBRE</p>
                            </a>
                            <a>
                                <img src={carrinho} className="carrinho" alt="Carrinho de compras" />
                            </a>
                            <button onClick={this.handleEnviarPedido}>Enviar Pedido</button>
                        </nav>
                    </div>
                </header>
            </>
        );
    }
}

export default Carrinho;
