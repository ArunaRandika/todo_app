import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState('')
    const [taskList,setTaskList]=useState([])
    const handleTask = () => {
        Keyboard.dismiss
        if(task.trim()) {
            setTaskList([...taskList, task])
            setTask('')
        }

    }

    const deleteItems=(index)=>{
        let copyList=[...taskList]
        copyList.splice(index,1)
        setTaskList(copyList)
    }

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle} c>Today's Tasks</Text>
                <View style={styles.items}>
                    {taskList.map((item,index)=>{
                        return(

                            <TouchableOpacity key={index} onPress={()=>deleteItems(index)}>
                                <Task  text={item}/>
                            </TouchableOpacity>
                            )
                    })}
                </View>

            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                                  style={styles.writerTaskWrapper}>
                <TextInput value={task} style={styles.input} placeholder={"Add a Task"} onChangeText={(text) => setTask(text)}/>
                <TouchableOpacity  onPress={() => handleTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",

    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writerTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},

});
