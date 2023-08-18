-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(50),
--   email VARCHAR(100),
--   mobile INT(10) NOT NULL,
--   password VARCHAR(100)
-- );

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  email VARCHAR(100) UNIQUE,
  mobile BIGINT NOT NULL UNIQUE,
  passcode VARCHAR(100) 
);