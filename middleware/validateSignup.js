const passwordSchema = require("../models/password");
const emailValidator = require("email-validator");

const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !emailValidator.validate(email)) {
    return res.status(400).json({ message: "Email invalide" });
  }

  const errors = passwordSchema.validate(password, { details: true });

  if (errors.length > 0) {
    return res.status(400).json({
      message: "Mot de passe invalide",
      details: errors.map((error) => {
        switch (error.validation) {
          case "min":
            return "Le mot de passe doit contenir au moins 8 caractères";
          case "max":
            return "Le mot de passe ne doit pas dépasser 100 caractères";
          case "uppercase":
            return "Le mot de passe doit contenir au moins une majuscule";
          case "lowercase":
            return "Le mot de passe doit contenir au moins une minuscule";
          case "digits":
            return "Le mot de passe doit contenir au moins 2 chiffres";
          case "spaces":
            return "Le mot de passe ne doit pas contenir d'espaces";
          case "oneOf":
            return "Ce mot de passe est trop courant";
          case "symbols":
            return "Le mot de passe doit contenir au moins un symbole";
          default:
            return "Mot de passe invalide";
        }
      }),
    });
  }
  next();
};

module.exports = validateSignup;
