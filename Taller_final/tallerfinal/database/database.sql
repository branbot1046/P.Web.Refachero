CREATE DATABASE IF NOT EXISTS usuarios;

Use usuarios;

CREATE TABLE Persona
(
    id INT NOT NULL PRIMARY KEY, -- primary key column
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    idtipodocumento VARCHAR(15) NOT NULL,
    documento INT NOT NULL,
    lugarresidencia VARCHAR(50) NOT NULL,
    fechanacimiento VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    password VARCHAR(15) NOT NULL
    -- specify more columns here
);

describe Persona;

INSERT INTO Persona values
	(1, 'Daniel', 'Leon', 'C.C', 2190045, 'Cucuta', '17/12/2000', 'Daniel2190045@correo.fachero.com', 3172123765, 'Daniel L', '1234');
    
select * from Persona;