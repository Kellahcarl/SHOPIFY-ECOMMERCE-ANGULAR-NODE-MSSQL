CREATE or ALTER PROCEDURE getProducts
as
	
set nocount on;

begin
	select *  from products 
    where isDeleted = 0
   
end;