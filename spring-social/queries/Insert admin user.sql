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

insert into method (name,created_by,updated_by, created_at, updated_at) 
values 
('GET',0,0,getDate(),null),
('POST',0,0,getDate(),null),
('PUT',0,0,getDate(),null),
('DEL',0,0,getDate(),null),
('PATH',0,0,getDate(),null),
('OPTION',0,0,getDate(),null);

insert into rol (name,created_by,updated_by, created_at, updated_at) values ('admin',0,0,getDate(),null);

insert into form_Group (name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at) 
values ('Principal',1,1,0,'home',0,0,getDate(),null),('Seguridad',2,1,1,'security',0,0,getDate(),null);

insert into form (name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at) 
values 
('Inicio',1,'/',1,'home',0,0,getDate(),null),
('Mi perfil',2,'/profile',1,'person',0,0,getDate(),null),
('Usuarios',2,'/user',1,'people',0,0,getDate(),null),
('Roles',2,'/rol',1,'supervised_user_circle',0,0,getDate(),null),
('Acciones de roles',2,'/rolFormAction',1,'supervised_user_circle',0,0,getDate(),null),
('Acciones por formulario',2,'/formAction',1,'supervised_user_circle',0,0,getDate(),null),
('Barriles',1,'/barril',1,'delete_outline',0,0,getDate(),null),
('Tarimas',1,'/tarima',1,'dns',0,0,getDate(),null);

insert into action (name,path,method_id,created_by,updated_by, created_at, updated_at) 
values ('Crear','create',2,0,0,getDate(),null),
('Modificar','update',3,0,0,getDate(),null),
('Anular','cancel',5,0,0,getDate(),null),
('Listado','List',1,0,0,getDate(),null),
('Ver','view',1,0,0,getDate(),null),
('Eliminar','delete',4,0,0,getDate(),null),
('Listado permisos por rol','listByRolId',1,0,0,getDate(),null);

insert into form_action (form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) 
values 
(1,1,1,NULL,NULL,GETDATE(),NULL,0),
(1,2,2,NULL,NULL,GETDATE(),NULL,0),
(1,3,3,NULL,NULL,GETDATE(),NULL,0),
(1,4,4,NULL,NULL,GETDATE(),NULL,0),
(1,5,5,NULL,NULL,GETDATE(),NULL,0),
(1,6,6,NULL,NULL,GETDATE(),NULL,0),
(2,1,1,NULL,NULL,GETDATE(),NULL,0),
(2,2,2,NULL,NULL,GETDATE(),NULL,0),
(2,3,3,NULL,NULL,GETDATE(),NULL,0),
(2,4,4,NULL,NULL,GETDATE(),NULL,0),
(2,5,5,NULL,NULL,GETDATE(),NULL,0),
(2,6,6,NULL,NULL,GETDATE(),NULL,0),
(3,1,1,NULL,NULL,GETDATE(),NULL,0),
(3,2,2,NULL,NULL,GETDATE(),NULL,0),
(3,3,3,NULL,NULL,GETDATE(),NULL,0),
(3,4,4,NULL,NULL,GETDATE(),NULL,0),
(3,5,5,NULL,NULL,GETDATE(),NULL,0),
(3,6,6,NULL,NULL,GETDATE(),NULL,0),
(4,1,1,NULL,NULL,GETDATE(),NULL,0),
(4,2,2,NULL,NULL,GETDATE(),NULL,0),
(4,3,3,NULL,NULL,GETDATE(),NULL,0),
(4,4,4,NULL,NULL,GETDATE(),NULL,0),
(4,5,5,NULL,NULL,GETDATE(),NULL,0),
(4,6,6,NULL,NULL,GETDATE(),NULL,0),
(5,1,1,NULL,NULL,GETDATE(),NULL,0),
(5,2,2,NULL,NULL,GETDATE(),NULL,0),
(5,3,3,NULL,NULL,GETDATE(),NULL,0),
(5,4,4,NULL,NULL,GETDATE(),NULL,0),
(5,5,5,NULL,NULL,GETDATE(),NULL,0),
(5,6,6,NULL,NULL,GETDATE(),NULL,0),
(6,1,1,NULL,NULL,GETDATE(),NULL,0),
(6,2,2,NULL,NULL,GETDATE(),NULL,0),
(6,3,3,NULL,NULL,GETDATE(),NULL,0),
(6,4,4,NULL,NULL,GETDATE(),NULL,0),
(6,5,5,NULL,NULL,GETDATE(),NULL,0),
(6,6,6,NULL,NULL,GETDATE(),NULL,0),
(6,7,7,NULL,NULL,GETDATE(),NULL,0),
(7,1,1,NULL,NULL,GETDATE(),NULL,0),
(7,2,2,NULL,NULL,GETDATE(),NULL,0),
(7,3,3,NULL,NULL,GETDATE(),NULL,0),
(7,4,4,NULL,NULL,GETDATE(),NULL,0),
(7,5,5,NULL,NULL,GETDATE(),NULL,0),
(7,6,6,NULL,NULL,GETDATE(),NULL,0),
(8,1,1,NULL,NULL,GETDATE(),NULL,0),
(8,2,2,NULL,NULL,GETDATE(),NULL,0),
(8,3,3,NULL,NULL,GETDATE(),NULL,0),
(8,4,4,NULL,NULL,GETDATE(),NULL,0),
(8,5,5,NULL,NULL,GETDATE(),NULL,0),
(8,6,6,NULL,NULL,GETDATE(),NULL,0);


