



CREATE TABLE Tipodocumento
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    nombres VARCHAR(50) NOT NULL,
    descripcion VARCHAR(120)
    -- specify more columns here
);


CREATE TABLE Ciudad
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    nombres VARCHAR(50) NOT NULL,
    descripcion VARCHAR(120) 
    -- specify more columns here
);

CREATE TABLE Persona
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    idtipodocumento INT NOT NULL,
    documento INT NOT NULL,
    lugarresidencia INT NOT NULL,
    fechanacimiento DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono INT  NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(15) NOT NULL,
    FOREIGN KEY (idtipodocumento) REFERENCES tipodocumento(id),
    FOREIGN KEY (lugarresidencia) REFERENCES Ciudad(id)
    -- specify more columns here
);




