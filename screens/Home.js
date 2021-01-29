import React, { useLayoutEffect, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import Custom from '../components/Custom'
import { auth, db } from '../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

const Home = ({navigation}) => {


    const [chats, setChats] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        })

         return unsubscribe
    }, [])



    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"signal",
            headerStyle : {backgroundColor: "#fff"},
            headerTitleStyle : {color : "black"},
            headerTintColor : {color : "black"},
            headerLeft : () => <View style={{marginLeft: 20}} >
                <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
                    <Avatar rounded source={{ uri : auth?.currentUser?.photoURL}} />
                </TouchableOpacity>
            </View>,
            headerRight: () => <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                width: 80,
                marginRight: 20
            }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <AntDesign name="camerao" size={24} color = "black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('AddChat')}>
                    <SimpleLineIcons name="pencil" size={24} color = "black" />
                </TouchableOpacity>
            </View>
        })
    }, [navigation])

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {id, chatName})
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data : {chatName}}) => (
                  <Custom key={id} id={id} chatName={chatName} enterChat={enterChat} />)
                )}
                {/* <Custom /> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '100%'
    }
})
