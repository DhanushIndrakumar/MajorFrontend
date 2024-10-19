
This is the repository consisting the frontend part of minor project 2
Kindly consider only the mini2Frontend Folder for the project, there has been a mistake by uploading the other files as well.

#Requirements

1. Java >= java 8

2. Maven - 3.x.x

3. Mysql - 5.x.x

4. lombok

5. VsCode

6. React App

7. IntelliJIdea

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/DhanushIndrakumar/mini2Frontend.git
git clone https://github.com/DhanushIndrakumar/mini2Backend.git
```
**2. Key points of the application**

+ The Backend files and Frontend files for the application are in 2 different folders .

+ The Frontend was done using React app through VSCode.

+ The Backend was implemented using Spring Boot through IntellijIdea.

+ There have been 2 different repos for frontend and backend files.


**3. Run the Backend application**

+ open `mini2Backend/demo/src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

+ after changing both the username and password as per your mysql installation
  
+ we can run it from NetBeans or intellij IDEA.

+ The app will start running at http://localhost:8082/**
  
+ Since the port is set to localhost:8082 and the user is free to change the port if they wish.

**4. Explore Rest APIs**

+ Once the backend is working. Developer can go through the OpenApi documentation as it gives more understanding and working of the APIs.

 ![image](https://github.com/user-attachments/assets/33dc07af-548d-4bfb-b4b7-79c007dbebab)
+ We can see the API Documentation at

```bash
    http://localhost:8082/swagger-ui/index.html#/
```
+ we need to first execute the register and login user APIs for the other APIs to work.


**5. Exploring the Api to insert or create User(patient) in the database**

+ The register and Login API does not require any authentication as it forms the base for the user details being stored in the database and then authenticated when they attempt to login. 

+ The request body of the API with the response body is shown below:

![image](https://github.com/user-attachments/assets/c4dd45f2-830d-4290-a42c-98986da0b4c2)

**6. JWT generation using Login API**

+ Api works in OpenApi documentation as well.The image below shows the request and the response body of the Login Api.

![image](https://github.com/user-attachments/assets/cff77088-f0e8-4864-bcec-7b0ca52324de)

+ As seen in the above image JWT is being generated using which other APIs can be accessed without which 403 error will be shown.

**7. Testing the API to book the appointment without inserting token in the header**

![image](https://github.com/user-attachments/assets/6c8121c5-d6aa-44ab-846f-12a127c44e33)

+ It can be seen that without being authenticated the user cannot access other APIs which performs operations such as Booking,Cancelling appointments etc.

**8. Testing the API to book the appointment with inserting JWT in the header**

![image](https://github.com/user-attachments/assets/93cfb76f-e520-48ea-a940-702336b0f44b)

+ It can be seen that once the user/pateint is authenticated the user can access other APIs which performs operations such as Booking,Cancelling appointments etc.

+ We can see that appointment ID and appointment Date has been recieved as response.

+ The same works for all other APIs .JWT forms the most important aspect in any security systems.

**9. Running the Frontend application**

+ Frontend is being connected to backend APIs using Axios and it can also be performed using Fetch and Redux toolkit.

+ Open Frontend Folder through VSCode after cloning and give the command npm start.

+ The first page that appears is as shown below:

  ![image](https://github.com/user-attachments/assets/33c1be9c-d4b8-474b-a112-0c864c76bf00)

+ When the User provides all form details and click on submit, user is directed to login page as shown below and the user is asked to enter email and password post which JWT will be generated and the user will be authenticated.

 ![image](https://github.com/user-attachments/assets/a4d6a7fe-9a6c-464d-8872-796ad117cb6b)

+ After the user is being authenticated login page is directed to User Operations page, Where the user can view all the User Operations that can be performed in the system

![image](https://github.com/user-attachments/assets/487fcd7c-4459-4b89-8c24-b9403624a4a9)

+ If the User clicks on Book Appointment, he/she will be directed to Book Appointment page

![image](https://github.com/user-attachments/assets/fdbfc643-6fcc-43bf-887d-cd656d5b056a)

+ We can see that the appointment has been successfully booked also getting the appointment ID and appointment date as response.

  ![image](https://github.com/user-attachments/assets/337b3dca-33fb-47c8-bf4c-fabdd9efff52)

+ The above image shows that the appointment booked can also be cancelled under circumstances.

 ![image](https://github.com/user-attachments/assets/b7a2bace-c4c8-4093-925b-4bccf1c59858)

+ It can be seen in the above image that when the patient clicks on View Medication nothing will be shown as of now since doctor has not prescribed the medicine yet.

 ![image](https://github.com/user-attachments/assets/1a8d62ab-6bfb-4c60-aadc-247389510526)

+ We also have admin/login shown in the above image.
  
![image](https://github.com/user-attachments/assets/928a79a3-515c-48e2-83ce-cae4c7d55bde)

+ As soon as Admin/Doctor login he is redirected to Doctor Operations page as shown in the above image.

![image](https://github.com/user-attachments/assets/8d821156-7d50-4fb8-9940-f62afc15cde2)

+ When Doctor clicks on View Appointment, All the appointments booked is shown in the above image.

  ![image](https://github.com/user-attachments/assets/122bd6f0-14b5-40cc-9494-9df98fb4fb49)

+ Doctor when clicked on delete, the appointment will be deleted and the same is shown in the above image, here the user name Latha's appointment has been cancelled.
  
![image](https://github.com/user-attachments/assets/0e9bb8ee-fd95-4f88-ba1f-c50516e14b8d)

+ Doctor when clicked on Prescribe Medicine he/she is allowed to presribe medicine and medicine list can be viewed by the patient and the same is shown in the above image.

+ Doctor can also edit the medicine list if required.
