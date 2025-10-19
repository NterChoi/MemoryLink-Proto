// 1. 더미 데이터 (Dummy Data)
// 아직 데이터베이스가 없으므로, 화면에 보여줄 가짜 메모 데이터입니다
import { StyleSheet, View, Text, SafeAreaView} from "react-native";


const DUMMY_MEMOS = [
  { id: 'm1', title: 'React Native 공부', content: 'JSX와 컴포넌트 개념 익히기'},
  {id: 'm2', title: '저녁 장보기', content: '우유, 계란, 빵'},
  {id: 'm3', title: '운동하기', content: '공원에서 30분 조깅'}
];

export default function MemoScreen() {
  return (
      // 2. safeAreaView: 노치 디자인 대응
      // 아이폰의 노치(상단 카메라 부분)나 하단 바 영역을 피해 콘텐츠를 안전하게 보여주는 컨테이너입니다.
      <SafeAreaView style={styles.container}>
      {/*  --- 3. 헤더(제목) 영역 ---*/}
        <View style={styles.header}>
          <Text style={styles.title}>Memos</Text>
        </View>

      {/*  --- 4. 메모 목록 영역 --- */}
        <View style={styles.listContainer}>
        {/*  --- 5. JavaScript의 map 함수를 이용해 데이터 렌더링 ---*/}
        {/*  DUMMY_MEMOS 배열의 각 아이템을 순회하며 화면 요소로 변환합니다. */}
          { DUMMY_MEMOS.map((memo) => (
              // --- 6. 개별 메모 아이템
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
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
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