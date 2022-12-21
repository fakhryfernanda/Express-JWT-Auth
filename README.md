# Catatan

## Concept
[Sequelize Basic](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
[Sequelize Getter Setter](https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/)
[Sequelize Model Querying Basic](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
[Req Object](https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs)

## Methods
<table>
    <thead>
        <tr>
            <th>Methods</th>
            <th>Urls</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/auth/signup</td>
            <td>signup new account</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/auth/signin</td>
            <td>login an account</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/test/all</td>
            <td>retrieve public content</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/test/user</td>
            <td>access User’s content</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/test/mod</td>
            <td>access Moderator’s content</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/test/admin</td>
            <td>access Admin’s content</td>
        </tr>
    </tbody>
</table>


## Controller for testing Authorization
There are 4 functions:
– /api/test/all for public access
– /api/test/user for loggedin users (role: user/moderator/admin)
– /api/test/mod for users having moderator role
– /api/test/admin for users having admin role


## Authorization:
- GET `/api/test/all`
- GET `/api/test/user` for loggedin users (user/moderator/admin)
- GET `/api/test/mod` for moderator
- GET `/api/test/admin` for admin