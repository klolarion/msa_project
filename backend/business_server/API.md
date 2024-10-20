비지니스 서버 API 명세서

localhost:8081

### 오픈뱅킹 API ###
계좌 목록 조회<br>
GET: /openbanking/accounts
계좌 생성<br>
POST: /openbanking/accounts
거래 내역 조회<br>
GET: /openbanking/transactions?account_id=(required)
자산 현황 조회<br>
POST: /openbanking/transfer
<br>
### 마이데이터 API ###
자산 현황 조회<br>
GET: /mydata/assets
소비 패턴 분석<br>
POST: /mydata/analysis
데이터 수집 동의 처리<br>
POST: /mydata/consent