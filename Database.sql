USE [master]
GO
/****** Object:  Database [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495]    Script Date: 21/4/2023 8:57:40 AM ******/
CREATE DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495', FILENAME = N'C:\Users\j.saldivar\Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495_log', FILENAME = N'C:\Users\j.saldivar\Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ARITHABORT OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET  MULTI_USER 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET QUERY_STORE = OFF
GO
USE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Precio] [nvarchar](max) NOT NULL,
	[Author] [nvarchar](max) NOT NULL,
	[IDCategory] [int] NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[Cantidad] [int] NOT NULL,
	[Imagen] [text] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  View [dbo].[vwDashboard]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[vwDashboard] AS 
SELECT 
	(SELECT COUNT(*) FROM dbo.[User]) total_user, 
	(SELECT COUNT(*) FROM dbo.[Products]) total_products,
	(SELECT COUNT(*) FROM dbo.[Categories]) total_categories;
GO
/****** Object:  Table [dbo].[Compra]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Compra](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_compra] [int] NOT NULL,
	[id_user] [int] NULL,
	[id_product] [int] NULL,
	[amount] [int] NULL,
	[price] [nvarchar](50) NULL,
	[total_price] [nvarchar](50) NULL,
	[date] [datetime] NULL,
 CONSTRAINT [PK_Compra] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vwMaxId]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[vwMaxId] as
select
	(select max(id_compra) from Compra) MaxID
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Report]    Script Date: 21/4/2023 8:57:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Report](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[id_compra] [int] NULL,
	[total_price] [nvarchar](50) NULL,
	[date] [datetime] NULL,
 CONSTRAINT [PK_Report] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20230307182029_data', N'7.0.3')
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name]) VALUES (1, N'test')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (2, N'prueba')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10003, N'Bebida')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10004, N'Comida')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10005, N'Objeto')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10006, N'Electrico')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10008, N'Limpieza')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10009, N'Calzado')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10010, N'VideoJuegos')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10011, N'Carton')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10012, N'Madera')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10014, N'Metal')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (10015, N'Químico ')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[Compra] ON 

INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (13, 1, 3, 9, 1, N'170.00', N'170', CAST(N'2023-04-13T14:53:34.140' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (14, 1, 3, 10015, 1, N'201.00', N'201', CAST(N'2023-04-13T14:53:34.140' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (15, 1, 3, 10012, 1, N'200.00', N'200', CAST(N'2023-04-13T14:53:34.167' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (16, 1, 3, 10005, 1, N'250.00', N'250', CAST(N'2023-04-13T14:53:34.193' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (17, 2, 3, 10013, 1, N'210.00', N'210', CAST(N'2023-04-13T14:57:16.757' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (18, 2, 3, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-13T14:57:16.763' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (19, 3, 3, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-13T15:00:44.697' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (20, 3, 3, 10012, 1, N'200.00', N'200', CAST(N'2023-04-13T15:00:44.697' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (21, 4, 3, 10016, 1, N'10.00', N'10', CAST(N'2023-04-13T15:06:10.847' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (22, 5, 1, 1, 1, N'10.00', N'10', CAST(N'2023-04-13T15:08:28.030' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (23, 5, 1, 10010, 1, N'2500.00', N'2500', CAST(N'2023-04-13T15:08:28.030' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (24, 6, 3, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-13T15:18:49.947' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (25, 7, 3, 10013, 1, N'210.00', N'210', CAST(N'2023-04-13T15:20:31.173' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (26, 8, 6, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-13T15:34:34.267' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (27, 9, 6, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-13T15:35:49.387' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (28, 10, 3, 10017, 2, N'1832.00', N'3664', CAST(N'2023-04-14T11:37:59.073' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (29, 11, 6, 9, 3, N'170.00', N'510', CAST(N'2023-04-14T11:43:41.453' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (30, 12, 6, 1, 1, N'10.00', N'10', CAST(N'2023-04-14T11:49:52.517' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (31, 12, 6, 2, 1, N'190.00', N'190', CAST(N'2023-04-14T11:49:52.570' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1002, 13, 3, 10017, 3, N'1832.00', N'5496', CAST(N'2023-04-17T16:46:20.410' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1003, 14, 12, 10005, 2, N'250.00', N'500', CAST(N'2023-04-18T14:09:16.707' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1004, 15, 12, 1, 3, N'10.00', N'30', CAST(N'2023-04-18T14:15:27.743' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1005, 16, 12, 10005, 1, N'250.00', N'250', CAST(N'2023-04-18T14:21:21.090' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1006, 16, 12, 10013, 1, N'210.00', N'210', CAST(N'2023-04-18T14:21:21.090' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1007, 17, 12, 10017, 1, N'1832.00', N'1832', CAST(N'2023-04-18T14:42:00.517' AS DateTime))
INSERT [dbo].[Compra] ([id], [id_compra], [id_user], [id_product], [amount], [price], [total_price], [date]) VALUES (1008, 18, 6, 10005, 1, N'250.00', N'250', CAST(N'2023-04-19T16:09:50.043' AS DateTime))
SET IDENTITY_INSERT [dbo].[Compra] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (1, N'Product name new Edited00000', N'product description', N'10.00', N'athor edited', 2, CAST(N'2023-04-10T15:47:50.8166667' AS DateTime2), 1, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (2, N'Cocacola', N'Pack de Cocacola', N'190.00', N'Pepsi', 10003, CAST(N'2023-04-11T08:44:44.5133333' AS DateTime2), 5, N'https://i.imgur.com/uVxl0qr.jpg')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (9, N'Pepsi', N'Pack de Pepsis', N'170.00', N'Cocacola', 2, CAST(N'2023-04-10T15:48:04.7466667' AS DateTime2), 5, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10005, N'Lonchera', N'Lonchera de color negra y roja', N'250.00', N'Backter NCS', 1, CAST(N'2023-03-16T16:39:42.5466667' AS DateTime2), 1, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10006, N'Destapador', N'Destapador', N'100.00', N'Julio', 10005, CAST(N'2023-03-15T16:51:44.5066667' AS DateTime2), 0, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10008, N'Bombillo', N'Bombillo de 9 v', N'300.00', N'Linex', 10006, CAST(N'2023-03-16T10:39:45.5466667' AS DateTime2), 0, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10009, N'CHOCORICA', N'chocolate con leche', N'90.00', N'Rica', 10003, CAST(N'2023-03-16T10:42:20.8666667' AS DateTime2), 1, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10010, N'Anillo DANA', N'anillo de oro de 3 k', N'2500.00', N'Taseltx', 2, CAST(N'2023-04-10T15:48:21.1900000' AS DateTime2), 3, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10012, N'Bombilla LED', N'Bombilla LED 2V', N'200.00', N'Gumbe', 10006, CAST(N'2023-03-21T09:46:32.1400000' AS DateTime2), 1, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10013, N'Bombilla LED #2', N'Bombilla LED Color Amarillo 2V', N'210.00', N'Gumbe', 10006, CAST(N'2023-03-23T12:09:25.0133333' AS DateTime2), 0, N'https://i.imgur.com/NAPSOAt.jpg')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10014, N'Uvas', N'Pack Uvas 1 LB', N'142.00', N'Hol', 10004, CAST(N'2023-03-21T09:58:13.7733333' AS DateTime2), 1, NULL)
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10015, N'Corn flakes', N'Es un cereal de desayuno.', N'201.00', N'Will Kellogg', 10004, CAST(N'2023-03-23T11:30:31.4733333' AS DateTime2), 1, N'https://i.imgur.com/HX14S2r.jpg')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10016, N'test', N'test', N'10.00', N'test', 10006, CAST(N'2023-03-23T14:37:45.8933333' AS DateTime2), 9, N'https://i.imgur.com/f3Tfqq1.jpg')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10017, N'GTA V', N'Videojuego de Accion, +18.', N'1832.00', N'Rockstart', 10010, CAST(N'2023-04-18T14:41:40.9266667' AS DateTime2), 2, N'https://i.imgur.com/ZMcUZ3v.png')
INSERT [dbo].[Products] ([Id], [Name], [Description], [Precio], [Author], [IDCategory], [Date], [Cantidad], [Imagen]) VALUES (10018, N'Vite', N'Description Vite', N'100.00', N'vite', 1, CAST(N'2023-03-30T11:35:11.9800000' AS DateTime2), 1, N'https://i.imgur.com/dYrhtkV.png')
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[Report] ON 

INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (6, 1, N'821.00', CAST(N'2023-04-13T14:53:33.130' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (7, 2, N'2042.00', CAST(N'2023-04-13T14:57:15.790' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (8, 3, N'2032.00', CAST(N'2023-04-13T15:00:43.707' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (9, 4, N'10.00', CAST(N'2023-04-13T15:06:09.930' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (10, 5, N'2510.00', CAST(N'2023-04-13T15:08:27.053' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (11, 6, N'1832.00', CAST(N'2023-04-13T15:18:48.980' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (12, 7, N'210.00', CAST(N'2023-04-13T15:20:30.190' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (13, 8, N'1832.00', CAST(N'2023-04-13T15:34:33.280' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (14, 9, N'1832.00', CAST(N'2023-04-13T15:35:48.403' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (15, 10, N'3664', CAST(N'2023-04-14T11:37:59.070' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (16, 11, N'510', CAST(N'2023-04-14T11:43:41.467' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (17, 12, N'200.00', CAST(N'2023-04-14T11:49:51.530' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1002, 13, N'5496', CAST(N'2023-04-17T16:46:20.410' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1003, 14, N'500', CAST(N'2023-04-18T14:09:16.707' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1004, 15, N'30', CAST(N'2023-04-18T14:15:27.740' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1005, 16, N'460.00', CAST(N'2023-04-18T14:21:20.070' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1007, 17, N'1832.00', CAST(N'2023-04-18T14:42:00.530' AS DateTime))
INSERT [dbo].[Report] ([Id], [id_compra], [total_price], [date]) VALUES (1008, 18, N'250.00', CAST(N'2023-04-19T16:09:49.060' AS DateTime))
SET IDENTITY_INSERT [dbo].[Report] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (1, N'Arnol', N'arnol@exa.com', N'9pb5G40cM9jSNlNyub/Rag==', CAST(N'2023-03-07T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (2, N'Castro', N'castro@exa.com', N'aVyPNOq55JJJVq6IT8VPmIE58paj9Ty8Yp9yQW+F0+0=', CAST(N'2003-07-17T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (3, N'admin', N'admin@exa.com', N'NgKlzXP4zQ+eLvybJ8aq7g==', CAST(N'2010-10-17T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (4, N'Emilio', N'e@e.com', N'6pZN+nvaC4AIt326cmKLrA==', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (5, N'Alejandro', N'a@a.com', N'1L9LOjkEOiissPvuN0J5YyNOaVqjC9XAuX7i3up3jys=', CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (6, N'Isma', N'i@i.com', N'Ofz6Bbyf2G/pa7dhhMlNCQ==', CAST(N'2002-03-04T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (7, N'LosJefes', N'jefe@exa.com', N'ASJdEmqfBHZfWxWum+ax/w==', CAST(N'2023-03-20T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (8, N'Roberto', N'roberto@exa.com', N'MABRSGwj0lvLPGlKw4kqQg==', CAST(N'2002-12-10T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (10, N'Pedro', N'pedro@exa.com', N'zZ9R88lrmeNmnP1FguCGwg==', CAST(N'2000-12-20T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (11, N'Alexander', N'alexander@exa.com', N'AO02gILTB3e6Tz6fFSFgIlscCRT9G9993anEAdQqOFQ=', CAST(N'2000-12-14T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[User] ([Id], [Name], [Email], [Password], [Date]) VALUES (12, N'Maria', N'maria@exa.com', N'1c/DtU04myjut7lpaq6cCw==', CAST(N'2001-03-04T00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Products_Cantidad]  DEFAULT ((1)) FOR [Cantidad]
GO
USE [master]
GO
ALTER DATABASE [Api_UserContext-0abc0bc6-a9be-4f38-85df-17c861337495] SET  READ_WRITE 
GO
