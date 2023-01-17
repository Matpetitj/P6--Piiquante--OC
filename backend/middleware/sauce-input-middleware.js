module.exports = (req, res, next) => {
    // route post
    if (JSON.parse(req.body.sauce !== undefined)) {
      const sauce = JSON.parse(req.body.sauce);
      let { name, manufacturer, description, mainPepper } = sauce;
      let trimedTab = [];
  
      function toTrim(...string) {
        trimedTab = string.map((elt) => elt.trim());
      }
      toTrim(name, manufacturer, description, mainPepper);
  
      const minThreeCharacters = (currentValue) => currentValue.length >= 3;
      if (trimedTab.every(minThreeCharacters)) {
        next();
      } else {
        throw new Error("Tous les champs doivent faire au moins 3 caractères");
      }
    } else {
      // route put
      const sauce = req.body;
      let { name, manufacturer, description, mainPepper } = sauce;
      let trimedTab = [];
  
      function toTrim(...string) {
        trimedTab = string.map((elt) => elt.trim());
      }
      toTrim(name, manufacturer, description, mainPepper);
  
      const minThreeCharacters = (currentValue) => currentValue.length >= 3;
      if (trimedTab.every(minThreeCharacters)) {
        next();
      } else {
        throw new Error("Tous les champs doivent faire au moins 3 caractères");
      }
    }
  };