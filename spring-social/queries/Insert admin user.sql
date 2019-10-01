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

insert into form_Group (name,item_order,show_in_menu,is_group_of_pages,icon) 
values ('Principal',1,1,0,'home'),('Seguridad',2,1,1,'security');

insert into form (name,form_group_id, path, show_in_menu,icon) 
values 
('Inicio',1,'/',1,'home'),
('Barriles',1,'/barril',1,'delete_outline'),
('Tarimas',1,'/tarima',1,'dns'),
('Mi perfil',2,'/profile',1,'person'),
('Usuarios',2,'/user',1,'people'),
('Roles',2,'/rol',1,'supervised_user_circle');

insert into action (name,path,method_id) 
values ('Crear','create',1),('Modificar','update',2),('Anular','cancel',5),('Listado','List',1),('Ver','view',1);

insert into form_action (form_id,action_id,item_order) 
values 
(1,1,1),(1,2,2),(1,3,3),(1,4,4),(1,5,5),
(2,1,1),(2,2,2),(2,3,3),(2,4,4),(2,5,5),
(3,1,1),(3,2,2),(3,3,3),(3,4,4),(3,5,5),
(4,1,1),(4,2,2),(4,3,3),(4,4,4),(4,5,5),
(5,1,1),(5,2,2),(5,3,3),(5,4,4),(5,5,5),
(6,1,1),(6,2,2),(6,3,3),(6,4,4),(6,5,5);

insert into rol_form_action (rol_id,form_action_id) 
values 
(1,1),(1,2),(1,3),(1,4),(1,5),
(1,6),(1,7),(1,8),(1,9),(1,10),
(1,11),(1,12),(1,13),(1,14),(1,15),
(1,16),(1,17),(1,18),(1,19),(1,20),
(1,21),(1,22),(1,23),(1,24),(1,25),
(1,26),(1,27),(1,28),(1,29),(1,30);


insert into users (email,email_verified, image_url,name,password,provider,provider_id,rol_id, created_by, updated_by) 
values('netneill@hotmail.com',0,null,'jorge','$2a$10$EJJ2s.XTKxWkwDaprqJdTuglXEhUdBOOARDKexBNQdX8lHfyOB5M.','local',null,1,0,0);

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


select * from rol_form_action

formGroup form accion rol_rol_action


update users set created_by=0, updated_by=0, created_at=null, updated_at=null




/*VALIDACIONES*/
delete from element_type;
delete from element;
delete from entiti;

DBCC CHECKIDENT ('entiti', RESEED, 0)
DBCC CHECKIDENT ('element_type', RESEED, 0)
DBCC CHECKIDENT ('element', RESEED, 0)

insert into entiti (name,version) values('users',1) ;
insert into element_type (name,version) values ('input',1), ('hidden',1), ('h3',1), ('password',1), ('checkbox',1), ('dropdown',1), ('textarea',1), ('file',1);

insert into element (created_at,idelement,is_create,is_delete,is_required,is_unique, is_update,
		label,mask,mask_property,order_element,pattern, pattern_message,
updated_at, version, element_type_id, entiti_id) 
values
(getdate(),'email',1,0,1,1,1,
'Correo electronico','','',1,'^([\w-\\.]+){1,25}@([\w]+){2,25}.[a-z]{2,10}$','Campo requiere un correo válido (Ejemplo: jorge@gmail.com)',
null,1,1,1),
(getdate(),'name',1,0,1,1,1,
'Usuario','','',1,'^([\w-\\.]+){4,20}$','Campo requiere un texto de 4 a 20 caracteres (Ejemplo: jorgesantos1)',
null,1,1,1)

select * from element
select * from entiti
select * from element_type
