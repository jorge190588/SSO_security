use securitydata;

delete from rol_form_action;
delete from form_action;
delete from users;
delete from rol;
delete from form;
delete from form_Group;
delete from action;
delete from method;

DBCC CHECKIDENT ('rol', RESEED, 0)
DBCC CHECKIDENT ('form_Group', RESEED, 0)
DBCC CHECKIDENT ('form', RESEED, 0)
DBCC CHECKIDENT ('action', RESEED, 0)
DBCC CHECKIDENT ('form_action', RESEED, 0)
DBCC CHECKIDENT ('rol_form_action', RESEED, 0)
DBCC CHECKIDENT ('users', RESEED, 0)
DBCC CHECKIDENT ('method', RESEED, 0)


insert into method (name) values ('GET'),('POST'),('PUT'),('DEL'),('PATH'),('OPTION') ;

insert into rol (name) values ('admin');

insert into form_Group (name,item_order,show_in_menu,is_group_of_pages) 
values ('Inicio',1,1,0),('Perfil',2,1,1);

insert into form (name,form_group_id, path, show_in_menu) 
values 
('Inicio',1,'inicio',1),
('Mi perfil',1,'user',1);

insert into action (name,path,method_id) 
values ('Crear','create',1),('Modificar','update',2),('Anular','cancel',5),('Listado','List',1),('Ver','view',1);

insert into form_action (form_id,action_id,item_order) 
values (1,1,1),(1,2,2),(1,3,3),(1,4,4),(1,5,5),
(2,1,1),(2,2,2),(2,3,3),(2,4,4),(2,5,5);

insert into rol_form_action (rol_id,form_action_id) values (1,1),(1,2),(1,3),(1,4),(1,5),
(1,6),(1,7),(1,8),(1,9),(1,10);

insert into users (email,email_verified, image_url,name,password,provider,provider_id,rol_id) values('netneill@hotmail.com',0,null,'jorge','$2a$10$EJJ2s.XTKxWkwDaprqJdTuglXEhUdBOOARDKexBNQdX8lHfyOB5M.','local',null,1);

-- clave de jorge es jorge1919
select * from form_group
select * from form
select * from action
select * from rol_form_action
select * from users
select * from form_action
select * from method order by id
select * from rol



select rolformact0_.id as id1_6_, rolformact0_.form_action_id as form_act2_6_, rolformact0_.rol_id as rol_id3_6_ , action2_.path, formaction1_.*
from rol_form_action rolformact0_ 
cross join form_action formaction1_ 
cross join action action2_ 
where rolformact0_.form_action_id=formaction1_.id 
and formaction1_.action_id=action2_.id and rolformact0_.rol_id=1 
and action2_.path='view'
