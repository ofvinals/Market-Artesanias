-- db needs an user and password in order to initialize correctly, this script creates that when starting the compose.
CREATE USER federico WITH PASSWORD 'diaz2023';
ALTER ROLE federico SET client_encoding TO 'utf8';
ALTER ROLE federico SET default_transaction_isolation TO 'read committed';
ALTER ROLE federico SET timezone TO 'UTC';

CREATE DATABASE postgresdb;
GRANT ALL PRIVILEGES ON DATABASE postgresdb TO federico;
-- grant privileges to user "federico" to create automatically a table inside db. This too is required to startup.
GRANT ALL PRIVILEGES ON SCHEMA public TO federico;
