-- 멤버 테이블 : 이승희
CREATE TABLE member (
   num   NUMBER	NOT NULL PRIMARY KEY,
   id   varchar2(50)   NOT NULL,
   pwd   varchar2(50)   NOT NULL,
   nick   varchar2(50)   NOT NULL,
   email   varchar2(50)   NOT NULL,
   tel   varchar2(50)   NOT NULL,
   address   varchar2(50)   NOT NULL,
   detailaddress   varchar2(50)   NOT NULL,
   mdate   date   NOT NULL,
   name   varchar2(50)   ,
   age   varchar2(50)  ,
   gender   varchar2(50)   ,
   imgn VARCHAR2(50)
);

-- QnA 테이블 : 정준영
CREATE TABLE qnaquestion (
	num	NUMBER	NOT NULL PRIMARY KEY,
	membernum	NUMBER	NULL,
	name	varchar2(50)	NOT NULL,
	qnaquestiondate	date	NOT NULL,
	category	varchar2(50)	NOT NULL,
	title	varchar2(50)	NOT NULL,
	content	varchar2(50)	NOT NULL,
	imgname	varchar2(100)	NULL,
	status	varchar2(100)	NULL
);
-- QnA 테이블 : 정준영
CREATE TABLE qnaanswer (
	num	NUMBER	NOT NULL PRIMARY KEY,
	qnanum	number	NOT NULL,
	content	varchar2(50)	NOT NULL,
	qnaanswerdate	date	NOT NULL
);

-- 커뮤니티 테이블 : 정준영
CREATE TABLE community (
	num	NUMBER	NOT NULL PRIMARY KEY,
	membernum	number	NOT NULL,
	name	varchar2(50)	NOT NULL,
	people	number	NULL,
	favorite	number	NULL,
	communitydate	date	NOT NULL
);
-- 해시태그 테이블 : 정준영
CREATE TABLE hashtag (
	num	NUMBER	NOT NULL PRIMARY KEY,
	communitunum	number	NOT NULL,
	name	varchar2(50)	NOT NULL
);

-- 대화 테이블 : 정준영
CREATE TABLE talk (
	num	NUMBER	NOT NULL PRIMARY KEY,
	communitunum	number	NOT NULL,
	membernum	number	NOT NULL,
	content	varchar2(50)	NOT NULL,
	talkdate	date	NOT NULL
);

-- 일기 테이블 : 박성호, 김건우
CREATE TABLE diary (
    num NUMBER   NOT NULL PRIMARY KEY,
    membernum NUMBER NOT NULL,
    emotion VARCHAR2(50) NOT NULL,
    week VARCHAR2(50) NOT NULL,
    title VARCHAR2(50) NOT NULL,
    content VARCHAR2(50) NOT NULL,
    diarydate DATE NOT NULL,
    diaryupdate DATE,
    diaryimg VARCHAR2(300) NULL
);

-- 감정 테이블 : 
CREATE TABLE emotion (
	num	NUMBER	NOT NULL PRIMARY KEY,
	resultnum	number	NOT NULL,
	membernum	number	NOT NULL,
	name	varchar2(50)	NOT NULL,
	score	float	NOT NULL
);

-- 결과 테이블 : 박성호 (통계), 이지영, 윤수영, 허호준 (데이터 삽입)
CREATE TABLE result (
	num	NUMBER	NOT NULL PRIMARY KEY,
	membernum	number	NOT NULL,
	testspecies	varchar2(50)	NOT NULL,
	testcategory	varchar2(50)	NOT NULL,
	testvideotext	varchar2(50)	NULL,
	simulationprofile	varchar2(50)	NULL,
	simulationresult	varchar2(50)	NULL,
	selfquestionresult	varchar2(50)	NULL,
	htpimgname	varchar2(50)	NULL,
	htpresult	varchar2(50)	NULL,
	testdate	date	NOT NULL
);

-- 간편심리 테이블 : 윤수영
CREATE TABLE questionnaire (
    num NUMBER	NOT NULL PRIMARY KEY,
    question VARCHAR2(300) NOT NULL,
    cause VARCHAR2(100) NOT NULL,
    description VARCHAR2(100) NOT NULL
);

-- 간편심리 테이블 : 윤수영
CREATE TABLE useresponse (
    num NUMBER	NOT NULL PRIMARY KEY,
    userid VARCHAR2(50),
    surveycode VARCHAR(50),
    qnum NUMBER,
    respscore number,
    respdate DATE DEFAULT sysdate,
    FOREIGN KEY (qnum) REFERENCES questionnaire(num)
);

