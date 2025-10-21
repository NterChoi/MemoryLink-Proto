import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {Link, useFocusEffect} from "expo-router";
import {useCallback, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



interface Memo {
    id: string;
    title: string;
    content: string;
}

export default function MemoScreen() {
    const [memos, setMemos] = useState<Memo[]>([]);

    // 2. 화면이 포커스될 때마다 데이터를 불러오는 로직을 추가합니다.
    useFocusEffect(
        useCallback(() => {
            loadMemos();
        }, [])
    );

    // 3. AsyncStorage에서 데이터를 불러오는 함수를 정의
    const loadMemos = async () => {
        try {
            const storedMemos = await AsyncStorage.getItem('memos');
            if (storedMemos !== null) {
                setMemos(JSON.parse(storedMemos));
            }
        } catch (e) {
            console.error("Failed to load memos.", e);
        }
    };

  return (
      // 2. safeAreaView: 노치 디자인 대응
      // 아이폰의 노치(상단 카메라 부분)나 하단 바 영역을 피해 콘텐츠를 안전하게 보여주는 컨테이너입니다.
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Memos</Text>
            <Link href={"/create-memo"} asChild>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </Link>
        </View>

      {/*  --- 4. 메모 목록 영역 --- */}
        <View style={styles.listContainer}>
          { memos.map((memo) => (
              // key 속성은 React가 목록의 각 항목을 구별하기 위해 필요합니다.
              <View key={memo.id} style={styles.memoItem}>
                  <Text style={styles.memoTitle}>{memo.title}</Text>
                  <Text style={styles.memoContent}>{memo.content}</Text>
              </View>
          ))}
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 화면 전체를 차지하도록 설정
        backgroundColor: '#fff', // 배경색을 흰색으로
    },
    header: {
        flexDirection: 'row', // 아이템들을 가로로 배열
        justifyContent: 'space-between', // 아이템들 사이에 공간을 만듦
        alignItems: 'center', // 아이템들을 세로 중앙에 정렬
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#007AFF',
        width: 44,
        height: 44,
        borderRadius: 22, // 원 모양으로 만듦
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    listContainer: {
        padding: 20,
    },
    memoItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },
    memoTitle: {
        fontSize: 18,
        fontWeight: '600'
    },
    memoContent: {
        fontSize: 14,
        color: '#555',
        marginTop: 4,
    },
});