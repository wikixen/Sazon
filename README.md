![SazonApp Logo](./Logo.png)

# DESC

Website that allows users to create recipes & keep track of ingredients in your
pantry

The app can then filter recipes showing you what recipes you can make with your
current ingredients. You can also click on recipes and see what ingredients you
have/lack in order to make the recipe.

## Currently

I've changed my mind about a few things. The app won't be a social media app but
rather a recipe & ingredient tracking app. I could expand this in the future to
allow for higher quality pantry checking(Allowing for barcode scanning for
ingredients, adding nutrition facts, calorie tracking, etc.)

### TODO

###### Frontend

- [ ] Add
      [auth](https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5)
- [x] Finish Router implementation
- [x] Switch from CSS to Tailwind
- [x] Refactor CSS
- [x] Refactor pages with RadixUI.
  - [x] Turn Login, Sign Up, & <s>Pantry?</s> into dialogs
- [X] Finish [Tanstack Form implementation](https://tanstack.com/form/latest)
- [x] Look into [Tanstack Store](https://tanstack.com/store/latest)
- [X] Add tanstack [virtualizer](https://tanstack.com/virtual/latest)
- [ ] Add tanstack [Query](https://tanstack.com/query/latest)
- [ ] Once over look and feel of app

###### Backend

- [ ] Replace env package with direnv
- [ ] Decide between Gorm & SQL
- [ ] Remove Gin & replace with Chi
- [ ] Switch DB to Turso(SQLite)
- [ ] Remake all models
  - [ ] User will be main model
  - [ ] Ingredients will just be a name with a boolean
- [ ] Once over routes


##### Future
- If lag becomes a problem add Tanstack Virtualizer
