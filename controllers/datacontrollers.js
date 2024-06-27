const express = require("express");
const cors = require("cors");
const General = require("../Models/GeneralDataModel");
const router = express.Router();
const options = {
  origin: "http://localhost:5173/",
  optionsSuccessStatus: 200,
};

// Create
router.post("/adduser", async (req, res) => {
  let {
    title,
    firstname,
    lastname,
    position,
    company,
    businessarena,
    employee,
  } = req.body;

  console.log(req.body);
  try {
    // Check if a user with the same name already exists
    const existingUser = await General.findOne({ firstname: firstname });

    if (existingUser) {
      return res.status(400).send("User with the same name already exists");
    }

    // Create a new user
    const newUser = new General({
      title: title,
      firstname: firstname,
      lastname: lastname,
      position: position,
      company: company,
      businessarena: businessarena,
      employee: employee,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Failed to add user:", err);
    res.status(500).send(err.message || "Internal Server Error");
  }
});

// Retrieve all users
router.get("/adduser", async (req, res) => {
  try {
    const users = await userModal.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Failed to retrieve users:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Retrieve a user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await userModal.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    console.error("Failed to retrieve user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  let {
    title,
    firstname,
    position,
    company,
    businessarena,
    employee,
    street_nr,
    additionalinfo,
    zipcode,
    place,
    country,
    code,
    phonenumber,
    email,
  } = req.body;

  try {
    const updatedUser = await userModal.findOneAndUpdate(
      { _id: req.params.id },
      {
        title,
        firstname,
        position,
        company,
        businessarena,
        employee,
        street_nr,
        additionalinfo,
        zipcode,
        place,
        country,
        code,
        phonenumber,
        email,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Failed to update user:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await userModal.findOneAndDelete({
      _id: req.params.id,
    });

    if (!deletedUser) {
      return res.status(404).send("User not found");
    }

    res.status(200).json("User deleted successfully");
  } catch (err) {
    console.error("Failed to delete user:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
