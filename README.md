# [FED] 테크스펙

```
📌 FED 프로젝트는 회사와 기술스택을 크롤링, 클렌징하여 만든 정보를 모든 개발자에게 보여주고자 합니다.
```

### 메타데이터

| 작성자 | 이재림 |
| --- | --- |
| 문서일자 | 2023. 07. 30 |

### 정당성

- 구인구직을 하기 위해 회사별 스택을 정리하였습니다. 회사별 스택을 정리해서 공유하면 더 많은 개발자에게 도움이 되지 않을까 생각하였습니다.

### 목표

- 회사 채용 정보를 크롤링하여 원하는 정보로 가공한 뒤 회사별 사용 스택을 포함한 정보를 확인할 수 있도록 합니다.
- 회사별 기술스택 정보뿐 아니라 스택별 회사정보도 확인할 수 있도록 합니다.

### 비목표

- 채용정보를 제공하지는 않습니다.
- 로그인 기능을 제공하지 않습니다.

### 설계

- 가볍고 빠른 백엔드(FastAPI)와 관계형DB(Mysql)을 사용하였으며, SPA로 React를 선택하였습니다.
- 회사 채용 정보를 크롤링하여 데이터를 파싱, 클렌징하여 DB(Mysql)에 저장하였습니다.
- 스택별 회사 검색, 회사별 스택 두가지 카테고리를 제공하며, `Kakao Map API`을 사용하여 회사 위치 정보를 표현하였습니다.
- 페이지네이션을 구현합니다.

### 구현

- 스키마 구현
    
    ![Untitled](https://south-sunshine-1a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd690e904-4e37-4cc7-a0d0-5dc570461838%2FUntitled.png?table=block&id=8a191239-fcf6-47f8-a918-8a88b61b18fa&spaceId=65fd8ad2-cae7-4aa5-b596-6a531b28b424&width=2000&userId=&cache=v2)
    
- Company Draft View
    
    ![Untitled](https://south-sunshine-1a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc2f09270-bcc1-47c1-a3c5-2717374d5b0f%2FUntitled.png?table=block&id=98e20fd3-b132-4903-b594-80f869367a86&spaceId=65fd8ad2-cae7-4aa5-b596-6a531b28b424&width=2000&userId=&cache=v2)
    
- CompanyDetail View
    
    ![Untitled](https://south-sunshine-1a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2b6c8f95-ff82-4158-ab24-64267b8e46e8%2FUntitled.png?table=block&id=c30449e1-c4fa-4656-8c16-bebeb1364bcb&spaceId=65fd8ad2-cae7-4aa5-b596-6a531b28b424&width=2000&userId=&cache=v2)
    
- Stack Draft View
    
    ![Untitled](https://south-sunshine-1a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e524b06-10be-4e07-8171-c1f19760714e%2FUntitled.png?table=block&id=ca002650-70b0-4ade-8c3a-422638848408&spaceId=65fd8ad2-cae7-4aa5-b596-6a531b28b424&width=1750&userId=&cache=v2)
    
- StackDetail Draft View

![Untitled](https://south-sunshine-1a6.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f63c87b-a843-4a7f-9d4c-c8f4eb124545%2FUntitled.png?table=block&id=3286b8be-1c7e-4cdb-bb83-9b09072aa8d1&spaceId=65fd8ad2-cae7-4aa5-b596-6a531b28b424&width=2000&userId=&cache=v2)

### 그외 고려사항

- 검색기능이 제공되어야 합니다.

### **성과**

- ReactJs,python에서 크롤링에 대해 학습하였습니다.
- 크롤링,샘플링 과정에서 인터페이스를 만들고 자식클래스에서 구현처리하는 ***템플릿 메서드 패턴에 대해 학습***하였습니다.

### 원격저장소

- [FE](https://github.com/leejaerim/FED_front)
- [BE](https://github.com/leejaerim/FED)

---

# Packages
1. axios
2. react-query
   - npm i @tanstack/react-query
3. chakra ui
   - npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
   - npm i @chakra-ui/button
4. react-router-dom
   - npm install react-router-dom
5. react icons
   - npm install react-icons --save
