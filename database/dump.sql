--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.measurements DROP CONSTRAINT "measurements_userId_fkey";
ALTER TABLE ONLY public.exercises DROP CONSTRAINT "exercises_userId_fkey";
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.measurements ALTER COLUMN "measurementId" DROP DEFAULT;
ALTER TABLE public.exercises ALTER COLUMN "exerciseId" DROP DEFAULT;
DROP SEQUENCE public.users_userid_seq;
DROP TABLE public.users;
DROP SEQUENCE public."measurements_measurementId_seq";
DROP TABLE public.measurements;
DROP SEQUENCE public."exercises_exerciseId_seq";
DROP TABLE public.exercises;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: exercises; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exercises (
    "exerciseId" integer NOT NULL,
    "userId" integer,
    exercise character varying,
    amount double precision,
    unit character varying,
    "createdAt" timestamp without time zone
);


--
-- Name: exercises_exerciseId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."exercises_exerciseId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exercises_exerciseId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."exercises_exerciseId_seq" OWNED BY public.exercises."exerciseId";


--
-- Name: measurements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.measurements (
    "measurementId" integer NOT NULL,
    "userId" integer,
    weight double precision,
    waist double precision,
    "bodyFat" double precision,
    hips double precision,
    thighs double precision,
    chest double precision,
    arms double precision,
    "createdAt" timestamp without time zone
);


--
-- Name: measurements_measurementId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."measurements_measurementId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: measurements_measurementId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."measurements_measurementId_seq" OWNED BY public.measurements."measurementId";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    "firstName" character varying(255),
    "lastName" character varying(255),
    email character varying(255),
    password character varying(255)
);


--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users."userId";


--
-- Name: exercises exerciseId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercises ALTER COLUMN "exerciseId" SET DEFAULT nextval('public."exercises_exerciseId_seq"'::regclass);


--
-- Name: measurements measurementId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.measurements ALTER COLUMN "measurementId" SET DEFAULT nextval('public."measurements_measurementId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: exercises; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.exercises ("exerciseId", "userId", exercise, amount, unit, "createdAt") FROM stdin;
1	1	squat	225	lbs	2020-08-29 22:27:07.091403
2	1	bench press	135	lbs	2020-08-29 22:28:45.151895
3	1	bench press	145	lbs	2020-08-29 22:43:39.842222
4	1	bench press	150	lbs	2020-08-29 22:43:44.773806
5	1	squat	255	lbs	2020-08-29 22:43:55.602565
6	1	deadlift	315	lbs	2020-08-30 22:33:02.19794
7	1	deadlift	325	lbs	2020-08-30 22:37:59.80137
8	1	deadlift	335	lbs	2020-08-30 22:39:27.284647
9	1	deadlift	355	lbs	2020-08-30 22:54:49.246355
10	1	deadlift	375	lbs	2020-08-30 22:55:36.751537
\.


--
-- Data for Name: measurements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.measurements ("measurementId", "userId", weight, waist, "bodyFat", hips, thighs, chest, arms, "createdAt") FROM stdin;
2	1	175.300000000000011	34.2999999999999972	25.1999999999999993	36.1000000000000014	20.6000000000000014	20.1000000000000014	14.9000000000000004	2020-08-24 02:12:44.762361
3	1	172.199999999999989	33.8999999999999986	24.8000000000000007	35.7999999999999972	22.8999999999999986	22	15.1999999999999993	2020-08-24 02:58:23.235839
4	1	180	34.2000000000000028	22.1999999999999993	32.5	20	27.8999999999999986	15.1999999999999993	2020-08-29 20:23:13.13432
6	1	178	34.2000000000000028	22.1999999999999993	32.5	20	27.8999999999999986	15.1999999999999993	2020-08-30 22:57:52.521645
7	1	179	34.2000000000000028	22.1999999999999993	32.5	20	27.8999999999999986	15.1999999999999993	2020-08-30 22:58:18.401477
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", "firstName", "lastName", email, password) FROM stdin;
1	Kevin	Akahoshi	kevin@vigor.com	test
2	Dexter	Akahoshi	dexter@vigor.com	meow
3	Sprinna	Akahoshi	sprinna@vigor.com	$2b$12$blZx2KzVnetrbs6KN4GVgOr9IbzVkS33CTOfaiHj/xBkFAHuwadIO
4	Req	Sesh	req.sesh@test.com	$2b$12$AaVltRvf2mU5Xf4C3jB8p.v/Von/q3fB8ld0sJPQIMaeaWLZdlBW2
\.


--
-- Name: exercises_exerciseId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."exercises_exerciseId_seq"', 10, true);


--
-- Name: measurements_measurementId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."measurements_measurementId_seq"', 7, true);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_userid_seq', 4, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


--
-- Name: exercises exercises_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exercises
    ADD CONSTRAINT "exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: measurements measurements_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT "measurements_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

