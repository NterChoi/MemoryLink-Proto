import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from "react-native";
import {useState} from "react";
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateMemoScreen() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');

    const handleSaveMemo = async () => {
        if (!title.trim() || !content.trim()) {
            Alert.alert('오류', '제목과 내용을 입력해주세요.');
            return;
        }

        // 1. 새 메모 객체 생성
        const newMemo = {
            id: Date.now().toString(),
            title: title.trim(),
            content: content.trim(),
        }

        try {
            // 2. 기존에 저장된 메모 불러오기
            const existingMemos = await AsyncStorage.getItem('memos');
            const memos = existingMemos ? JSON.parse(existingMemos) : [];

            // 3. 새 메모를 배열에 추가하기
            memos.push(newMemo);

            // 4. 전체 메모 배열을 다시 저장하기
            await AsyncStorage.setItem('memos', JSON.stringify(memos));

            // 5. 저장 후 이전 화면으로 돌아가기
            router.back();
        } catch (e) {
            console.error("Failed to save memo.", e);
            Alert.alert('오류', '메모를 저장하는 데 실패했습니다.');
        }
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