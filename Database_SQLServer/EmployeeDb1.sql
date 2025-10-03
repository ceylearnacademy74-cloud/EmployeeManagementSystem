
USE EmployeeDb1;
GO
CREATE TABLE Employees1 (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Department NVARCHAR(50) NOT NULL,
    Salary DECIMAL(18,2) CHECK (Salary > 0)
);
GO

INSERT INTO Employees1 (Name, Email, Department, Salary)
VALUES
('maarvin', 'maar.vin@abc.com', 'IT', 55000),
('Jaani', 'ja.ani@def.com', 'HR', 60000),
('mike', 'mike.son@ghi.com', 'Finance', 70000);
GO

SELECT * FROM Employees1;