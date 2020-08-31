# eficode-timetables

Notes about the solution:

URL: http://13.49.51.79/
Github repo: https://github.com/alexey-makarov-1978/eficode-timetables

Mandatory

- The application uses the Helsinki Regional Transport (HSL) open data interface.
  - GraphQL Routing API was used to query the journey
  - Geocoding API/Autocomplete API was used to provide autocomplete to Mista/Mihin textboxes
- The application uses graphql as the query language. For autocomplete function it uses GET requests.
- The solution is published in AWS cloud wrapped as docker container on the top of Linux EC2 server.
- Dev and Prod docker configuration files created. Published in the cloud using Prod configuration.

Optional

- The solution implemented using React. create-react-app is used as boilerplate.
- Material UI framework is used to make the display pretty.
- Jest and Enzyme added for UI testing.
- Added eslint ( as a part of create-react-app boilerplate).

Docker commands used to create production image/run container:

docker build -f Dockerfile.prod -t tt:prod .
docker run -it --rm -p 80:80 tt:prod
