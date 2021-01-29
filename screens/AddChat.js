import React, { useLayoutEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import  Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../firebase'

const AddChat = ({navigation}) => {

    const [input, setInput] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle : 'Chats'
        })
    }, [])

    const createChat = async () => {
        await db.collection('chats').add({
            chatName: input
        }).then(() => {
            navigation.goBack()
        })
        .catch(err => alert(err))
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter a chat name"
                value={input}
                onChangeText={text => setInput(text)}
                leftIcon = {<Icon name="wechat" type="antdesign" size={24} color='black' />} 
            />
            <Button  onPress={createChat} title="creat a new chat"/>
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container : { 
        backgroundColor : 'white',
        padding: 30,
        height: "100%"
}
})
