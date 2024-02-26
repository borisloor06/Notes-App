CREATE TABLE IF NOT EXISTS notes  (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  state BOOLEAN,
  created TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated TIMESTAMPTZ NOT NULL DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS category (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL
)

create table IF NOT EXISTS note_categories(
	id SERIAL primary key,
	id_category int not null,
	id_note int not null
)