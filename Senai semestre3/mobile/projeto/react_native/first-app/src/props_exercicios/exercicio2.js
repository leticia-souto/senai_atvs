import { View, Text } from "react-native";

export default function CartaoUsuario(props) {

    const usuario = { nome: "Ana", email: "ana.santos@gmail.com" }

    const nome = usuario.nome
    const email = usuario.email

    return (
        <View>
            <Text>Nome: {props.nome}</Text>
             <Text>Email: {props.email}</Text>
        </View>
    )
}