use securitydata;

drop table ROL_FORM_ACTION;
drop table form_action;
drop table form;
drop table action;
drop table method;
drop table form_group;
drop table users;
drop table rol;
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
 
-- SYSTEM
insert into system (id,name,created_by,updated_by, created_at, updated_at) values (1,'TRAZA_WEB',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into system (id,name,created_by,updated_by, created_at, updated_at) values (2,'TRAZA_APP',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- ROL
insert into rol (id,name,created_by,updated_by, created_at, updated_at) values (1,'admin',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- METHOD
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (1,'GET',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (2,'POST',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (3,'PUT',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (4,'DEL',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (5,'PATH',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (6,'OPTION',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- FORM GROUP 
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (1,'Principal',1,1,0,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (2,'Seguridad',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (3,'Barriles',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (4,'Tarimas',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (5,'Pitas/Tanques',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,1);

insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (6,'Principal',1,1,0,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (7,'Seguridad',10,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (8,'Barriles',2,1,1,'battery-full',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (9,'Tarimas',3,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at, system_id)  values (10,'Pitas/Tanques',4,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,2);

-- FORM select * from form
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(1,'Inicio',1,'/',1,'home',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(2,'Mi perfil',2,'/profile',1,'person',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(3,'Usuarios',2,'/user',1,'people',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(4,'Roles',2,'/rol',1,'supervised_user_circle',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(5,'Acciones de roles',2,'/rolFormAction',0,'supervised_user_circle',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(6,'Acciones por formulario',2,'/formAction',0,'supervised_user_circle',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(7,'Formularios',2,'/form',1,'chrome_reader_mode',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(8,'Sistemas',2,'/system',1,'desktop_windows',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(9,'Barriles',1,'/barril',1,'delete_outline',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(10,'Tarimas',1,'/tarima',1,'dns',1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(11,'Inicio',6,'/',1,'home',2,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'Home');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(12,'Mi perfil',7,'/profile',1,'person',2,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'Profile');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(13,'Barriles',8,'/barril',1,'battery-full',2,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'Barrel');
INSERT INTO form (id,name,form_group_id,path,show_in_menu,icon,system_id,created_at,updated_at,created_by,updated_by,mobile_screen) values(14,'Tarimas',9,'/tarima',1,'dns',2,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,0,0,'Pallet');


-- ACTION
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (1,'Crear','create',2,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (2,'Modificar','update',3,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (3,'Anular','cancel',5,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (4,'Listado','list',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (5,'Ver','view',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (6,'Eliminar','delete',4,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

-- FORM_ACTION
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (1,1,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (2,1,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (3,1,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (1,1,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (1,1,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (1,1,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (7,2,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (8,2,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (9,2,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (5,2,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (6,2,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (7,2,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (13,3,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (14,3,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (15,3,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (9,3,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (11,3,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (13,3,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (19,4,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (20,4,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (21,4,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (13,4,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (16,4,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (19,4,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (25,5,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (26,5,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (27,5,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (17,5,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (21,5,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (25,5,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (31,6,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (32,6,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (33,6,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (21,6,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (26,6,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (31,6,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (37,7,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (38,7,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (39,7,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (25,7,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (31,7,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (37,7,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (43,8,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (44,8,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (45,8,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (29,8,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (36,8,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (43,8,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (49,9,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (50,9,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (51,9,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (33,9,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (41,9,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (49,9,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (55,10,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (56,10,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (57,10,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (37,10,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (46,10,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (55,10,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (61,11,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (62,11,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (63,11,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (41,11,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (51,11,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (61,11,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (67,12,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (68,12,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (69,12,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (45,12,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (56,12,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (67,12,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (73,13,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (74,13,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (75,13,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (49,13,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (61,13,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (73,13,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (79,14,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (80,14,2,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (81,14,3,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (53,14,4,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (66,14,5,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (79,14,6,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);


-- ROL_FORM_ACTION
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (1,1,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (2,2,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (3,3,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (4,4,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (5,5,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (6,6,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (7,7,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (8,8,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (9,9,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (10,10,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (11,11,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (12,12,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (13,13,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (14,14,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (15,15,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (16,16,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (17,17,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (18,18,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (19,19,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (20,20,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (21,21,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (22,22,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (23,23,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (24,24,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (25,25,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (26,26,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (27,27,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (28,28,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (29,29,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (30,30,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (31,31,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (32,32,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (33,33,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (34,34,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (35,35,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (36,36,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (37,37,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (38,38,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (39,39,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (40,40,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (41,41,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (42,42,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (43,43,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (44,44,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (45,45,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (46,46,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (47,47,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (48,48,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (49,49,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (50,50,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (51,51,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (52,52,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (53,53,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (54,54,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (55,55,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (56,56,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (57,57,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (58,58,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (59,59,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (60,60,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (61,61,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (62,62,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (63,63,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (64,64,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (65,65,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (66,66,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (67,67,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (68,68,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (69,69,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (70,70,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (71,71,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (72,72,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (73,73,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (74,74,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (75,75,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (76,76,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (77,77,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (78,78,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );
INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (79,79,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (80,80,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (81,81,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (82,82,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (83,83,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );INSERT INTO ROL_FORM_ACTION (id,form_action_id,rol_id, created_at) values (84,84,1,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss') );


-- USERS SELECT * FROM USERS
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



