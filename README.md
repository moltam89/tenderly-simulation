
# 🏗 Tenderly Simulation with Create React App

> Simulating transactions using [Tenderly Simulation API](https://docs.tenderly.co/simulations-and-forks/simulation-api) with [Create React App](https://github.com/facebook/create-react-app).

<img width="1790" alt="image" src="https://user-images.githubusercontent.com/1397179/193095885-bdccf5c2-326d-4417-b9b9-87a117250b45.png">


# 🏄‍♂️ Quick Start

Prerequisites: [Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads).

```bash
git clone https://github.com/moltam89/tenderly-simulation.git
cd tenderly-simulation
npm install
```
Register an account at [tenderly.co](https://tenderly.co/).<br>
To get your Access Token, go to the [**Settings > Authorization**](https://dashboard.tenderly.co/account/authorization) and click on **Create Access Token**.<br>
Create a **.env** file in the root directory (tenderly-simulation):

    REACT_APP_TENDERLY_USER = "<Tenderly_UserName>"
    REACT_APP_TENDERLY_PROJECT = "project"
    REACT_APP_TENDERLY_ACCESS_KEY = "<Tenderly_AccessToken>"

```bash
npm start
```
# 📚 Tutorial
0. Make sure to fulfil the prerequisites from the previous [chapter](https://github.com/moltam89/tenderly-simulation/#%EF%B8%8F-quick-start).<br>
You have to restart the app when you create/modify the **.env** file.
2. Create react app
	```sh
	npx create-react-app tenderly-simulation
	cd tenderly-simulation
	```
3. Add axios as dependency and install it: [b6b689dbc5f8d98b3965f32174fb4480f45cca57](https://github.com/moltam89/tenderly-simulation/commit/b6b689dbc5f8d98b3965f32174fb4480f45cca57)

	 ```npm install```	

Alternatively, you can cherry-pick the commits from this current repository.
```sh
git remote add upstream https://github.com/moltam89/tenderly-simulation
git fetch upstream master
git cherry-pick b6b689dbc5f8d98b3965f32174fb4480f45cca57
```


3. Start the react app, by default it opens up at localhost:3000 <br>
	 ```npm start```
4. Create TenderlySimulation.jsx skeleton: [1e702a0266ad14d5a657145c52b13e4bdeee3574](https://github.com/moltam89/tenderly-simulation/commit/1e702a0266ad14d5a657145c52b13e4bdeee3574)
5. Imports and constants: [2d921dc389a165baa958b1fd6fd17738a83fdf50](https://github.com/moltam89/tenderly-simulation/commit/2d921dc389a165baa958b1fd6fd17738a83fdf50)
6. Create example transaction params and simulate it: [c13bf04f4dac5267a416ed1161c37b6aa7c8421b](https://github.com/moltam89/tenderly-simulation/commit/c13bf04f4dac5267a416ed1161c37b6aa7c8421b)
7. Display simulation result: [cc89e553cf17d8d9bba39c12bdb5d24a88a97ea8](https://github.com/moltam89/tenderly-simulation/commit/cc89e553cf17d8d9bba39c12bdb5d24a88a97ea8)
8. More examples: [a1ef2a6b65ed22496d7f8cdf8379e9c2616a02e2](https://github.com/moltam89/tenderly-simulation/commit/a1ef2a6b65ed22496d7f8cdf8379e9c2616a02e2)
	
