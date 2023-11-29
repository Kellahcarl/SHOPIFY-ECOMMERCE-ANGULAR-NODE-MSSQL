CREATE OR ALTER  PROCEDURE [dbo].[registerUser](
	@user_id varchar(100),
	@user_name varchar(100),	
	@email varchar(250),
	@password varchar(250))
	
as

begin
	INSERT INTO dbo.users
	(user_id, user_name, email, password  )
	VALUES
	(@user_id,@user_name, @email, @password );
end;

SELECT * FROM dbo.users


INSERT INTO dbo.users
	(user_id, user_name, email, password  )
	VALUES
	('2332', 'abcd','abc@yopmail.com', '12345678' );

EXEC registerUser 
	@user_id = '2392', 
	@user_name = 'abcd',
	@email = 'abc@yopmail.com', 
	@password = '12345678'