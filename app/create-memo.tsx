import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {useState} from "react";
import {router} from "expo-router";

export default function CreateMemoScreen() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');

    const handleSaveMemo = () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('오류', '제목과 내용을 입력해주세요.');
            return;
        }

        // 5-2. (임시) 콘솔에 저장될 데이터 출력
        // 지금은 데이터베이스가 없으므로, 입력된 값이 잘 저장되었는지 콘솔에 출력하여 확인.
        // 이것이 7일차 목표인 AsyncStorage로 데이터를 영구 저장하는 로직으로 대체될 예정
        console.log('저장될 메모: ', {title, content});

        // 5-3. (임시) 사용자에게 저장 완료 알림
        Alert.alert('성공', '메모가 성공적으로 저장되었습니다! (콘솔 확인)', [
            {text: '확인', onPress: () => router.back()} // 확인을 누르면 이전 화면으로 돌아갑니다.
        ]);

        // TODO: (7일차 목표) 여기서 AsyncStorage를 사용해 데이터를 실제로 저장합니다
    }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>새 메모</Text>
        </View>

        <View style={styles.form}>
          {/* 3. TextInput과 상태(state) 연결 */}
          {/*
            value={title}: TextInput에 보여줄 값을 title 상태 변수로 지정합니다.
            onChangeText={setTitle}: 텍스트가 변경될 때마다 setTitle 함수를 호출하여 title 상태를 업데이트합니다.
            이렇게 하면 사용자가 입력하는 값이 실시간으로 title 변수에 반영됩니다.
          */}
          <TextInput placeholder={"제목"} style={styles.input} value={title} onChangeText={setTitle}></TextInput>
          <TextInput placeholder={"내용을 입력하세요..."} multiline style={[styles.input, styles.contentInput]} value={content} onChangeText={setContent}></TextInput>
          {/* 4. 저장 버튼에 onPress 이벤트 연결 */}
          {/* 사용자가 버튼을 누르면(onPress) 위에서 정의한 handleSaveMemo 함수가 실행됩니다. */}
          <TouchableOpacity style={styles.button} onPress={handleSaveMemo}>
            <Text style={styles.buttonText}>저장</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  )
};

// --- 4. 스타일 정의 ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    form: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
    },
    contentInput: {
        height: 200, // 내용 입력창의 높이를 지정
        textAlignVertical: 'top', // 텍스트를 위에서부터 시작하도록 설정
    },
    button: {
        backgroundColor: '#007AFF', // ios 기본 파란색
        padding: 15,
        // borderRadius: 8,
        alignItems: 'center', // 텍스트를 버튼 가로 중앙에 위치
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});