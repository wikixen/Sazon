![SazonApp Logo](./Logo.png)
# DESC
This app allows users to create recipes and log what ingredients they have in their fridge right now. 

The app can then filter recipes showing you what recipes you can make with your current ingredients. You can also click on recipes and see what ingredients you have/lack in order to make the recipe.
Whenever a recipe is logged, the ingredients are automatically removed from stored ingredients.

# Refactor
This refactor is switch code from an MVC pattern to a Repo/Service Pattern for easier refactoribility. Refer to https://github.com/sikozonpc/GopherSocial/ repo for any thoughts.

## TODO:
- [ ] Figure postgres setup
- [ ] Add migrations using [Goose](https://github.com/pressly/goose) to cmd/api/migrate/migrations
- [ ] Add auth
- [ ] Add email service
- [ ] Future...