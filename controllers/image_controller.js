import Images from "../models/image_model.js";

const uploadImage = async (req, res) => {
  try {
    const files = req.files.map((x) => x.location);
    const objects = { ...req.body, upload: files };

    const add = await Images.insertMany(objects);
    res.status(200).send(add);
  } catch (err) {
    console.log(err);
    res.status(400).send(`something went wrong!! ${err}`);
  }
};

const view_images = async (req, res) => {
  try {
    const images = await Images.find({});
    res.status(200).json({ data: images });
  } catch (err) {
    console.log(err);
    res.status(400).send(`something went wrong!! ${err}`);
  }
};

const view_image = async (req, res) => {
  try {
    const id = req.params.id;
    const image = await Images.findById(id);
    res.status(200).json({ data: image });
  } catch (err) {
    console.log(err);
    res.status(400).send(`something went wrong!! ${err}`);
  }
};

const delete_image = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_image = await Images.findByIdAndDelete(id);
    res.status(200).json({ data: delete_image });
  } catch (err) {
    console.log(err);
    res.status(400).send(`something went wrong!! ${err}`);
  }
};

const delete_single = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_img = await Images.findById(id);
    console.log(delete_img.upload);
    const index = req.query.index;
    const deleted = await delete_img.upload.splice(index, 1);
    await delete_img.save();
    res.status(200).send(`deleted successfully ${deleted}`);
  } catch (err) {
    console.log(err);
    res.status(400).send(`something went wrong!! ${err}`);
  }
};

export { uploadImage, view_images, view_image, delete_image, delete_single };
