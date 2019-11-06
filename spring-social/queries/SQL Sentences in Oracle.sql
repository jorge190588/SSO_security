use securitydata;

drop table ROL_FORM_ACTION;
drop table form_action;
drop table form;
drop table action;
drop table method;
drop table rol;
drop table form_group;
drop table users;
drop table system;
drop table element;
drop table element_type;
drop table entiti;


select * from rol_form_action;
select * from form_action;
select * from users;
select * from rol;
select * from form;
select * from form_Group;
select * from action;
select * from method;
select * from system;

delete from rol_form_action;
delete from form_action;
delete from users;
delete from rol;
delete from form;
delete from system;
delete from form_Group;
delete from action;
delete from method;
delete from system;
 

insert into system (id,name,created_by,updated_by, created_at, updated_at) values (1,'TRAZA_WEB',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into system (id,name,created_by,updated_by, created_at, updated_at) values (2,'TRAZA_APP',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

insert into method (id,name,created_by,updated_by, created_at, updated_at) values (1,'GET',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (2,'POST',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (3,'PUT',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (4,'DEL',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (5,'PATH',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (6,'OPTION',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

insert into rol (id,name,created_by,updated_by, created_at, updated_at) values (1,'admin',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- WEB
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (1,'Principal',1,1,0,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (2,'Seguridad',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (3,'Barriles',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (4,'Tarimas',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (5,'Pitas/Tanques',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);

-- MOBIL
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (6,'Principal',1,1,0,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (7,'Seguridad',10,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (8,'Barriles',2,1,1,'battery-full',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (9,'Tarimas',3,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (10,'Pitas/Tanques',4,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);

-- WEB
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (1,'Inicio',1,'/',1,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (2,'Mi perfil',2,'/profile',1,'person',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, '',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (3,'Usuarios',2,'/user',1,'people',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, '',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (4,'Roles',2,'/rol',1,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, '',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (5,'Acciones de roles',2,'/rolFormAction',0,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (6,'Acciones por formulario',2,'/formAction',0,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (7,'Formularios',2,'/form',1,'chrome_reader_mode',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (8,'Barriles',1,'/barril',1,'delete_outline',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (9,'Tarimas',1,'/tarima',1,'dns',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'',1);


-- MOBILE
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (10,'Inicio',6,'/',1,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Home',2);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (11,'Mi perfil',7,'/profile',1,'person',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, 'Profile',2);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (12,'Barriles',8,'/barril',1,'battery-full',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Barrel',2);
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen, system_id) 
values (13,'Tarimas',9,'/tarima',1,'dns',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Pallet',2);

-- WEB
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (1,'Crear','create',2,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (2,'Modificar','update',3,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (3,'Anular','cancel',5,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (4,'Listado','list',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (5,'Ver','view',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (6,'Eliminar','delete',4,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
-- insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (7,'Listado permisos por rol','listByRolId',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- GENERATED IN EXCEL FILE
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (1,1,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (2,1,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (3,1,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (4,1,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (5,1,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (6,1,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (7,2,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (8,2,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (9,2,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (10,2,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (11,2,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (12,2,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (13,3,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (14,3,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (15,3,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (16,3,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (17,3,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (18,3,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (19,4,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (20,4,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (21,4,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (22,4,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (23,4,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (24,4,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (25,5,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (26,5,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (27,5,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (28,5,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (29,5,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (30,5,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (31,6,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (32,6,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (33,6,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (34,6,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (35,6,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (36,6,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (37,7,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (38,7,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (39,7,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (40,7,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (41,7,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (42,7,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (43,8,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (44,8,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (45,8,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (46,8,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (47,8,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (48,8,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (49,9,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (50,9,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (51,9,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (52,9,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (53,9,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (54,9,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (55,10,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (56,10,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (57,10,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (58,10,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (59,10,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (60,10,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (61,11,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (62,11,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (63,11,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (64,11,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (65,11,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (66,11,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (67,12,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (68,12,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (69,12,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (70,12,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (71,12,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (72,12,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (73,13,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (74,13,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (75,13,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (76,13,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (77,13,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (78,13,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);




-- GENERATED IN EXCEL FILE
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,1,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (2,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,2,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (3,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,3,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (4,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,4,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (5,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,5,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (6,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,6,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (7,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,7,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (8,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,8,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (9,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,9,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (10,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,10,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (11,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,11,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (12,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,12,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (13,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,13,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (14,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,14,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (15,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,15,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (16,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,16,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (17,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,17,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (18,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,18,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (19,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,19,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (20,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,20,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (21,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,21,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (22,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,22,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (23,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,23,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (24,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,24,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (25,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,25,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (26,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,26,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (27,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,27,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (28,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,28,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (29,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,29,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (30,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,30,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (31,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,31,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (32,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,32,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (33,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,33,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (34,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,34,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (35,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,35,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (36,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,36,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (37,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,37,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (38,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,38,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (39,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,39,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (40,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,40,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (41,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,41,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (42,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,42,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (43,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,43,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (44,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,44,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (45,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,45,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (46,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,46,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (47,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,47,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (48,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,48,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (49,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,49,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (50,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,50,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (51,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,51,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (52,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,52,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (53,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,53,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (54,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,54,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (55,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,55,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (56,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,56,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (57,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,57,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (58,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,58,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (59,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,59,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (60,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,60,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (61,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,61,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (62,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,62,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (63,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,63,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (64,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,64,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (65,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,65,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (66,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,66,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (67,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,67,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (68,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,68,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (69,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,69,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (70,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,70,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (71,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,71,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (72,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,72,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (73,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,73,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (74,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,74,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (75,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,75,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (76,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,76,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (77,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,77,1,NULL,NULL);
insert into rol_form_action (id,created_at,created_by,form_action_id,rol_id,updated_at,updated_by) values  (78,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,78,1,NULL,NULL);


insert into users (id,email,email_verified, image_url,name,password,provider,provider_id,rol_id, created_by, updated_by,created_at,is_cancel) 
values(1,'netneill@hotmail.com',0,null,'jorge','$2a$10$EJJ2s.XTKxWkwDaprqJdTuglXEhUdBOOARDKexBNQdX8lHfyOB5M.','local',null,1,0,0, TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),0);

-- clave de jorge es jorge1919
select * from form_group;
select * from form;
select * from system;
select * from action;
select * from rol_form_action;
select * from users;
select * from form_action ;
select * from method order by id;
select * from rol;

-- ROL FORM ACTION
select	fa.id, fa.form_id, fa.action_id, fa.item_order, 
					case when (select count(*) from rol_form_action rfa where rfa.form_action_id=fa.id and rfa.rol_id= 1 )>0 then 1 else 0 end is_the_rol, 
					f.name form, fg.name formGroup, a.name action, fa.id form_action_id, 1 rol_id, f.path formPath, a.path actionPath,s.name 
			from form_action fa 
			inner join form f on fa.form_id=f.id
			inner join system s on f.system_id=s.id
			inner join form_group fg on f.form_group_id=fg.id 
			inner join action a on fa.action_id=a.id


-- GET MENU
select distinct f.*, fg.item_order
			from form f 
      inner join form_group fg on f.form_group_id=fg.id
			inner join system s on f.system_id=s.id 
			inner join form_action fa on f.id= fa.form_id 
			inner join action a on a.id=fa.action_id 
			inner join rol_form_action rfa on fa.id=rfa.form_action_id 
			where  rfa.rol_id = 1 and s.name= 'TRAZA_APP'
      ORDER BY fg.item_order ASC
      
select distinct f.*, fg.item_order 
inner join form_group fg on f.form_group_id=fg.id from form f inner join system s on f.system_id=s.id inner join form_action fa on f.id= fa.form_id inner join action a on a.id=fa.action_id inner join rol_form_action rfa on fa.id=rfa.form_action_id 
where  rfa.rol_id = 1 and s.name= 'TRAZA_APP'
ORDER BY fg.item_order ASC 
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



