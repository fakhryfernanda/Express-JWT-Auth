# Catatan

## Concept
[Sequelize Basic](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
[Sequelize Getter Setter](https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/)
[Sequelize Model Querying Basic](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
[Req Object](https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs)

## Methods
Methods	    Urls	            Actions
POST	    /api/auth/signup	signup new account
POST	    /api/auth/signin	login an account
GET	        /api/test/all	    retrieve public content
GET	        /api/test/user	    access User’s content
GET	        /api/test/mod	    access Moderator’s content
GET	        /api/test/admin	    access Admin’s content


## Controller for testing Authorization
There are 4 functions:
– `/api/test/all` for public access
– `/api/test/user` for loggedin users (role: user/moderator/admin)
– `/api/test/mod` for users having moderator role
– `/api/test/admin` for users having admin role


## Authorization:
- GET `/api/test/all`
- GET `/api/test/user` for loggedin users (user/moderator/admin)
- GET `/api/test/mod` for moderator
- GET `/api/test/admin` for admin