# MemoryLink  메모 앱

> 복잡한 기능 대신 쓰기의 본질에 집중하는 Local-First 크로스플랫폼 메모 앱

<br/>

![스크린샷 2025-10-21 오후 4 28 18](https://github.com/user-attachments/assets/a8a13a7a-614b-4f4f-8c6a-03248a4331a3)


## 1. 핵심 컨셉 (Core Concept)

**"내 데이터는 내가 소유한다"**

MemoryLink는 Local-First 아키텍처를 기반으로 설계되었습니다. 모든 데이터는 사용자의 기기에 우선적으로 저장되며, 이를 통해 인터넷 연결 없이도 모든 기능을 오프라인에서 완벽하게 사용할 수 있습니다. 사용자는 자신의 데이터를 온전히 소유하고 제어할 수 있습니다.

## 2. 주요 기능 (Features)

-   **✍️ 메모 작성 및 저장:** 미니멀한 에디터로 쓰기에만 집중하여 메모를 작성하고, 기기에 안전하게 저장합니다.
-   **📚 메모 목록 보기:** 작성된 메모 목록을 확인하고 관리합니다.
-   **[예정] 🏷️ 태그 기반 필터링:** `#태그`를 사용하여 메모를 직관적으로 분류하고 빠르게 찾아볼 수 있습니다.
-   **[예정] 🗓️ 캘린더 뷰:** 날짜별로 작성한 메모를 한눈에 확인하며 과거의 기록을 회상할 수 있습니다.
-   **[예정] ☁️ 클라우드 동기화:** 여러 기기에서 메모를 동기화하여 사용할 수 있습니다.

## 3. 기술 스택 및 아키텍처 (Tech Stack & Architecture)

이 프로젝트는 React Native 생태계를 중심으로, 효율적이고 확장 가능한 개발을 목표로 합니다.

| 구분 | 기술 | 선택 이유 |
| :--- | :--- | :--- |
| **Core** | `React Native`, `Expo` | 단일 코드베이스로 iOS, Android 네이티브 앱을 동시에 개발하여 생산성을 극대화합니다. |
| **상태 관리** | `React Hooks` | `useState`, `useEffect` 등 기본 Hook을 사용하여 가볍고 직관적인 상태 관리를 지향합니다. |
| **네비게이션**| `Expo Router` | 파일 시스템 기반의 라우팅으로, 직관적이고 간편하게 화면 간 이동을 관리합니다. |
| **로컬 DB** | `WatermelonDB` | **(채택 예정)** `AsyncStorage`의 성능 한계를 극복하고, 대용량 데이터 처리를 위해 선택했습니다. 특히 **UI 자동 업데이트(Reactivity)**와 **동기화에 특화**된 구조는 본 프로젝트의 'Local-First' 및 '클라우드 동기화' 목표에 가장 부합합니다. |
| **백엔드** | `Firebase` or `NestJS` | **(계획)** 빠른 구현을 위해 BaaS인 Firebase를 사용하거나, 완전한 제어권 확보를 위해 NestJS 기반의 자체 서버 구축을 고려하고 있습니다. |

## 4. 설치 및 실행 (Getting Started)

```bash
# 1. 프로젝트 클론
git clone https://your-repository-url.git
cd MemoryLink

# 2. 의존성 설치
npm install

# 3. 앱 실행 (iOS 또는 Android)
npm run ios
# 또는
npm run android
```

## 5. 프로젝트 구조 (Project Structure)

```
/
├── app/              # Expo Router가 관리하는 화면(Screen) 디렉토리
│   ├── (tabs)/       # 탭 네비게이션으로 구성된 화면 그룹
│   └── create-memo.tsx # 메모 생성 화면
├── assets/           # 이미지, 폰트 등 정적 리소스
├── components/       # 재사용 가능한 UI 컴포넌트
├── constants/        # 테마, 색상 등 공통 상수
└── hooks/            # 커스텀 React Hook
```