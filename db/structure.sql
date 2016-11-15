--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE categories (
    id integer NOT NULL,
    name character varying,
    material character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- Name: colors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE colors (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: colors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE colors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: colors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE colors_id_seq OWNED BY colors.id;


--
-- Name: refile_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE refile_attachments (
    id integer NOT NULL,
    oid oid NOT NULL,
    namespace character varying NOT NULL,
    created_at timestamp without time zone DEFAULT ('now'::text)::timestamp without time zone
);


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE refile_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE refile_attachments_id_seq OWNED BY refile_attachments.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: sizes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE sizes (
    id integer NOT NULL,
    sock_id integer,
    stock_quantitiy integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: sizes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE sizes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sizes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE sizes_id_seq OWNED BY sizes.id;


--
-- Name: socks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE socks (
    id integer NOT NULL,
    name character varying,
    color_id integer,
    style_id integer,
    price integer,
    category_id integer,
    description character varying,
    image character varying,
    featured boolean,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: socks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE socks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: socks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE socks_id_seq OWNED BY socks.id;


--
-- Name: styles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE styles (
    id integer NOT NULL,
    type character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: styles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE styles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: styles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE styles_id_seq OWNED BY styles.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- Name: colors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY colors ALTER COLUMN id SET DEFAULT nextval('colors_id_seq'::regclass);


--
-- Name: refile_attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments ALTER COLUMN id SET DEFAULT nextval('refile_attachments_id_seq'::regclass);


--
-- Name: sizes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY sizes ALTER COLUMN id SET DEFAULT nextval('sizes_id_seq'::regclass);


--
-- Name: socks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks ALTER COLUMN id SET DEFAULT nextval('socks_id_seq'::regclass);


--
-- Name: styles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY styles ALTER COLUMN id SET DEFAULT nextval('styles_id_seq'::regclass);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: colors colors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY colors
    ADD CONSTRAINT colors_pkey PRIMARY KEY (id);


--
-- Name: refile_attachments refile_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments
    ADD CONSTRAINT refile_attachments_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sizes sizes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sizes
    ADD CONSTRAINT sizes_pkey PRIMARY KEY (id);


--
-- Name: socks socks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks
    ADD CONSTRAINT socks_pkey PRIMARY KEY (id);


--
-- Name: styles styles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);


--
-- Name: index_refile_attachments_on_namespace; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_namespace ON refile_attachments USING btree (namespace);


--
-- Name: index_refile_attachments_on_oid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_oid ON refile_attachments USING btree (oid);


--
-- Name: index_sizes_on_sock_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sizes_on_sock_id ON sizes USING btree (sock_id);


--
-- Name: index_socks_on_category_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_socks_on_category_id ON socks USING btree (category_id);


--
-- Name: index_socks_on_color_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_socks_on_color_id ON socks USING btree (color_id);


--
-- Name: index_socks_on_style_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_socks_on_style_id ON socks USING btree (style_id);


--
-- Name: socks fk_rails_278af9e628; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks
    ADD CONSTRAINT fk_rails_278af9e628 FOREIGN KEY (color_id) REFERENCES colors(id);


--
-- Name: sizes fk_rails_b3883bf42b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sizes
    ADD CONSTRAINT fk_rails_b3883bf42b FOREIGN KEY (sock_id) REFERENCES socks(id);


--
-- Name: socks fk_rails_e780b5db3f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks
    ADD CONSTRAINT fk_rails_e780b5db3f FOREIGN KEY (category_id) REFERENCES categories(id);


--
-- Name: socks fk_rails_ee98d57c2f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks
    ADD CONSTRAINT fk_rails_ee98d57c2f FOREIGN KEY (style_id) REFERENCES styles(id);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20161115134928'), ('20161115194520'), ('20161115194529'), ('20161115194613'), ('20161115195615'), ('20161115200321');


