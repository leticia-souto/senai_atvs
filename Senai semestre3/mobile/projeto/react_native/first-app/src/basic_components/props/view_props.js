import { View, Text } from "react-native";

export default function CartaoPerfil(props) {
    const pessoa = { nome: "Ana", idade: 22 }

    const nome = pessoa.nome
    const idade = pessoa.idade

    return (
        <View>
            <Text>{props.nome} - {props.idade} anos</Text>
        </View>
    )
}