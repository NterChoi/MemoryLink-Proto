import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default function CreateMemoScreen() {
  return (
      <SafeAreaView>
        <View>
          <Text>새 메모</Text>
        </View>

        <View>
          {/* --- 1. 제목 입력창 --- */}
          <TextInput placeholder={"제목"} style={styles.input}></TextInput>

        {/*  --- 2. 내용 입력창 (여러 줄) --- */}
            <TextInput placeholder={"내용을 입력하세요..."} multiline style={[styles.input, styles.contentInput]}></TextInput>

          {/*  --- 3. 저장 버튼 --- */}
          <TouchableOpacity style={styles.button}>
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