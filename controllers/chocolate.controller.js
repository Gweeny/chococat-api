import Model from "../models/chocolate.model.js";

export const addChocolate = async (req, res) => {
  const data = new Model({
    chocolateName: req.body.title,
    picture: req.body.image,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const skip =
      req.query.skip && /^\d+$/.test(req.query.skip)
        ? Number(req.query.skip)
        : 0;
    const data = await Model.find({}, undefined, { skip, limit: 9 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateChocolate = async (req, res) => {
  try {
    const id = req.params.id;
    const updateChocolate = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updateData, options);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteChocolate = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.json(`Le chocolat ${data.title} a bien été supprimé`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
