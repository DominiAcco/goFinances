import React from "react";
import {Conteiner} from './styles';
import { Header, Title, Form,  } from "./styles";
import { Input } from "../../../components/Forms/Input";
import { Button } from "react-native";

export function Register () {
    return(
        <Conteiner>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input placeholder="Nome"
                
                />
                <Input placeholder="Valor"
                
                />

            </Form>
           
    
        </Conteiner>
    );
}