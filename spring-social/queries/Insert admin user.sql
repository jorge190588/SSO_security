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
('OPTION',0,0,getDate(),null) ;

insert into rol (name,created_by,updated_by, created_at, updated_at) values ('admin',0,0,getDate(),null);

insert into form_Group (name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at) 
values ('Principal',1,1,0,'home',0,0,getDate(),null),('Seguridad',2,1,1,'security',0,0,getDate(),null);

insert into form (name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at) 
values 
('Inicio',1,'/',1,'home',0,0,getDate(),null),
('Barriles',1,'/barril',1,'delete_outline',0,0,getDate(),null),
('Tarimas',1,'/tarima',1,'dns',0,0,getDate(),null),
('Mi perfil',2,'/profile',1,'person',0,0,getDate(),null),
('Usuarios',2,'/user',1,'people',0,0,getDate(),null),
('Roles',2,'/rol',1,'supervised_user_circle',0,0,getDate(),null),
('Acciones de roles',2,'/rolFormAction',1,'supervised_user_circle',0,0,getDate(),null),
('Acciones por formulario',2,'/formAction',1,'supervised_user_circle',0,0,getDate(),null);

insert into action (name,path,method_id,created_by,updated_by, created_at, updated_at) 
values ('Crear','create',1,0,0,getDate(),null),
('Modificar','update',2,0,0,getDate(),null),
('Anular','cancel',5,0,0,getDate(),null),
('Listado','List',1,0,0,getDate(),null),
('Ver','view',1,0,0,getDate(),null),
('Listado permisos por rol','listByRolId',1,0,0,getDate(),null);

insert into form_action (form_id,action_id,item_order,created_by,updated_by, created_at, updated_at) 
values 
(1,1,1,0,0,getDate(),null),(1,2,2,0,0,getDate(),null),(1,3,3,0,0,getDate(),null),(1,4,4,0,0,getDate(),null),(1,5,5,0,0,getDate(),null),
(2,1,1,0,0,getDate(),null),(2,2,2,0,0,getDate(),null),(2,3,3,0,0,getDate(),null),(2,4,4,0,0,getDate(),null),(2,5,5,0,0,getDate(),null),
(3,1,1,0,0,getDate(),null),(3,2,2,0,0,getDate(),null),(3,3,3,0,0,getDate(),null),(3,4,4,0,0,getDate(),null),(3,5,5,0,0,getDate(),null),
(4,1,1,0,0,getDate(),null),(4,2,2,0,0,getDate(),null),(4,3,3,0,0,getDate(),null),(4,4,4,0,0,getDate(),null),(4,5,5,0,0,getDate(),null),
(5,1,1,0,0,getDate(),null),(5,2,2,0,0,getDate(),null),(5,3,3,0,0,getDate(),null),(5,4,4,0,0,getDate(),null),(5,5,5,0,0,getDate(),null),
(6,1,1,0,0,getDate(),null),(6,2,2,0,0,getDate(),null),(6,3,3,0,0,getDate(),null),(6,4,4,0,0,getDate(),null),(6,5,5,0,0,getDate(),null),
(7,1,1,0,0,getDate(),null),(7,2,2,0,0,getDate(),null),(7,3,3,0,0,getDate(),null),(7,4,4,0,0,getDate(),null),(7,5,5,0,0,getDate(),null),
(8,1,1,0,0,getDate(),null),(8,2,2,0,0,getDate(),null),(8,3,3,0,0,getDate(),null),(8,4,4,0,0,getDate(),null),(8,5,5,0,0,getDate(),null), (8,6,6,0,0,getDate(),null) ;

insert into rol_form_action (rol_id,form_action_id,created_by,updated_by, created_at, updated_at) 
values 
(1,1,0,0,getDate(),null),(1,2,0,0,getDate(),null),(1,3,0,0,getDate(),null),(1,4,0,0,getDate(),null),(1,5,0,0,getDate(),null),
(1,6,0,0,getDate(),null),(1,7,0,0,getDate(),null),(1,8,0,0,getDate(),null),(1,9,0,0,getDate(),null),(1,10,0,0,getDate(),null),
(1,11,0,0,getDate(),null),(1,12,0,0,getDate(),null),(1,13,0,0,getDate(),null),(1,14,0,0,getDate(),null),(1,15,0,0,getDate(),null),
(1,16,0,0,getDate(),null),(1,17,0,0,getDate(),null),(1,18,0,0,getDate(),null),(1,19,0,0,getDate(),null),(1,20,0,0,getDate(),null),
(1,21,0,0,getDate(),null),(1,22,0,0,getDate(),null),(1,23,0,0,getDate(),null),(1,24,0,0,getDate(),null),(1,25,0,0,getDate(),null),
(1,26,0,0,getDate(),null),(1,27,0,0,getDate(),null),(1,28,0,0,getDate(),null),(1,29,0,0,getDate(),null),(1,30,0,0,getDate(),null),
(1,31,0,0,getDate(),null),(1,32,0,0,getDate(),null),(1,33,0,0,getDate(),null),(1,34,0,0,getDate(),null),(1,35,0,0,getDate(),null),
(1,36,0,0,getDate(),null),(1,37,0,0,getDate(),null),(1,38,0,0,getDate(),null),(1,39,0,0,getDate(),null),(1,40,0,0,getDate(),null),(1,41,0,0,getDate(),null);


insert into users (email,email_verified, image_url,name,password,provider,provider_id,rol_id, created_by, updated_by,created_at) 
values('netneill@hotmail.com',0,null,'jorge','$2a$10$EJJ2s.XTKxWkwDaprqJdTuglXEhUdBOOARDKexBNQdX8lHfyOB5M.','local',null,1,0,0, getDate());

-- clave de jorge es jorge1919
select * from form_group
select * from form
select * from action
select * from rol_form_action
select * from users
select * from form_action 
select * from method order by id
select * from rol



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


select * from rol_form_action
delete from  rol_form_action where id in (3,5)