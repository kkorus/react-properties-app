CREATE TABLE owners 
(
    id        SERIAL PRIMARY KEY,
    name      varchar(100) NOT NULL
);

CREATE TABLE properties
(
    id          SERIAL PRIMARY KEY,
    line1       varchar(100) NULL,
    line2       varchar(100) NULL,
    line3       varchar(100) NULL,
    line4       varchar(100) NULL,
    city        varchar(100) NULL,
    postcode    varchar(100) NULL,
    country     varchar(100) NULL
);

CREATE TABLE owners_properties 
(
    owner_id integer NOT NULL references owners(id),
    property_id integer NOT NULL references properties(id),
    income numeric NOT NULL,
    PRIMARY KEY (owner_id, property_id)
);