-- 시뮬레이션 테이블 : 이지영
CREATE TABLE simulation (
    num NUMBER	NOT NULL PRIMARY KEY,
    membernum NUMBER NOT NULL,
    category VARCHAR2(50) NOT NULL,
    type VARCHAR2(50) NOT NULL,
    simuldate DATE NOT NULL,
    title VARCHAR2(255) NOT NULL
);

-- 시뮬레이션 테이블 : 이지영
CREATE TABLE simuldialog (
    num NUMBER	NOT NULL PRIMARY KEY,
    simulationnum NUMBER NOT NULL,
    conversation VARCHAR2(255) NOT NULL,
    status VARCHAR2(10)
);

-- 시뮬레이션 테이블 : 이지영
CREATE TABLE simulresult (
    num NUMBER NOT NULL,
    simulationnum NUMBER NOT NULL,
    emotionname VARCHAR2(50) NOT NULL,
    emotionscore NUMBER NOT NULL,
    stressscore NUMBER NOT NULL,
    heartrate NUMBER NOT NULL,
    topemotion VARCHAR2(50) NOT NULL,
    topemotionscore NUMBER NOT null,
    topemotionimg VARCHAR2(255)
);

/*
CREATE TABLE report (
	num	NUMBER	NOT NULL PRIMARY KEY,
	comunicationnum	number	NOT NULL,
	communitunum	number	NOT NULL,
	membernum	number	NOT NULL,
	content	varchar2(50)	NULL,
	reportdate	date	NULL
);
*/
 
--장바구니  테이블 생성 : 이승희
CREATE TABLE cart (
   membernum   number   NOT NULL,
   productnum   varchar2(50)  NOT NULL,
   count   number   NOT NULL,
   cdate DATE,
   CONSTRAINT fk_cart_membernum FOREIGN KEY (membernum) REFERENCES member(num)
);

--주문완료  테이블 생성 : 이승희
CREATE TABLE request (
   membernum   number  NOT NULL,
   requestnum   number  UNIQUE NOT NULL,
   address   varchar2(50)   NOT NULL,
   detailaddress   varchar2(50)   NOT NULL,
   addreqeust   varchar2(50)   NOT NULL,
   way   varchar2(50)   NOT NULL,
   waycorp   varchar2(50)   NOT NULL,
   waynum   varchar2(50)   NOT NULL,
   rdate DATE,
   CONSTRAINT fk_request_membernum FOREIGN KEY (membernum) REFERENCES member(num)
);


--주문상품 테이블 생성 : 이승희
CREATE TABLE orders (
    ordernum   number   UNIQUE NOT NULL,
   requestnum   number   NOT NULL,
   membernum   number   NOT NULL,
   productnum   varchar2(50)   NOT NULL,
   name   varchar2(50)   NOT NULL,
   count   number   NOT NULL,
   price   number   NOT NULL,
   odate DATE,
   img varchar2(50) ,
   delivery varchar2(50),
   CONSTRAINT fk_orders_membernum FOREIGN KEY (membernum) REFERENCES member(num)
);

--배송지 테이블 생성 : 이승희
CREATE TABLE address (
   num NUMBER UNIQUE NOT NULL,
   membernum   number   NOT NULL,
   addressnick  varchar2(50)   NOT NULL,
   address   varchar2(50)   NOT NULL,
   detailaddress varchar2(50)   NOT NULL,
   ADDREQUeST  varchar2(50)   NOT NULL,
   CONSTRAINT fk_address_membernum FOREIGN KEY (membernum) REFERENCES member(num)
);

--Review 테이블 :송지미
CREATE TABLE review (
    review_num NUMBER(10) PRIMARY KEY,  -- 리뷰 번호
    review_content CLOB,                -- 리뷰 내용
    review_stars NUMBER(2),             -- 별점
    review_date DATE,                   -- 리뷰 작성 날짜
    review_imagename VARCHAR2(255),     -- 이미지 파일 이름
    review_category VARCHAR2(255)       -- 리뷰 카테고리
);


-- 상품 테이블 생성 :송지미
CREATE TABLE product (
    product_num NUMBER(10) PRIMARY KEY, -- 기본 키로 사용될 숫자형 컬럼
    product_category VARCHAR2(255), -- 카테고리명
    product_image VARCHAR2(255), -- 이미지 파일명
    product_name VARCHAR2(255), -- 제품명
    product_price NUMBER(10, 2), -- 가격 (숫자형)
    product_stock NUMBER, -- 재고 수량
    product_manufacturer VARCHAR2(255), -- 제조사
    product_registrant VARCHAR2(255), -- 등록자
    product_hit NUMBER -- 조회수
);


