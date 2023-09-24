# NFT Marketplace - Remix.run

Welcome to our NFT Marketplace, built with Remix.run!

## Project Overview

Our NFT Marketplace is a comprehensive platform that enables users to explore, buy, and sell NFTs (Non-Fungible Tokens). It offers a wide range of features and functionalities to enhance the NFT experience.

## Key Features

- **Authentication:** Users can securely log in and manage their accounts, ensuring a personalized experience.

### Pages

1. **Auth:** User authentication and registration.
2. **Blogs:** A space for users to read and create blog posts.
3. **Collection:** Manage and showcase your NFT collections.
4. **Dashboard:** The central hub for users to customize their experience and manage their NFT assets.
5. **Explore:** Discover a vast array of NFTs created by the community.
6. **Help Center:** Get assistance and support when needed.
7. **NFT:** Detailed views and management of individual NFTs.
8. **Resources:** Access valuable resources related to the NFT ecosystem.
9. **User:** Profile and account settings.
10. **Ranking:** User rankings based on NFT activity.

- **Customization:** Our platform allows users to tailor the appearance of their experience. This includes themes, layouts, font, colors, and more, all configurable from the dashboard's settings/preferences/appearance section.

- **User Dashboard - Discover Page:** The user dashboard features a discover page, similar to the experience of social media platforms like Instagram. Users can easily explore trending NFTs and discover new favorites.

- **Explore Page:** The explore page offers a comprehensive catalog of all available NFTs, making it easy for users to find unique assets they are interested in.


# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
