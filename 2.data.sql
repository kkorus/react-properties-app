INSERT INTO "owners" ( "name") VALUES
('carlos'),
('ankur'),
('elaine');

INSERT INTO "properties" ("line1", "line2", "line3", "line4", "city", "postcode", "country") VALUES
('Flat 5',	NULL,	NULL,	'7 Westbourne Terrace',	'',	'W2 3UL',	'U.K.'),
('4',	'Tower Mansions',	'Off Station road',	'86-87 Grange Road',	'London',	'SE1 3BW',	'U.K.'),
('4',	'332b',	NULL,	'Goswell Road',	'London',	'EC1V 7LQ',	'U.K.');

INSERT INTO "owners_properties" ("owner_id", "property_id", "income") VALUES
(1,	1,	'2000.34'),
(2,	2,	'1000'),
(3,	3,	'1200');