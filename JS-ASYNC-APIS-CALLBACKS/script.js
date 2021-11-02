const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  }, 3000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk Pap, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
