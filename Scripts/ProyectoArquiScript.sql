USE [master]
GO
/****** Object:  Database [ProyectoComputo2]    Script Date: 24/10/2024 22:33:33 ******/
CREATE DATABASE [ProyectoComputo2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProyectoComputo2', FILENAME = N'C:\SQLData\ProyectoComputo2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProyectoComputo2_log', FILENAME = N'C:\SQLData\Logs\ProyectoComputo2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [ProyectoComputo2] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ProyectoComputo2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ProyectoComputo2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET ARITHABORT OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ProyectoComputo2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ProyectoComputo2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ProyectoComputo2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ProyectoComputo2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ProyectoComputo2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ProyectoComputo2] SET  MULTI_USER 
GO
ALTER DATABASE [ProyectoComputo2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ProyectoComputo2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ProyectoComputo2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ProyectoComputo2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ProyectoComputo2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ProyectoComputo2] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ProyectoComputo2] SET QUERY_STORE = ON
GO
ALTER DATABASE [ProyectoComputo2] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [ProyectoComputo2]
GO
/****** Object:  Table [dbo].[Estudiantes]    Script Date: 24/10/2024 22:33:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estudiantes](
	[carnet] [nvarchar](8) NOT NULL,
	[nombre] [nvarchar](100) NOT NULL,
	[apellido] [nvarchar](100) NOT NULL,
	[telefono] [nvarchar](10) NOT NULL,
	[carrera] [nvarchar](100) NULL,
	[modalidad] [nvarchar](20) NULL,
	[correo_estudiante] [nvarchar](100) NULL,
	[id_usuario] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[carnet] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reportes_Problemas]    Script Date: 24/10/2024 22:33:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reportes_Problemas](
	[id_reporte] [int] IDENTITY(1,1) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[descripcion] [nvarchar](max) NOT NULL,
	[fecha_reporte] [datetime] NULL,
	[estado] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_reporte] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 24/10/2024 22:33:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[correo] [nvarchar](100) NOT NULL,
	[contrasena] [nvarchar](255) NOT NULL,
	[tipo_usuario] [nvarchar](20) NOT NULL,
	[fecha_registro] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'U1234567', N'Roberto', N'Iglesias', N'212828', N'Desarrollo de software', N'virtual', N'rciglesiaa05@gmail.com', 2)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023001', N'Juan', N'Pérez', N'555-1234', N'Ingeniería en Sistemas', N'Presencial', N'juan.perez@ejemplo.com', 5)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023002', N'María', N'López', N'555-5678', N'Derecho', N'Semipresencial', N'maria.lopez@ejemplo.com', 5)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023003', N'Carlos', N'Ramírez', N'555-2345', N'Administración de Empresas', N'Virtual', N'carlos.ramirez@ejemplo.com', 6)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023004', N'Ana', N'Hernández', N'555-3456', N'Contaduría Pública', N'Presencial', N'ana.hernandez@ejemplo.com', 6)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023005', N'Luis', N'Martínez', N'555-4567', N'Ingeniería Civil', N'Semipresencial', N'luis.martinez@ejemplo.com', 10)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023006', N'Elena', N'Sánchez', N'555-6789', N'Psicología', N'Virtual', N'elena.sanchez@ejemplo.com', 10)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023007', N'Roberto', N'Gómez', N'555-7890', N'Medicina', N'Presencial', N'roberto.gomez@ejemplo.com', 11)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023008', N'Laura', N'Torres', N'555-8901', N'Comunicación Social', N'Semipresencial', N'laura.torres@ejemplo.com', 11)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023009', N'Andrés', N'Vargas', N'555-9012', N'Ingeniería Industrial', N'Virtual', N'andres.vargas@ejemplo.com', 5)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023010', N'Carmen', N'Morales', N'555-0123', N'Educación', N'Presencial', N'carmen.morales@ejemplo.com', 5)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023011', N'Diego', N'Castillo', N'555-2346', N'Diseño Gráfico', N'Semipresencial', N'diego.castillo@ejemplo.com', 6)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023012', N'Verónica', N'Mendoza', N'555-3457', N'Turismo', N'Virtual', N'veronica.mendoza@ejemplo.com', 6)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023013', N'Miguel', N'Rivera', N'555-4568', N'Ingeniería Electrónica', N'Presencial', N'miguel.rivera@ejemplo.com', 10)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023014', N'Sofía', N'Pineda', N'555-5679', N'Arquitectura', N'Semipresencial', N'sofia.pineda@ejemplo.com', 10)
INSERT [dbo].[Estudiantes] ([carnet], [nombre], [apellido], [telefono], [carrera], [modalidad], [correo_estudiante], [id_usuario]) VALUES (N'u2023015', N'Raúl', N'Jiménez', N'555-6780', N'Ingeniería en Software', N'Virtual', N'raul.jimenez@ejemplo.com', 11)
GO
SET IDENTITY_INSERT [dbo].[Reportes_Problemas] ON 

INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (11, 5, N'Se reportó al estudiante roberto por exceso de velocidad en hackear la NASA', CAST(N'2024-10-20T18:00:22.960' AS DateTime), N'en proceso')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (12, 6, N'El estudiante jorge lara tiene 0 en el parcial porque lo dejo a medias y insulto al profesor steven ', CAST(N'2024-10-20T18:16:56.783' AS DateTime), N'pendiente')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (13, 6, N'El estudiante jorge lara tiene 0 en el parcial porque lo dejo a medias y insulto al profesor steven', CAST(N'2024-10-22T10:38:27.477' AS DateTime), N'resuelto')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (22, 5, N'El estudiante no puede acceder a su perfil en línea', CAST(N'2024-10-24T21:19:03.033' AS DateTime), N'pendiente')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (23, 6, N'El sistema no muestra las calificaciones del estudiante', CAST(N'2024-10-24T21:19:34.090' AS DateTime), N'resuelto')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (24, 10, N'Error en la carga de documentos para la inscripción', CAST(N'2024-10-24T21:20:44.137' AS DateTime), N'en proceso')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (25, 11, N'Dificultades con la visualización de horarios de clases', CAST(N'2024-10-24T21:21:00.973' AS DateTime), N'pendiente')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (26, 5, N'El estudiante reporta problemas con la comunicación en foros.', CAST(N'2024-10-24T21:21:17.913' AS DateTime), N'pendiente')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (27, 6, N'Falta información en el módulo de seguimiento académico.', CAST(N'2024-10-24T21:21:26.430' AS DateTime), N'resuelto')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (28, 10, N'El estudiante no puede descargar los materiales de curso', CAST(N'2024-10-24T21:21:45.463' AS DateTime), N'pendiente')
INSERT [dbo].[Reportes_Problemas] ([id_reporte], [id_usuario], [descripcion], [fecha_reporte], [estado]) VALUES (29, 11, N'Problemas al enviar consultas al profesor a través del sistema.', CAST(N'2024-10-24T21:21:55.873' AS DateTime), N'en proceso')
SET IDENTITY_INSERT [dbo].[Reportes_Problemas] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuarios] ON 

INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (2, N'roberto.iglesias@correo.com', N'1234', N'administrador', CAST(N'2024-09-29T17:29:54.113' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (3, N'Administrador@gmail.com', N'4321', N'administrador', CAST(N'2024-09-29T17:51:54.963' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (5, N'Alumno@example.com', N'Contra123', N'Estudiante', CAST(N'2024-10-04T02:45:51.527' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (6, N'savi@gmail.com', N'654321', N'Estudiante', CAST(N'2024-10-18T03:42:56.753' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (10, N'steven@gmail.com', N'654321', N'Estudiante', CAST(N'2024-10-19T17:34:53.333' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (11, N'steven2@gmail.com', N'123456', N'Estudiante', CAST(N'2024-10-19T17:35:16.967' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (16, N'robert@gmail.com', N'roberto123', N'Profesor', CAST(N'2024-10-19T17:53:34.323' AS DateTime))
INSERT [dbo].[Usuarios] ([id_usuario], [correo], [contrasena], [tipo_usuario], [fecha_registro]) VALUES (17, N'profesorEjemplo@gmail.com', N'profesor', N'Administrador', CAST(N'2024-10-19T17:56:24.643' AS DateTime))
SET IDENTITY_INSERT [dbo].[Usuarios] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Usuarios__2A586E0B0423ADC5]    Script Date: 24/10/2024 22:33:33 ******/
ALTER TABLE [dbo].[Usuarios] ADD UNIQUE NONCLUSTERED 
(
	[correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__Usuarios__2A586E0B9D62A227]    Script Date: 24/10/2024 22:33:33 ******/
ALTER TABLE [dbo].[Usuarios] ADD UNIQUE NONCLUSTERED 
(
	[correo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Reportes_Problemas] ADD  DEFAULT (getdate()) FOR [fecha_reporte]
GO
ALTER TABLE [dbo].[Reportes_Problemas] ADD  DEFAULT ('pendiente') FOR [estado]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT (getdate()) FOR [fecha_registro]
GO
ALTER TABLE [dbo].[Estudiantes]  WITH CHECK ADD FOREIGN KEY([id_usuario])
REFERENCES [dbo].[Usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[Estudiantes]  WITH CHECK ADD FOREIGN KEY([id_usuario])
REFERENCES [dbo].[Usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[Reportes_Problemas]  WITH CHECK ADD FOREIGN KEY([id_usuario])
REFERENCES [dbo].[Usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[Reportes_Problemas]  WITH CHECK ADD FOREIGN KEY([id_usuario])
REFERENCES [dbo].[Usuarios] ([id_usuario])
GO
ALTER TABLE [dbo].[Estudiantes]  WITH CHECK ADD CHECK  (([modalidad]='semipresencial' OR [modalidad]='virtual' OR [modalidad]='presencial'))
GO
ALTER TABLE [dbo].[Estudiantes]  WITH CHECK ADD CHECK  (([modalidad]='semipresencial' OR [modalidad]='virtual' OR [modalidad]='presencial'))
GO
ALTER TABLE [dbo].[Reportes_Problemas]  WITH CHECK ADD CHECK  (([estado]='resuelto' OR [estado]='en proceso' OR [estado]='pendiente'))
GO
ALTER TABLE [dbo].[Reportes_Problemas]  WITH CHECK ADD CHECK  (([estado]='resuelto' OR [estado]='en proceso' OR [estado]='pendiente'))
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD CHECK  (([tipo_usuario]='estudiante' OR [tipo_usuario]='profesor' OR [tipo_usuario]='administrador'))
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD CHECK  (([tipo_usuario]='estudiante' OR [tipo_usuario]='profesor' OR [tipo_usuario]='administrador'))
GO
/****** Object:  StoredProcedure [dbo].[GetAllEstudiantes]    Script Date: 24/10/2024 22:33:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllEstudiantes]
AS
BEGIN
    SELECT * FROM Estudiantes;
END;
GO
/****** Object:  StoredProcedure [dbo].[GetAllReportesProblemas]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetAllReportesProblemas]
AS
BEGIN
    SELECT id_reporte, id_usuario, descripcion, fecha_reporte, estado
    FROM Reportes_Problemas;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ActualizarEstudiante]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Actualizar Estudiante
CREATE PROCEDURE [dbo].[sp_ActualizarEstudiante]
    @Carnet NVARCHAR(8),
    @Nombre NVARCHAR(100),
    @Apellido NVARCHAR(100),
    @Telefono NVARCHAR(10),
    @Carrera NVARCHAR(100),
    @Modalidad NVARCHAR(20),
    @correo_estudiante NVARCHAR(100),
    @IdUsuario INT
AS
BEGIN
    UPDATE Estudiantes
    SET nombre = @Nombre, apellido = @Apellido, telefono = @Telefono, carrera = @Carrera, modalidad = @Modalidad, correo_estudiante = @correo_estudiante, id_usuario = @IdUsuario
    WHERE carnet = @Carnet;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ActualizarReporteProblema]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ActualizarReporteProblema]
    @id_reporte INT,
    @descripcion NVARCHAR(MAX),
    @estado NVARCHAR(20)
AS
BEGIN
    UPDATE Reportes_Problemas
    SET descripcion = @descripcion, estado = @estado
    WHERE id_reporte = @id_reporte;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ActualizarUsuario]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ActualizarUsuario]
    @IdUsuario INT,
    @Correo NVARCHAR(100),
    @Contrasena NVARCHAR(255),
    @TipoUsuario NVARCHAR(20)
AS
BEGIN
    UPDATE Usuarios
    SET correo = @Correo, contrasena = @Contrasena, tipo_usuario = @TipoUsuario
    WHERE id_usuario = @IdUsuario;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_EliminarEstudiante]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_EliminarEstudiante]
    @Carnet NVARCHAR(8)
AS
BEGIN
    DELETE FROM Estudiantes
    WHERE carnet = @Carnet;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_EliminarReporteProblema]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_EliminarReporteProblema]
    @id_reporte INT
AS
BEGIN
    DELETE FROM Reportes_Problemas
    WHERE id_reporte = @id_reporte;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_EliminarUsuario]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_EliminarUsuario]
    @IdUsuario INT
AS
BEGIN
    DELETE FROM Usuarios
    WHERE id_usuario = @IdUsuario;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertarEstudiante]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertarEstudiante]
    @Carnet NVARCHAR(8),
    @Nombre NVARCHAR(100),
    @Apellido NVARCHAR(100),
    @Telefono NVARCHAR(10),
    @Carrera NVARCHAR(100),
    @Modalidad NVARCHAR(20),
    @correo_estudiante NVARCHAR(100),
    @IdUsuario INT
AS
BEGIN
    INSERT INTO Estudiantes (carnet, nombre, apellido, telefono, carrera, modalidad, correo_estudiante, id_usuario)
    VALUES (@Carnet, @Nombre, @Apellido, @Telefono, @Carrera, @Modalidad, @correo_estudiante, @IdUsuario);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertarReporteProblema]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertarReporteProblema]
    @id_usuario INT,
    @descripcion NVARCHAR(MAX),
    @estado NVARCHAR(20)
AS
BEGIN
    INSERT INTO Reportes_Problemas (id_usuario, descripcion, fecha_reporte, estado)
    VALUES (@id_usuario, @descripcion, GETDATE(), @estado);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertarUsuario]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertarUsuario]
    @Correo NVARCHAR(100),
    @Contrasena NVARCHAR(255),
    @TipoUsuario NVARCHAR(20)
AS
BEGIN
    INSERT INTO Usuarios (correo, contrasena, tipo_usuario)
    VALUES (@Correo, @Contrasena, @TipoUsuario);
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerEstudiantePorCarnet]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ObtenerEstudiantePorCarnet]
    @Carnet NVARCHAR(8)
AS
BEGIN
    SELECT * FROM Estudiantes
    WHERE carnet = @Carnet;
END;

GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerReportePorId]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_ObtenerReportePorId]
    @id_reporte INT
AS
BEGIN
    SELECT id_reporte, id_usuario, descripcion, fecha_reporte, estado
    FROM Reportes_Problemas
    WHERE id_reporte = @id_reporte;
END;
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerReportesPorUsuario]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ObtenerReportesPorUsuario]
    @IdUsuario INT
AS
BEGIN
    SELECT * FROM Reportes_Problemas
    WHERE id_usuario = @IdUsuario;
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ObtenerUsuarioPorId]    Script Date: 24/10/2024 22:33:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_ObtenerUsuarioPorId]
    @IdUsuario INT
AS
BEGIN
    SELECT * FROM Usuarios
    WHERE id_usuario = @IdUsuario;
END
GO
USE [master]
GO
ALTER DATABASE [ProyectoComputo2] SET  READ_WRITE 
GO
