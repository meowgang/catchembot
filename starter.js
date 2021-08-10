const axios = require('axios');
const chalk = require('chalk');
const titleCase = (s) =>
  s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase()) //Need some logic for Mr. Mime, Mime Jr., and Tapu Koko. In PokeAPI, space is represented with a -

let starterType = '';

//*Creating arrays for all starter Pokemon*//
const grassStarters = ["1","152","252","387","495","650","722","810"];
const fireStarters = ["4","155","255","390","498","653","725","813"];
const waterStarters = ["7","158","258","393","501","656","728","816"];
const otherStarters = ["25","133"];
const starters = grassStarters.concat(fireStarters,waterStarters,otherStarters);

//*Picking a random starter Pokemon*//
const randomGrassStarter = grassStarters[Math.floor(Math.random() * grassStarters.length)];
const randomFireStarter = fireStarters[Math.floor(Math.random() * fireStarters.length)];
const randomWaterStarter = waterStarters[Math.floor(Math.random() * waterStarters.length)];
const randomOtherStarter = otherStarters[Math.floor(Math.random() * otherStarters.length)];
const randomStarter = starters[Math.floor(Math.random() * starters.length)];

//*Returning the starter Pokemon*//
 async function getGrassStarterMetadata() {
    console.log(chalk.green(`You have chosen a grass starter! Grabbing attributes from PokeAPI for Pokemon ${randomGrassStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomGrassStarter}`
          let response =  await axios.get(sourceUrl);
          // console.log(response.data);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getFireStarterMetadata() {
    console.log(chalk.green(`You have chosen a fire starter! Grabbing attributes from PokeAPI for Pokemon ${randomFireStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomFireStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getWaterStarterMetadata() {
    console.log(chalk.green(`You have chosen a water starter! Grabbing attributes from PokeAPI for Pokemon ${randomWaterStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomWaterStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getOtherStarterMetadata() {
    console.log(chalk.green(`You have chosen a non-traditional starter! Grabbing attributes from PokeAPI for Pokemon ${randomOtherStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomOtherStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
async function getStarterMetadata() {
    console.log(chalk.green(`You have chosen a random starter! Grabbing attributes from PokeAPI for Pokemon ${randomStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };

//*Returning starter Pokemon*//
async function init(){
    if (starterType === 'grass') {
        const starterMetadata = await getGrassStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'fire') {
        const starterMetadata = await getFireStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'water') {
        const starterMetadata = await getWaterStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'other') {
        const starterMetadata = await getOtherStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (!starterType) {
        const starterMetadata = await getStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    }

init();
