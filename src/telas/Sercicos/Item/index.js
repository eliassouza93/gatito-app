import { Text, TextInput, View, Button } from "react-native"
import estilos from './estilos'
export default function Item({ nome, preco, descricao }) {
    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}> {nome} </Text>
                <Text style={estilos.descricao}> {descricao} </Text>
                <Text style={estilos.preco}> {preco} </Text>
            </View>

            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}></View>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <TextInput value="0" />
                </View>


                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Preço:</Text>
                    <Text style={estilos.preco}>0</Text>

                </View>

                <View />
                <Button title="Adicionar" />
            </View>
            <View style={estilos.divisor} />
        </>
    )
}