insert into rol_form_action (created_at,created_by,form_action_id,rol_id,updated_at,updated_by) 
values 
(getDate(),NULL,1,1,NULL,NULL),
(getDate(),NULL,2,1,NULL,NULL),
(getDate(),NULL,3,1,NULL,NULL),
(getDate(),NULL,4,1,NULL,NULL),
(getDate(),NULL,5,1,NULL,NULL),
(getDate(),NULL,6,1,NULL,NULL),
(getDate(),NULL,7,1,NULL,NULL),
(getDate(),NULL,8,1,NULL,NULL),
(getDate(),NULL,9,1,NULL,NULL),
(getDate(),NULL,10,1,NULL,NULL),
(getDate(),NULL,11,1,NULL,NULL),
(getDate(),NULL,12,1,NULL,NULL),
(getDate(),NULL,13,1,NULL,NULL),
(getDate(),NULL,14,1,NULL,NULL),
(getDate(),NULL,15,1,NULL,NULL),
(getDate(),NULL,16,1,NULL,NULL),
(getDate(),NULL,17,1,NULL,NULL),
(getDate(),NULL,18,1,NULL,NULL),
(getDate(),NULL,19,1,NULL,NULL),
(getDate(),NULL,20,1,NULL,NULL),
(getDate(),NULL,21,1,NULL,NULL),
(getDate(),NULL,22,1,NULL,NULL),
(getDate(),NULL,23,1,NULL,NULL),
(getDate(),NULL,24,1,NULL,NULL),
(getDate(),NULL,25,1,NULL,NULL),
(getDate(),NULL,26,1,NULL,NULL),
(getDate(),NULL,27,1,NULL,NULL),
(getDate(),NULL,28,1,NULL,NULL),
(getDate(),NULL,29,1,NULL,NULL),
(getDate(),NULL,30,1,NULL,NULL),
(getDate(),NULL,31,1,NULL,NULL),
(getDate(),NULL,32,1,NULL,NULL),
(getDate(),NULL,33,1,NULL,NULL),
(getDate(),NULL,34,1,NULL,NULL),
(getDate(),NULL,35,1,NULL,NULL),
(getDate(),NULL,36,1,NULL,NULL),
(getDate(),NULL,37,1,NULL,NULL),
(getDate(),NULL,38,1,NULL,NULL),
(getDate(),NULL,39,1,NULL,NULL),
(getDate(),NULL,40,1,NULL,NULL),
(getDate(),NULL,41,1,NULL,NULL),
(getDate(),NULL,42,1,NULL,NULL),
(getDate(),NULL,43,1,NULL,NULL),
(getDate(),NULL,44,1,NULL,NULL),
(getDate(),NULL,45,1,NULL,NULL),
(getDate(),NULL,46,1,NULL,NULL),
(getDate(),NULL,47,1,NULL,NULL),
(getDate(),NULL,48,1,NULL,NULL),
(getDate(),NULL,49,1,NULL,NULL);

insert into users (email,email_verified, image_url,name,password,provider,provider_id,rol_id, created_by, updated_by,created_at,is_cancel) 
values('netneill@hotmail.com',0,null,'jorge','$2a$10$EJJ2s.XTKxWkwDaprqJdTuglXEhUdBOOARDKexBNQdX8lHfyOB5M.','local',null,1,0,0, getDate(),0);


-- clave de jorge es jorge1919
select * from form_group
select * from form
select * from action
select * from rol_form_action
select * from users
select * from form_action 
select * from method order by id
select * from rol

update form_action set is_the_rol=1

/*VALIDACIONES*/
delete from element;
delete from element_type;
delete from entiti;

DBCC CHECKIDENT ('entiti', RESEED, 0)
DBCC CHECKIDENT ('element_type', RESEED, 0)
DBCC CHECKIDENT ('element', RESEED, 0)

insert into entiti (name,version) values('users',1) ;
insert into element_type (name,version)up values ('input',1), ('hidden',1), ('h3',1), ('password',1), ('checkbox',1), ('dropdown',1), ('textarea',1), ('file',1);

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

select id,action_id,form_id,item_order,1 'isTheRol',created_by,updated_by, created_at, updated_at
from form_action fa 
where fa.id in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = 1)
union all
select id,action_id,form_id,item_order,0 'isTheRol',created_by,updated_by, created_at, updated_at
from form_action fa 
where fa.id not in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = 1)


 
select id,action_id,form_id,item_order,1 'isTheRol',created_by,updated_by, created_at, updated_at
from form_action fa 
where fa.id in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = 1)
union all
select id,action_id,form_id,item_order,0 'isTheRol',created_by,updated_by, created_at, updated_at
from form_action fa 
where fa.id not in (select rfa.form_action_id from rol_form_action rfa where rfa.rol_id = 1)

update form_action set is_the_rol=0