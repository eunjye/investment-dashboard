# 투자 포트폴리오 관리 대시보드

## 목표
투자 포트폴리오를 관리할 수 있는 리액트 기반의 대시보드를 개발합니다. 이 대시보드는 사용자의 투자 자산과 투자 수익률을 시각화하고, 특정 주식이나 펀드에 대한 정보를 조회할 수 있어야 합니다.

## 요구 사항
- 로그인 및 사용자 인증: 사용자가 자신의 포트폴리오를 관리할 수 있도록 로그인 기능을 구현합니다.
- 포트폴리오 관리: 사용자가 자신의 투자 자산을 추가, 수정, 삭제할 수 있는 기능을 구현합니다.
  - 주식, 채권, 현금 등 다양한 자산 유형을 지원해야 합니다.
- 투자 수익률 시각화: 각 자산의 수익률과 전체 포트폴리오의 수익률을 시각화합니다.
  - 차트 라이브러리를 활용하여 다양한 시각화를 제공합니다.
- 주식 및 펀드 검색 기능: 사용자가 특정 주식이나 펀드를 검색하고 정보를 조회할 수 있도록 합니다.
  - 실시간 주가 정보가 아닌 모의 데이터를 사용해도 좋습니다.
- 반응형 디자인: 다양한 디바이스에서 정상 작동해야 합니다.
- 테스트 코드 작성: 주요 기능에 대한 테스트 코드를 작성합니다.

## 추가 고려 사항
- 상태 관리 라이브러리 (예: Redux)의 사용
- RESTful API와의 통신 (실제 백엔드 서버 없이 목업 데이터 사용 가능)
- 사용자 친화적인 UI/UX 디자인
