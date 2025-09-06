import Portfolio from "../models/Portfolio.js";

// @desc    Get all portfolio projects
// @route   GET /api/portfolio
export const getPortfolios = async (req, res) => {
  try {
    const projects = await Portfolio.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Add a new project
// @route   POST /api/portfolio
export const addPortfolio = async (req, res) => {
  try {
    const { title, description, imageUrl, githubLink, liveDemo } = req.body;
    const newProject = new Portfolio({
      title,
      description,
      imageUrl,
      githubLink,
      liveDemo,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete a project
// @route   DELETE /api/portfolio/:id
export const deletePortfolio = async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.deleteOne();
    res.json({ message: "Project removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
