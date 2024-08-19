# TODO
- Backend
    - [X] Finish DB setup 
    - [X] Create User routes
    - [X] Create Recipe routes
    - [X] Add auth to User 
    - [ ] Might need to change Recipe & Ingredient routes
        - I changed the User PATCH route because it didn't work initially, these route may need to be changed in the same way
- Frontend
    - [ ] Make landing page
    - [ ] Make sign up/login page
    - [ ] Make logged in home page
    - [ ] 
    - [ ] 
    - [ ] 

- Change DB schema if necessary in the future

# HAVE DONE
Backend is sort of done. I need to find a service(Most likely AWS), to deploy it. I think I need to 
sazonapp.com is registered on cloudflare. I just need to have that domain in the .env

# DESC
This web app allows users to create recipes and log what ingredients they have in their fridge right now. 

The app can then filter recipes showing you what recipes you can make with your current ingredients. You can also click on recipes and see what ingredients you have/lack in order to make the recipe.
Whenever a recipe is logged, the ingredients are automatically removed from stored ingredients.