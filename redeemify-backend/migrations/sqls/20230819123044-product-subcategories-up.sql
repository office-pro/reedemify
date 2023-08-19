/* Replace with your SQL commands */

CREATE TABLE productsubcategories (
  subCategoryId serial primary key ,
  categoryId int references productcategories(categoryId),
  subCategoryName varchar(100) not null,
  subCategoryDescription varchar(1000) 
);
