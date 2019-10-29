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

insert into method (id,name,created_by,updated_by, created_at, updated_at) values (1,'GET',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (2,'POST',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (3,'PUT',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (4,'DEL',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (5,'PATH',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into method (id,name,created_by,updated_by, created_at, updated_at) values (6,'OPTION',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

insert into rol (id,name,created_by,updated_by, created_at, updated_at) values (1,'admin',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at)  values (1,'Principal',1,1,0,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into form_Group (id,name,item_order,show_in_menu,is_group_of_pages,icon,created_by,updated_by, created_at, updated_at)  values (2,'Seguridad',2,1,1,'security',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (1,'Inicio',1,'/',1,'home',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Home');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (2,'Mi perfil',2,'/profile',1,'person',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, 'Profile');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (3,'Usuarios',2,'/user',1,'people',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, 'User');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (4,'Roles',2,'/rol',1,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null, 'Rol');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (5,'Acciones de roles',2,'/rolFormAction',0,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'RolAction');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (6,'Acciones por formulario',2,'/formAction',0,'supervised_user_circle',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'FormAction');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (7,'Formularios',2,'/form',1,'chrome_reader_mode',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Form');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (8,'Barriles',1,'/barril',1,'delete_outline',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Barrel');
insert into form (id,name,form_group_id, path, show_in_menu,icon,created_by,updated_by, created_at, updated_at,mobile_screen) 
values (9,'Tarimas',1,'/tarima',1,'dns',0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null,'Pallet');


insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (1,'Crear','create',2,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (2,'Modificar','update',3,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (3,'Anular','cancel',5,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (4,'Listado','List',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (5,'Ver','view',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (6,'Eliminar','delete',4,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);
insert into action (id,name,path,method_id,created_by,updated_by, created_at, updated_at) values (7,'Listado permisos por rol','listByRolId',1,0,0,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),null);

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
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (37,6,7,7,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (38,7,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (39,7,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (40,7,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (41,7,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (42,7,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (43,7,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (44,8,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (45,8,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (46,8,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (47,8,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (48,8,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (49,8,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (50,9,1,1,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (51,9,2,2,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (52,9,3,3,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (53,9,4,4,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (54,9,5,5,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);
insert into form_action (id,form_id,action_id,item_order,created_by,updated_by, created_at, updated_at, is_the_rol) values (55,9,6,6,NULL,NULL,TO_CHAR(SYSDATE,'DD/MM/YYYY hh:mm:ss'),NULL,0);


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

select * from rol_form_action
select * from form