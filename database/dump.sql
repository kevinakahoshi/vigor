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
ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.measurements ALTER COLUMN "measurementId" DROP DEFAULT;
DROP SEQUENCE public.users_userid_seq;
DROP TABLE public.users;
DROP SEQUENCE public."measurements_measurementId_seq";
DROP TABLE public.measurements;
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
-- Name: measurements measurementId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.measurements ALTER COLUMN "measurementId" SET DEFAULT nextval('public."measurements_measurementId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: measurements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.measurements ("measurementId", "userId", weight, waist, "bodyFat", hips, thighs, chest, arms, "createdAt") FROM stdin;
2	1	175.300000000000011	34.2999999999999972	25.1999999999999993	36.1000000000000014	20.6000000000000014	20.1000000000000014	14.9000000000000004	2020-08-24 02:12:44.762361
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
-- Name: measurements_measurementId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."measurements_measurementId_seq"', 2, true);


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

