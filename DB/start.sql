show databases;

use blee_test;

CREATE TABLE  user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 컬럼을 추가하는 명령어 
ALTER TABLE user ADD gender enum('여자', '남자') not null;
-- 컬럼을 삭제하는 명령어 
ALTER TABLE user DROP COLUMN age;
-- 컬럼을 수정하는 명령어
ALTER TABLE user MODIFY gender varchar(2) not null;

drop table member;

-- 테이블을 조회하는 명령어 (데이터 베이스가 선택이 되어 있어야 함) 
show tables;

-- 실습1. 멤버 테이블 만들기.
CREATE TABLE member(
    id varchar(20) primary key not null,
    name varchar(5) not null,
    age int unsigned,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);
alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interest varchar(100);
show tables;

desc member;
-- 실습1. 끝

-- insert문 (데이터 추가 명령어)
insert into user (id, password) values ('blee', '1123');
insert into user values ('blee2', '1234', 99);

-- select뭉 (데이터 조회 명령어)
-- select [속성...] from [테이블 이름] [where[조건]]

-- user라는 테이블의 모든 값을 조회하겠다.
select * from user;

-- user테이블의 id속성을 모두 조회하겠다.
select id from user;

CREATE TABLE customer
(
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL,
addr CHAR(10) NOT NULL,
phone CHAR(11),
birth DATE
);

CREATE TABLE orders
(
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
custid CHAR(10) NOT NULL,
prodname CHAR(6) NOT NULL,
price INT NOT NULL,
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
);
-- on delete cascade: 참조 데이터를 삭제할때 부모 테이블의 데이터도 함께 삭제되도록 설정.

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

desc user;
desc customer;
desc orders;

select * from customer;
select * from orders;

-- custid가 kiwi인 회원
select * from customer where custid='kiwi';

-- custid가 kiwi가 아닌 회원
select * from customer where custid !='kiwi';

-- custid가 kiwi인 회원의 addr
select addr from customer where custid='kiwi';

-- birth가 2000-01-01이후에 태어난 회원
select * from customer where birth > '2000-01-01';

-- birth 가 2000-01-01와 2005-01-01사이의 회원
select * from customer where birth between '2000-01-01' and '2005-01-01';

-- addr가 둘중 하나일 경우 조회
select * from customer where addr in ('대한민국 서울', '미국 로스앤젤레스');

-- '대한민국'을 포함한 회원 조회 (%: 0개 이상의 어떤 문자)
select * from customer where addr like '%대한민국%';

--  __수/최_수 가 들어가는 회원 조회(_는 한칸만 차지)
select * from customer where custname like '__수';
select * from customer where custname like '최_수';
-- 앞은 상관없고 마지막에서 두번째 글자가 '해'인 회원 조회
select * from customer where custname like '%해_';

-- is null(not - us null) 사용 예시 
select * from customer where custname is null;
select * from customer where not custname is null;

-- AND/ OR/ NOT
select * from customer where addr like '%대한민국%' and birth <= '2000-05-05';
select * from customer where addr like '%대한민국%' or birth <= '2000-05-05';

-- 오름차순 정렬 
select * from customer order by custname asc;
-- 정렬한 뒤 첫 n번까지 가져오기
select * from customer order by custname asc limit 3;
-- addr이 대한민국인 회원의 custname을 내림차순으로 정렬
select * from customer where addr like '%대한민국%' order by custname desc;

-- update 문/ delete 문 
-- custid가 'bunny'인 회원의 cusrname을 '강해란'으로 변경
UPDATE customer set custname = '강해란' where custid = 'bunny';
select * from customer;

-- custid가 'wow123'인 회원을 삭제
delete from customer where custid = 'wow123';
-- 오류발생. wow123을 참조하고있는 데이터가 있어서 삭제할수 없음.alter

delete from orders where custid = 'wow123';
select * from orders;
delete from customer where custid = 'wow123';
--  참조 데이터를 삭제했기 때문에 이제 삭제할수 있음.

CREATE TABLE user1(
    id varchar(10) primary key not null,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default'',
    birthday DATE not null,
    age int(3) not null default 0
);
drop table user1;
select * from user1;
desc user1;

insert into user1 values ('SinJjang', '1123', '짱구', 'M', '2000-01-01', '9');
insert into user1 values ('JjangAh', '1234', '짱아', 'F', '2006-03-01', '3');
insert into user1 values ('HyunhMan', '2341', '신형만', 'M', '1960-07-03', '49');
insert into user1 values ('MiSun', '5234', '봉미선', 'F', '1966-10-20', '43');
insert into user1 values ('YooRi', '1634', '유리', 'F', '2000-03-09', '9');
insert into user1 values ('SooJi', '1238', '수지', 'F', '2000-07-13', '9');
select * from user1;

select * from user1 order by birthday asc;
select * from user1 where gender like '%M%' order by name desc;
select id,name from user1 where birthday like '196_-__-__';
select * from user1 where birthday like '____-03-__' order by birthday asc;
select * from user1 where birthday like '196_-__-__' and gender like '%M%';




select addr from customer;
-- 중복 된 데이터는 빼고 표시
select distinct addr from customer;

select * from orders;

-- orders 테이블에 존재하는 전체 주문 건수
select count(*) as 'total_order' from orders;

-- 사람별 주문 건수
-- select에서 group by를 쓸때, group by뒤에 쓴 속성과 집계함수로 새로만든 속성만 출력하도록 작성해야함.
select custid, count(*) as 'individual_order' from orders group by custid;

-- 사람별 상품 주문 개수
select custid, sum(amount) as 'total_purchased_amount' from orders group by custid;

-- 사람별로 구매한 상품의 개수를 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회
select custid, sum(amount) as 'total_purchased_amount'
from orders group by custid having sum(amount) >5;

-- 사람별로 구매한 상품의 개수를 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회, bunny 제외
select custid, sum(amount) as 'total_purchased_amount'
from orders where custid != 'bunny'
group by custid having sum(amount) >5;

-- 사람별로 결제한 금액 
select custid, sum(amount*price) as 'total_money_spent' from orders group by custid;
