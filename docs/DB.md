### MySQL로 시작 PostgreSQL로 마이그레이션 ###

1.1. MySQL을 초기 DB로 선택한 이유
- 간단한 설정과 운영: MySQL은 설치와 초기 설정이 간단하여 빠르게 프로젝트를 시작할 수 있습니다.
- 경량화된 DBMS: 소규모 프로젝트에서는 MySQL의 가벼운 구조가 유리합니다.
- 커뮤니티와 자료 풍부: MySQL은 오픈소스 커뮤니티에서 널리 사용되어 자료와 튜토리얼을 쉽게 찾을 수 있습니다.
- 웹 애플리케이션과의 호환성: 많은 웹 애플리케이션에서 MySQL을 기본 DBMS로 사용합니다.

1.2. 추후 PostgreSQL로의 마이그레이션 계획
- 복잡한 트랜잭션 처리: 프로젝트가 성장하며 복잡한 트랜잭션과 데이터 무결성이 중요해질 수 있습니다.
- 고급 SQL 기능 지원: PostgreSQL은 고급 쿼리, 트리거, CTE(Common Table Expressions) 등 기능을 제공합니다.
- 확장성 및 확장 기능: PostgreSQL은 JSON, XML, GIS 데이터 형식 지원 등으로 데이터 처리 유연성을 제공합니다.



2. MySQL → PostgreSQL 마이그레이션 시 주의할 점
   2.1. 데이터 타입 변경
    - MySQL의 DATETIME → PostgreSQL에서는 TIMESTAMP 사용
    - PostgreSQL에서는 TIMESTAMP가 날짜와 시간 정보를 포함하며, 타임존을 처리하는 **TIMESTAMPTZ**도 지원합니다.

   2.2. 자동 증가 필드 설정
    - MySQL의 AUTO_INCREMENT → PostgreSQL에서는 SERIAL 사용
    - MySQL에서는 AUTO_INCREMENT로 기본 키 자동 증가를 처리하지만, PostgreSQL에서는 SERIAL 또는 **BIGSERIAL**을 사용합니다.
    - PostgreSQL의 SERIAL은 내부적으로 시퀀스를 생성해 관리합니다.

   2.3. 문자열 비교 시 민감도 차이
    - MySQL에서는 기본적으로 대소문자를 구분하지 않는 문자열 비교가 수행됩니다.
    - PostgreSQL은 대소문자 민감한 비교가 기본값이므로, 필요 시 ILIKE 연산자를 사용해 대소문자를 구분하지 않는 비교를 수행합니다.
 
   2.4. 외래 키와 제약 조건
    - MySQL과 PostgreSQL 모두 FOREIGN KEY 제약 조건을 지원하지만, PostgreSQL에서는 트랜잭션 내에서 제약 조건을 더 엄격하게 처리합니다.
    - 마이그레이션 시 외래 키 무결성 제약에 주의해야 합니다.

   2.5. 쿼리 최적화와 인덱스
    - PostgreSQL은 GIN, GiST와 같은 고급 인덱스를 지원해 쿼리 최적화가 가능합니다.
    - MySQL에서 사용하던 인덱스가 PostgreSQL로 이식될 때 성능에 차이가 날 수 있으므로 테스트가 필요합니다.

