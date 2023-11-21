# GenLab Hackathon Project

Technologies:
* React
* Vike https://vike.dev/ (A Vite+SSR solution)
* Redux
* Material UI https://mui.com/material-ui/

## Development

### Setup
1. Install the version of Node shown in `.node-version`
2. Create a `.env` file in the root with the Google Maps key (see below)
2. Run `npm install`
3. Run `npm run dev` and browse to http://localhost:3000/

#### .env file
VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY


### Build
1. Decide where the build will be and add that to the base in vite.config.js. (This should be / for most deployments.)
2. Run `npm run build`. This will create a dist file which you can deploy.

