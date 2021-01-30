import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { db } from '../firebase'


const Custom = ({id, chatName, enterChat }) => {
    
    const [chatMessages, setChatMessages] = useState([])
    
    useEffect(() => {
        const unsubscribe = db.collection('chats').doc(id).collection('messages')
            .onSnapshot(snap => setChatMessages(snap.docs.map(doc => doc.data())))
        return unsubscribe
    }, [])
    
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar 
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL || 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: "bold"}}>{chatName}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName} : {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default Custom

const styles = StyleSheet.create({})
