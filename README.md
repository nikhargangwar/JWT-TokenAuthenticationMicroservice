# JWT-TokenAuthenticationMicroservice

created two application - 
1) creates authentication server using jwt token running on port 3000 , database - postgres2
-> above repo
2) created todo application running on port 4000, database - postgres
-> https://github.com/nikhargangwar/learningBackend/tree/main/RoutesControllerServicesExpress

##working
-auth server has its own databse(postgres2) which stores username & password.
-todo app has its own databse which stores task name and description.
-when a request is sent on todo app to login, req has to first pass through middleware validateLogin.
-validateLogin will sent axios api call (which includes username and password)to auth server.
- auth server will verify and validate the username and password - and will sent token back to user.

-when a request is sent on todo app to view all tasks, req has to first pass through middleware verify.
-verify will sent axios api call (which includes token from postman header)to auth server.
-auth server will check whether user already exist or not.
- if user is verified only when he will be able to view all tasks.
- if user is not verified - he will receive invalide token msg


