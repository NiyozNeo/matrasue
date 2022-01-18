CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name varchar(32) not null,
    user_uuid int not null,
    user_step varchar(32),
    user_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);
