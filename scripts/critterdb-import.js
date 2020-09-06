// Below is boilerplate from Foundry Docs on importing actor data
// Reference a Compendium pack by it's callection ID
const pack = game.packs.find(p => p.collection === `${moduleName}.${packName}`);

// Load an external JSON data file which contains data for import
const response = await fetch("worlds/myworld/data/import.json");
const content = await response.json();

// Create temporary Actor entities which impose structure on the imported data
const actors = Actor.createMany(content, {temporary: true});

// Save each temporary Actor into the Compendium pack
for ( let a of actors ) {
  await pack.importEntity(a);
  console.log(`Imported Actor ${a.name} into Compendium pack ${pack.collection}`);
}