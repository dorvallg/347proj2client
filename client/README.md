This app has a coherent purpose which is a way to see how many people believe future events will occur
When network requests are being made there is a progress indicator 
The loyout and consistent with strong alignment 
The colors and fonts are asthetically pleasing (cornflower blue for the win)
The app is easy to navigate for we use labels to tell the user exactly what to do 
It is clear what can be clicked on and what those things do based on what is written on the buttons
The gloabl data is appropriately managed with redux
Component-specific data is managed via state such as lines 8 and 9 of BetAdder.js
Data owned by a parent and shared with children arrive via props such as the function Bet in Bet.js
The interface is cleanly decompoased into components which are BetAdder and Bet 
Hooks are used to selectively update the UI 
Actions are used to update the redux store 
State is only changed in immutable ways by way of useState setters and the reducer 
The DOM changes dynamically as the user interacts with the app
While our fetch executes we have a loading wheel display.
The project compiles with no warnings or errors
Our git repository is stored with Twodee
Our front end client can be accessed at https://project2.cjwalton.made
Our data is stored in a mysql database stored on Christopher Walton's droplet
We have an express-based webservice that interacts with our database and is only accessible through the droplet
Our webservice sends and recieves compelx data as JSON
Our endpoints have appropriate names ( every bet is fetched from the bets endpoint )
Our service was started with pm2
our server uses nginx
The back end git repository is also stored and shared 