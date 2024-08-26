# TODO
- Backend
    - [X] Finish DB setup 
    - [X] Create User routes
    - [X] Create Recipe routes
    - [X] Add auth to User 
    - [ ] Might need to change Recipe & Ingredient routes
        - I changed the User PATCH route because it didn't work initially, these routes may need to be changed in the same way
- Frontend
    - Implement design 1st, Functionality 2nd
        - [ ] Make landing view (Inspo from: https://www.boostcamp.app/ )
            - Two buttons at the top for login/signup
            - Some sentence saying why site is cool
            - Some pics from logged in site showing functionality
        - [ ] Make sign up/login view
            - [x] Two pages which can link to each other and back to landing page
            - [x] Sign up functionality
            - [ ] Login functionality
                - https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-1-building-a-login-page
            - [ ] Need to figure out handle cookie state
        - [ ] Make logged in home view
        - [ ] Make all recipe view
        - [ ] Make individual recipe view
        - [ ] 
        - [ ] Make settings view
        - [ ] Make sure colors and themes all sync

- Change DB schema if necessary in the future

# HAVE DONE
Backend is sort of done. I need to find a service(Most likely AWS), to deploy it. I think I need to 
sazonapp.com is registered on cloudflare. I just need to have that domain in the .env

# DESC
This web app allows users to create recipes and log what ingredients they have in their fridge right now. 

The app can then filter recipes showing you what recipes you can make with your current ingredients. You can also click on recipes and see what ingredients you have/lack in order to make the recipe.
Whenever a recipe is logged, the ingredients are automatically removed from stored ingredients.