-- 상품 테이블 생성 :송지미
CREATE TABLE payment (
   num   number UNIQUE NOT NULL,
   membernum   number NOT NULL,
   paynick   varchar2(50) NOT NULL,
   payway   varchar2(50) NOT NULL,
   paycorp   varchar2(50) ,
   paynum   number NOT NULL,
   payday number,
   paycvc number,
   cdate DATE,
   CONSTRAINT fk_payment_membernum FOREIGN KEY (membernum) REFERENCES member(num)
);

-- 마켓 QnA 테이블 생성 : 김건우
CREATE TABLE marketqnaquestion (
   num   NUMBER   PRIMARY KEY, 
   membernum   NUMBER   NULL,
   name   varchar2(50)   NOT NULL,
   qnaquestiondate   date   NOT NULL,
   category   varchar2(50)   NOT NULL,
   title   varchar2(50)   NOT NULL,
   content   varchar2(50)   NOT NULL,
   imgname   varchar2(100)   NULL,
   status   varchar2(100)   NULL
);

-- 마켓 QnA 테이블 생성 : 김건우
CREATE TABLE marketqnaanswer (
   num   number   NOT NULL,
   qnanum   number   NOT NULL,
   content   varchar2(50)   NOT NULL,
   qnaanswerdate   date   NOT NULL
);




-- 제약조건
ALTER TABLE qnaquestion ADD CONSTRAINT fk_qnamembernum FOREIGN KEY (membernum) REFERENCES member(num);
ALTER TABLE diary ADD CONSTRAINT fk_membernum FOREIGN KEY (membernum) REFERENCES member (num);
ALTER TABLE simuldialog ADD CONSTRAINT FK_simulationnum FOREIGN KEY (simulationnum) REFERENCES simulation(num) ON DELETE CASCADE;
ALTER TABLE talk ADD CONSTRAINT fk_talk FOREIGN KEY (membernum) REFERENCES member(num);
ALTER TABLE simulresult ADD CONSTRAINT PK_simulresult PRIMARY KEY(num);
ALTER TABLE simulresult ADD CONSTRAINT FK_simulresult_simulationnum FOREIGN KEY (simulationnum) REFERENCES simulation(num) ON DELETE CASCADE;
ALTER TABLE marketqnaquestion ADD CONSTRAINT fk_membernum FOREIGN KEY (membernum) REFERENCES member(num);
ALTER TABLE marketqnaanswer ADD CONSTRAINT PK_MARKETQNAANSWER PRIMARY KEY(num);

-- ALTER TABLE member ADD CONSTRAINT PK_MEMBER PRIMARY KEY(num);
-- ALTER TABLE qnaquestion ADD CONSTRAINT PK_QNAQUESTION PRIMARY KEY(num);
-- ALTER TABLE qnaanswer ADD CONSTRAINT PK_QNAANSWER PRIMARY KEY(num);
-- ALTER TABLE community ADD CONSTRAINT PK_COMMUNITY PRIMARY KEY(num);
-- ALTER TABLE hashtag ADD CONSTRAINT PK_HASHTAG PRIMARY KEY(num);
-- ALTER TABLE talk ADD CONSTRAINT PK_TALK PRIMARY KEY(num);
-- ALTER TABLE diary ADD CONSTRAINT PK_DIARY PRIMARY KEY(num);
-- ALTER TABLE emotion ADD CONSTRAINT PK_EMOTION PRIMARY KEY(num);
-- ALTER TABLE result ADD CONSTRAINT PK_RESULT PRIMARY KEY(num);
-- ALTER TABLE useresponse ADD CONSTRAINT PK_useresponse PRIMARY KEY(num);
-- ALTER TABLE questionnaire ADD CONSTRAINT PK_questionnaire PRIMARY KEY(num);
-- ALTER TABLE simulation ADD CONSTRAINT PK_simulation PRIMARY KEY(num);
-- ALTER TABLE simuldialog ADD CONSTRAINT PK_simuldialog PRIMARY KEY(num);

-- ALTER TABLE report ADD CONSTRAINT PK_REPORT PRIMARY KEY(num);

-- 시퀀스 (15)
CREATE SEQUENCE member_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE qnaquestion_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE qnaanswer_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE community_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE hashtag_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE talk_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE diary_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE emotion_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE result_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE questionnaire_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE useresponse_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE simulation_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE simuldialog_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE simulresult_seq START WITH 1 INCREMENT BY 1;

-- ICTMARKET
CREATE SEQUENCE ordernum_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE product_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE review_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE address_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE payment_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE marketqnaquestion_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE marketqnaanswer_seq START WITH 1 INCREMENT BY 1;

--CREATE SEQUENCE report_seq START WITH 1 INCREMENT BY 1;
