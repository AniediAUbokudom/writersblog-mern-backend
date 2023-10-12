Introduction:
As a creative writer and an emerging software engineer, I attempted to create a writing app to help writers deal with writer’s blog. 
The app has a create journal page, which contains a template of the same questions for writers who want to start somewhere or want some motivation to begin writing.
It has a prompts page that utilizes a random topic generator for writers who are struggling to come up with an idea.
It also features an all-Journals page for writers to track their writing progress.

 
I watched various tutorials and sought help from experienced software developers to get to this point. 
In addition to the class tutorials, these are some of the tutorials I used to understand the MERN project:
https://www.youtube.com/watch?v=KtnHb7FMk2Q&list=PLp50dWW_m40Vruw9uKGNqySCNFLXK5YiO
https://www.youtube.com/watch?v=Www6cTUymCY

For my Backend/Server, I used:
  - Express.js
  - Mongoose for MongoDB integration

Unsolved Problems: 

I added my Mongodb connection string to my .env file, and got errors no matter what I tried, so I had to add it directly to my server.js file before it started listening.
For the purpose of this project, I left it at that, but I will visit it after the class.

One of the biggest challenges I have had has been using ajax to fetch data from the server.
I managed to use it to finish this project somehow, while google searching every line of error, so I’ll visit Ajax after this project.
I was also unable to find APIs to generate random topics, so I ended up using one that generates random dad jokes, to fulfil the requirement of including a secondary API.

Future Enhancements:

Find or build an API that generates a random topic for writers.

Attempt to use Axios, instead of Ajax. I stumbled on Axios while creating this project, and it seemed easier to use than Ajax.
