import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
const Custom = ({id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar 
                rounded
                source={{
                    uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "bold"}}>{chatName}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">this is a test subtitle</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default Custom

const styles = StyleSheet.create({})
