/* Replace with your SQL commands */

CREATE TABLE products (
  productid serial primary key,
  categoryId int references productcategories(categoryId),
  subCategoryId int references productsubcategories(subCategoryId),
  productName varchar(200) not null,
  price int,
  points int not null,
  productDescription varchar(1000)
);